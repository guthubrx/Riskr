import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const server = createServer(async (request, response) => {
    const name = new URL(request.url, 'http://localhost').pathname;
    if (!['/riskr.html', '/riskr-data.js', '/riskr.svg', '/riskr.png', '/icon.svg'].includes(name)) return response.writeHead(404).end();
    try {
        response.writeHead(200, { 'Content-Type': extname(name) === '.js' ? 'text/javascript' : extname(name) === '.html' ? 'text/html' : 'image/svg+xml' });
        response.end(await readFile(join(root, name)));
    } catch (error) { response.writeHead(404).end(error.message); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const profile = await mkdtemp(join(tmpdir(), 'riskr-project-test-'));
const port = 10000 + Math.floor(Math.random() * 40000);
const chrome = spawn(process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', 'about:blank'
], { stdio: 'ignore' });
let socket;
try {
    let target;
    for (let attempt = 0; attempt < 80 && !target; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(item => item.type === 'page'); } catch {}
    }
    assert.ok(target, 'Chrome démarre');
    socket = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
    let serial = 0;
    const pending = new Map();
    socket.addEventListener('message', event => {
        const message = JSON.parse(event.data);
        if (pending.has(message.id)) { pending.get(message.id)(message); pending.delete(message.id); }
    });
    const send = (method, params = {}) => new Promise(resolve => {
        const id = ++serial;
        pending.set(id, resolve);
        socket.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async expression => {
        const reply = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
        if (reply.result.exceptionDetails) throw new Error(JSON.stringify(reply.result.exceptionDetails));
        return reply.result.result.value;
    };
    await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/riskr.html` });
    for (let attempt = 0; attempt < 80; attempt++) {
        if (await evaluate('document.readyState === "complete" && typeof committeeStats === "function"')) break;
        await new Promise(resolve => setTimeout(resolve, 150));
    }
    assert.equal(await evaluate('risks.length'), 11);
    const facts = await evaluate(`(() => {
        const old = normalizeRisk({ id: 'test-old', title: 'Legacy', assessmentBefore: [4,4], assessmentAfter: [2,2], mesures: [{ texte:'Pending', etat:'todo' }] });
        const opportunity = risks.find(risk => risk.kind === 'opportunity');
        const first = risks.find(risk => risk.uid === 'demo-1-1');
        const stats = committeeStats();
        const provision = provisionSummary();
        const roundTrip = buildModel(serializeModel()).risks.find(risk => risk.uid === first.uid);
        return { oldCurrent: old.assessmentCurrent, oldReview: old.currentNeedsReview,
            firstCurrent: first.assessmentCurrent, firstForecast: first.assessmentAfter,
            decisionCount: roundTrip.decisions.length, opportunity: opportunity.title,
            topHasOpportunity: stats.top.some(risk => risk.uid === opportunity.uid),
            provisionHasOpportunity: provision?.big.some(risk => risk.uid === opportunity.uid) || false,
            currentProvision: provision?.amount, forecastProvision: provision?.forecast,
            scoreLabels: document.querySelector('.sheet-governance')?.textContent || '' };
    })()`);
    assert.deepEqual(facts.oldCurrent, [4, 4]);
    assert.equal(facts.oldReview, true);
    assert.deepEqual(facts.firstCurrent, [2, 3]);
    assert.deepEqual(facts.firstForecast, [2, 2]);
    assert.equal(facts.decisionCount, 1);
    assert.equal(facts.topHasOpportunity, false);
    assert.equal(facts.provisionHasOpportunity, false);
    assert.ok(facts.currentProvision >= facts.forecastProvision);
    const ui = await evaluate(`(() => {
        openRiskSheet('demo-1-1');
        const sheet = document.querySelector('#risk-sheet');
        const scores = [...sheet.querySelectorAll('.sheet-score-label')].map(element => element.textContent.trim());
        const lifecycle = sheet.querySelector('[data-risk-field="lifecycle"]');
        lifecycle.value = 'materialized';
        lifecycle.dispatchEvent(new Event('change', { bubbles: true }));
        const risk = risks.find(item => item.uid === 'demo-1-1');
        return { scores, lifecycle: risk.lifecycle, issue: risk.issue.description, governance: !!sheet.querySelector('.sheet-governance') };
    })()`);
    assert.equal(ui.scores.length, 4);
    assert.equal(ui.lifecycle, 'materialized');
    assert.ok(ui.issue);
    assert.equal(ui.governance, true);
    console.log('Projet : migration, décision, opportunité, provision et aller-retour validés.');
    await send('Browser.close');
} finally {
    socket?.close();
    server.close();
    await new Promise(resolve => chrome.once('exit', resolve));
    await rm(profile, { recursive: true, force: true });
}
