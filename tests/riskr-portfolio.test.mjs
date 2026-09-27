import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
let legacyFixture = false;
const server = createServer(async (request, response) => {
    const path = new URL(request.url, 'http://localhost').pathname;
    if (!['/riskr.html', '/riskr-data.js', '/riskr.svg', '/riskr.png', '/icon.svg'].includes(path)) return response.writeHead(404).end();
    response.writeHead(200, { 'Content-Type': extname(path) === '.js' ? 'text/javascript' : 'text/html' });
    if (path === '/riskr-data.js' && legacyFixture) {
        const source = await readFile(join(root, path), 'utf8');
        const data = JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
        delete data.program;
        data.risks.forEach(risk => { delete risk.scopeLevel; delete risk.componentId; delete risk.affectedComponentIds; });
        response.end(`window.RISKR_DATA = ${JSON.stringify(data)};`);
    } else response.end(await readFile(join(root, path)));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const profile = await mkdtemp(join(tmpdir(), 'riskr-portfolio-test-'));
const port = 10000 + Math.floor(Math.random() * 40000);
const chrome = spawn(process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', 'about:blank'
], { stdio: 'ignore' });
let socket, send;
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
    send = (method, params = {}) => new Promise(resolve => {
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
        if (await evaluate('document.readyState === "complete" && typeof renderProgramTab === "function"')) break;
        await new Promise(resolve => setTimeout(resolve, 150));
    }
    const result = await evaluate(`(() => {
        window.confirm = () => true;
        const demo = JSON.parse(JSON.stringify(window.RISKR_DATA));
        const south = JSON.parse(JSON.stringify(demo));
        south.program.uid = 'prog-south'; south.program.title = 'Sud — programme régional';
        south.program.escalations[0].toLevel = 'organization';
        const fileBefore = JSON.stringify(south);
        program = null; showTab('programme');
        document.querySelector('#program-new-title').value = 'Portefeuille national';
        document.querySelector('[data-program-action="create-portfolio"]').click();
        const empty = { mode: Boolean(portfolio), risks: risks.length, emptyText: Boolean(document.querySelector('#program-panel .program-muted')) };
        addPortfolioProgram(demo, 'riskr-data.js');
        addPortfolioProgram(south, 'riskr-data-sud.js');
        const codes = portfolio.programs.map(copy => copy.code);
        const uniqueIds = new Set(risks.map(risk => risk.id)).size === risks.length;
        const uniqueUids = new Set(risks.map(risk => risk.uid)).size === risks.length;
        let refused = '';
        try { addPortfolioProgram({ risks: [], riskGroups: [] }, 'projet.js'); } catch (error) { refused = error.message; }
        addPortfolioProgram(south, 'riskr-data-sud-v2.js');
        const pick = uid => { const select = document.querySelector('#scope-bar .scope-select'); select.value = uid; select.dispatchEvent(new Event('change', { bubbles: true })); };
        showTab('programme');
        pick('prog-south');
        const southThreats = committeeStats().threatCount;
        const programPage = document.querySelector('#program-panel h2').textContent === 'Sud — programme régional'
            && document.querySelectorAll('#program-panel [data-scope-to]').length > 0;
        const component = program.components.find(item => item.portfolioCopy === 'prog-south');
        document.querySelector('#program-panel [data-scope-to="' + component.uid + '"]').click();
        const componentThreats = committeeStats().threatCount;
        const projectPage = document.querySelector('#program-panel h2').textContent === component.name;
        document.querySelector('#scope-bar [data-scope="prog-south"]').click();
        const backToProgram = viewScope;
        document.querySelector('#scope-title [data-scope=""]').click();
        const allThreats = committeeStats().threatCount;
        const title = risks[0].title; risks[0].title = 'modifié'; commitChange();
        const readOnly = risks[0].title === title;
        showTab('programme');
        document.querySelector('#portfolio-decision-subject').value = 'Priorité';
        document.querySelector('#portfolio-decision-text').value = 'Sud d’abord';
        document.querySelector('#portfolio-decision-author').value = 'Comité national';
        document.querySelector('#portfolio-decision-reason').value = 'Échéance plus proche';
        document.querySelector('[data-portfolio-action="add-decision"]').click();
        const escalations = document.querySelectorAll('[data-program-section="portfolioEscalations"] .program-item').length;
        // Arborescence : un nœud par niveau ; changer de projet garde l'onglet et les filtres, referme une fiche hors périmètre
        const treeNodes = document.querySelectorAll('#scope-tree [data-scope]').length;
        const expectedNodes = 1 + portfolio.programs.length + program.components.filter(item => treeOpen.has(item.portfolioCopy)).length;
        showTab('registre'); setFilter('level', 'high');
        const outside = risks.find(risk => risk.portfolioCopy !== 'prog-south');
        openRiskSheet(outside.uid);
        delete scopeViews['prog-south']; // niveau jamais ouvert : il reprend la vue en cours
        document.querySelector('#scope-tree [data-scope="prog-south"]').click();
        const treeKeeps = activeTab === 'registre' && riskFilter.level === 'high' && viewScope === 'prog-south' && openRiskUid === null;
        // Chaque niveau retrouve son onglet et ses filtres
        const northUid = portfolio.programs.find(copy => copy.uid !== 'prog-south').uid;
        showTab('revues'); setFilter('level', 'high');
        setViewScope(northUid); showTab('matrices'); setFilter('level', '');
        setViewScope('prog-south');
        const southBack = activeTab === 'revues' && riskFilter.level === 'high';
        setViewScope(northUid);
        const northBack = activeTab === 'matrices' && riskFilter.level === '';
        setFilter('level', ''); setViewScope(''); showTab('programme');
        // Recherche plein texte limitée au niveau affiché, sans accents ni casse, par mots
        setViewScope('');
        const rootHits = searchHits('fournisseur').length;
        const upperHits = searchHits('FOURNÌSSEUR').length;
        setViewScope('prog-south');
        const southHits = searchHits('fournisseur').length;
        treeQuery = 'fournisseur'; renderScopeTree();
        document.querySelector('#scope-tree .tree-hit[data-risk]').click();
        const hitOpens = activeTab === 'registre' && Boolean(openRiskUid) && openRiskUid.startsWith('prog-south/');
        treeQuery = ''; closeRiskSheet({ hash: false }); setViewScope('');
        // Recherche de l'onglet ouvert : plan d'actions filtré, sans toucher aux positions des mesures
        showTab('actions');
        const cardsBefore = document.querySelectorAll('#action-board .action-card').length;
        const tabInput = document.getElementById('tab-search');
        tabInput.value = 'fournisseur'; tabInput.dispatchEvent(new Event('input'));
        const cardsAfter = document.querySelectorAll('#action-board .action-card').length;
        tabInput.value = ''; tabInput.dispatchEvent(new Event('input'));
        showTab('matrices');
        const tabSearchHidden = document.querySelector('.tab-search').hidden;
        // Arbitrage saisi après coup : date antérieure acceptée
        showTab('programme');
        const pastDate = document.querySelector('#portfolio-decision-date');
        pastDate.value = '2026-01-09';
        document.querySelector('#portfolio-decision-subject').value = 'Rattrapage';
        document.querySelector('#portfolio-decision-text').value = 'Valider';
        document.querySelector('#portfolio-decision-author').value = 'Comité national';
        document.querySelector('#portfolio-decision-reason').value = 'Décision prise en séance';
        document.querySelector('[data-portfolio-action="add-decision"]').click();
        const backdated = portfolio.decisions.some(item => item.subject === 'Rattrapage' && item.date === '2026-01-09');
        const riskCount = risks.length;
        const saved = serializeModel();
        const roundTrip = buildModel(saved);
        document.querySelector('[data-portfolio-action="remove"][data-portfolio-uid="prog-south"]').click();
        return { empty, codes, uniqueIds, uniqueUids, refused: Boolean(refused),
            copies: saved.portfolio.programs.length, journal: saved.portfolio.journal.map(entry => entry.kind),
            southThreats, componentThreats, backToProgram, programPage, projectPage, treeNodes, treeKeeps,
            expectedNodes, southBack, northBack, rootHits, upperHits, southHits, hitOpens, cardsBefore, cardsAfter, tabSearchHidden, backdated, allThreats, readOnly, escalations,
            decisions: roundTrip.portfolio.decisions.length, roundTripRisks: roundTrip.risks.length, riskCount, savedRisks: saved.risks.length,
            sourceUntouched: JSON.stringify(south) === fileBefore, afterRemove: portfolio.programs.length,
            tab: document.querySelector('.view-tab[data-tab="programme"]').textContent.trim() };
    })()`);
    assert.deepEqual(result.empty, { mode: true, risks: 0, emptyText: true });
    assert.equal(result.codes.length, 2);
    assert.notEqual(result.codes[0], result.codes[1], 'un code distinct par programme');
    assert.equal(result.uniqueIds, true, 'numéros affichés distincts (préfixe du programme)');
    assert.equal(result.uniqueUids, true, 'identifiants stables distincts entre programmes');
    assert.equal(result.refused, true, 'un fichier sans programme est refusé');
    assert.equal(result.copies, 2, 'le réimport remplace la copie du même programme');
    assert.deepEqual(result.journal, ['import', 'import', 'update']);
    assert.ok(result.southThreats > 0 && result.southThreats < result.allThreats, 'le bandeau limite les vues à un programme');
    assert.ok(result.componentThreats > 0 && result.componentThreats <= result.southThreats, 'puis à un projet de ce programme');
    assert.equal(result.backToProgram, 'prog-south', 'le fil d\'Ariane remonte au programme');
    assert.equal(result.programPage, true, 'choisir un programme ouvre sa page avec ses projets');
    assert.equal(result.projectPage, true, 'ouvrir un projet affiche sa page');
    assert.equal(result.readOnly, true, 'les risques importés sont en lecture seule');
    assert.equal(result.treeNodes, result.expectedNodes, 'arborescence : portefeuille, programmes et projets des branches ouvertes');
    assert.ok(result.rootHits > result.southHits && result.southHits > 0, 'la recherche porte sur le niveau affiché');
    assert.equal(result.upperHits, result.rootHits, 'recherche sans accents ni casse');
    assert.equal(result.hitOpens, true, 'un résultat ouvre la fiche du risque');
    assert.ok(result.cardsAfter > 0 && result.cardsAfter < result.cardsBefore, 'la recherche de l\'onglet filtre le plan d\'actions');
    assert.equal(result.tabSearchHidden, true, 'pas de recherche d\'onglet sur les matrices');
    assert.equal(result.backdated, true, 'un arbitrage peut être daté après coup');
    assert.equal(result.southBack, true, 'revenir sur un programme rend son onglet et ses filtres');
    assert.equal(result.northBack, true, 'chaque programme garde sa propre vue');
    assert.equal(result.treeKeeps, true, 'l\'arborescence garde l\'onglet et les filtres, et referme une fiche hors périmètre');
    assert.equal(result.escalations, 1, 'escalade de niveau organisation consolidée');
    assert.equal(result.decisions, 2, 'arbitrages du portefeuille conservés');
    assert.equal(result.roundTripRisks, result.riskCount, 'aller-retour du fichier portefeuille');
    assert.equal(result.savedRisks, 0, 'le fichier portefeuille ne porte pas de risque propre');
    assert.equal(result.sourceUntouched, true, 'le fichier du programme importé n’est pas modifié');
    assert.equal(result.afterRemove, 1);
    assert.equal(result.tab, 'Portefeuille');
    console.log('Portefeuille : création, import, remplacement, refus, bandeau à trois niveaux, lecture seule, escalades, arbitrages et aller-retour validés.');
} finally {
    if (socket?.readyState === WebSocket.OPEN) await send('Browser.close');
    socket?.close();
    server.close();
    if (chrome.exitCode === null) {
        await Promise.race([new Promise(resolve => chrome.once('exit', resolve)), new Promise(resolve => setTimeout(resolve, 5000))]);
    }
    if (chrome.exitCode === null) {
        const processName = spawnSync('ps', ['-p', String(chrome.pid), '-o', 'comm='], { encoding: 'utf8' }).stdout.trim();
        if (processName.includes('Google Chrome') && !processName.includes('Firefox')) chrome.kill();
        await new Promise(resolve => chrome.once('exit', resolve));
    }
    await rm(profile, { recursive: true, force: true });
}
