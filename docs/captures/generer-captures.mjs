// Régénère les captures du README (thèmes clair et sombre) : node docs/captures/generer-captures.mjs
// Données : riskr-data.js (démonstration fictive), servi en http, donc riskr-data.local.js n'est jamais chargé.
// Chrome headless avec un profil jetable : aucune donnée du navigateur personnel n'est utilisée.
// Chemin de Chrome modifiable par la variable d'environnement CHROME.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, rm, mkdtemp } from 'node:fs/promises';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml' };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Serveur statique minimal : seuls les fichiers publics de l'application sont servis
const PUBLIC = new Set(['/riskr.html', '/riskr-data.js', '/riskr.png', '/riskr.svg', '/icon.svg']);
const server = createServer(async (request, response) => {
    const path = new URL(request.url, 'http://localhost').pathname;
    if (!PUBLIC.has(path)) return response.writeHead(404).end();
    response.writeHead(200, { 'Content-Type': TYPES[extname(path)] || 'application/octet-stream' });
    response.end(await readFile(join(ROOT, path)));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const URL_APP = `http://127.0.0.1:${server.address().port}/riskr.html`;

const profile = await mkdtemp(join(tmpdir(), 'riskr-captures-'));
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', '--lang=fr-FR', 'about:blank'], { stdio: 'ignore' });

let target;
for (let i = 0; i < 50 && !target; i++) {
    await sleep(200);
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page'); } catch {}
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(resolve => ws.addEventListener('open', resolve));
let nextId = 0;
const pending = new Map();
ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (pending.has(message.id)) { pending.get(message.id)(message); pending.delete(message.id); }
});
const send = (method, params = {}) => new Promise(resolve => {
    const id = ++nextId;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
});
const evaluate = async expression => {
    const { result } = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
};

// Zone capturée : du haut de `from` au bas de `to`, hauteur bornée à maxHeight (coordonnées de page)
async function shot(dir, name, prepare, from, to, maxHeight = 1400) {
    await evaluate(`(async () => { ${prepare} })()`);
    await sleep(900);
    const clip = await evaluate(`(() => {
        const a = document.querySelector(${JSON.stringify(from)}).getBoundingClientRect();
        const b = document.querySelector(${JSON.stringify(to)}).getBoundingClientRect();
        const left = Math.max(0, Math.min(a.left, b.left) - 16), top = Math.max(0, a.top + scrollY - 16);
        return { x: left, y: top, width: Math.min(innerWidth, Math.max(a.right, b.right) + 16) - left,
            height: Math.min(${maxHeight}, b.bottom + scrollY + 16 - top), scale: 1 };
    })()`);
    const { result } = await send('Page.captureScreenshot', { format: 'png', clip, captureBeyondViewport: true });
    await writeFile(join(dir, `${name}.png`), Buffer.from(result.data, 'base64'));
    console.log(`${dir.slice(ROOT.length + 1)}/${name}.png`, Math.round(clip.width), '×', Math.round(clip.height));
}

const tabs = '.view-tabs, nav[role="tablist"]';
const reset = `window.scrollTo(0, 0); if (openRiskUid) closeRiskSheet();`;
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1.5, mobile: false });
for (const [theme, folder] of [['light', 'clair'], ['dark', 'sombre']]) {
    const dir = join(HERE, folder);
    await mkdir(dir, { recursive: true });
    await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: theme }] });
    // Paramètre propre au thème : sinon, seule l'ancre change et la page n'est pas rechargée (thème figé au chargement)
    await send('Page.navigate', { url: `${URL_APP}?theme=${theme}#matrices` });
    await sleep(2500);
    await shot(dir, 'matrices', `${reset} showTab('matrices'); setMatrixView('risks'); setMatrixLayout('trajectory');
        if (!matrixOptions.target) toggleMatrixOption('target');`, 'header', '[data-panel="matrices"] .collapsible-section');
    await shot(dir, 'matrices-groupes', `${reset} setMatrixView('groups'); setMatrixLayout('after');`,
        '[data-panel="matrices"] .collapsible-section', '[data-panel="matrices"] .collapsible-section');
    await shot(dir, 'registre', `${reset} setMatrixView('risks'); showTab('registre');`, tabs, '[data-panel="registre"]', 2000);
    await shot(dir, 'fiche', `${reset} showTab('registre'); openRiskSheet('demo-3-1');`, '#risk-sheet', '#risk-sheet', 1500);
    await shot(dir, 'plan-actions', `${reset} showTab('actions'); setActionGrouping('state');`, tabs, '[data-panel="actions"]', 1100);
    await shot(dir, 'revues', `${reset} showTab('revues');`, tabs, '[data-panel="revues"]');
    await shot(dir, 'comite', `${reset} showTab('comite');`, tabs, '[data-panel="comite"]');
}

ws.close();
chrome.kill();
server.close();
await sleep(1500);
await rm(profile, { recursive: true, force: true });
