import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
let legacyFixture = true;
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
const profile = await mkdtemp(join(tmpdir(), 'riskr-program-test-'));
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
    assert.equal(await evaluate('program === null'), true);
    const created = await evaluate(`(() => {
        showTab('programme');
        document.querySelector('#program-new-title').value = 'Transformation SI';
        document.querySelector('[data-program-action="create"]').click();
        document.querySelector('[data-program-action="add-component"]').click();
        document.querySelector('[data-program-action="add-component"]').click();
        return { title: program.title, components: program.components.length,
            tab: document.querySelector('[data-panel="programme"]').hidden,
            model: buildModel(serializeModel()).program.title };
    })()`);
    assert.deepEqual(created, { title: 'Transformation SI', components: 2, tab: false, model: 'Transformation SI' });
    const links = await evaluate(`(() => {
        const [a, b] = program.components;
        a.name = 'Projet A'; b.name = 'Projet B';
        const risk = risks.find(item => item.uid === 'demo-1-1');
        risk.scopeLevel = 'component'; risk.componentId = a.uid; risk.affectedComponentIds = [b.uid];
        const priced = risks.find(item => item.uid === 'demo-3-1');
        priced.scopeLevel = 'component'; priced.componentId = a.uid; priced.affectedComponentIds = [b.uid];
        program.benefits.push({ uid: 'benefit-1', name: 'Adoption', owner: 'Métier', unit: '%', baseline: 20,
            target: 80, actual: null, dueDate: '2027-01-01', measuredAt: '', riskUids: [risk.uid] });
        program.dependencies.push({ uid: 'dep-1', sourceId: a.uid, targetId: b.uid, kind: 'finishStart',
            description: 'Interface A vers B', owner: 'PMO', dueDate: '2027-01-01', status: 'active', riskUids: [risk.uid] });
        program.scenarios.push({ uid: 'scenario-1', name: 'Retard combiné', riskUids: [risk.uid, 'demo-1-2'], probability: 100,
            min: 10000, likely: 10000, max: 10000, status: 'active', owner: 'PMO', reason: 'Surcoût incrémental' });
        const base = programMetrics().baseline;
        const all = programMetrics().global;
        commitChange(); renderProgramTab();
        document.querySelector('[data-program-link-details="benefits"] summary').click();
        const lazyLinks = document.querySelectorAll('[data-program-link-details="benefits"] input[data-program-link]').length;
        document.querySelector('[data-program-link-details="benefits"] input[value="demo-1-2"]').click();
        const linkStayedOpen = document.querySelector('[data-program-link-details="benefits"]').open &&
            program.benefits[0].riskUids.includes('demo-1-2');
        document.querySelector('[data-program-link-details="benefits"] input[value="demo-1-2"]').click();
        document.querySelector('[data-program-affected-details="demo-1-1"] summary').click();
        const lazyAffected = document.querySelectorAll('[data-program-affected-details="demo-1-1"] input[data-program-affected]').length;
        const pick = uid => { const select = document.querySelector('#scope-bar .scope-select'); select.value = uid; select.dispatchEvent(new Event('change', { bubbles: true })); };
        pick(a.uid);
        const projectPage = document.querySelector('#program-panel h2').textContent === a.name &&
            document.querySelector('.view-tab[data-tab="programme"]').textContent.trim() === t('tabProject');
        document.querySelector('#scope-title [data-scope=""]').click();
        showTab('programme');
        document.querySelector('[data-scope-to="' + a.uid + '"]').click();
        const openedFromTable = viewScope === a.uid;
        viewScope = '';
        renderProgramTab();
        pick(a.uid); viewScope = a.uid;
        const componentRows = document.querySelectorAll('#program-panel [data-program-open-risk]').length;
        const scopedThreats = committeeStats().threatCount;
        const scopedActions = document.querySelectorAll('#action-board .action-card').length ===
            risks.filter(inViewScope).flatMap(item => item.mesures).filter(mesure => mesure.texte).length;
        document.querySelector('#scope-title [data-scope=""]').click();
        const scopeReset = viewScope === '' && committeeStats().threatCount > scopedThreats;
        program.scenarios[0].status = 'inactive';
        const inactive = programMetrics().global.p80;
        program.scenarios[0].status = 'active';
        renderProgramTab();
        return { owner: risk.componentId, visibleA: programRiskInComponent(risk, a.uid), visibleB: programRiskInComponent(risk, b.uid),
            benefit: program.benefits[0].riskUids[0], dependency: program.dependencies[0].sourceId,
            baseline: base.p80, combined: all.p80, uniqueCost: base.items.filter(item => item.risk?.uid === priced.uid).length,
            actual: program.benefits[0].actual, lazyLinks, lazyAffected, linkStayedOpen, componentRows, riskCount: risks.length, inactive,
            scopedThreats, scopedActions, scopeReset, projectPage, openedFromTable,
            roundTrip: buildModel(serializeModel()).program.scenarios.length };
    })()`);
    assert.equal(links.visibleA, true);
    assert.equal(links.visibleB, true);
    assert.equal(links.benefit, 'demo-1-1');
    assert.equal(links.actual, null);
    assert.equal(links.uniqueCost, 1);
    assert.equal(links.lazyLinks, links.riskCount);
    assert.equal(links.lazyAffected, 2);
    assert.equal(links.linkStayedOpen, true);
    assert.ok(links.componentRows > 0 && links.componentRows < links.riskCount);
    assert.ok(links.scopedThreats > 0 && links.scopedThreats <= links.componentRows, 'la vue comité suit le projet choisi dans le bandeau');
    assert.equal(links.scopedActions, true, 'le plan d\'actions suit le projet choisi dans le bandeau');
    assert.equal(links.scopeReset, true, 'cliquer le programme rétablit toutes les vues');
    assert.equal(links.projectPage, true, 'choisir un projet ouvre sa page dans le premier onglet');
    assert.equal(links.openedFromTable, true, 'le bouton Ouvrir d\'un projet descend à son niveau');
    assert.equal(links.inactive, links.baseline);
    assert.equal(links.roundTrip, 1);
    assert.ok(Math.abs(links.combined - links.baseline - 10000) < 0.001);
    const benefitEdit = await evaluate(`(() => {
        const field = document.querySelector('[data-program-collection="benefits"][data-program-field="actual"]');
        field.value = '55'; field.dispatchEvent(new Event('change', { bubbles: true }));
        const reserve = document.querySelector('[data-program-collection="components"][data-program-field="reserve"]');
        reserve.value = '30000'; reserve.dispatchEvent(new Event('change', { bubbles: true }));
        const tolerance = document.querySelector('[data-program-collection="components"][data-program-field="tolerance"]');
        tolerance.value = '7.5'; tolerance.dispatchEvent(new Event('change', { bubbles: true }));
        const before = program.components.length;
        const oldAlert = window.alert; let warned = false;
        window.alert = () => { warned = true; };
        document.querySelector('[data-program-action="delete-component"][data-program-uid="' + program.components[0].uid + '"]').click();
        window.alert = oldAlert;
        return { actual: program.benefits[0].actual, measuredAt: program.benefits[0].measuredAt,
            reserve: program.components[0].reserve, tolerance: program.components[0].tolerance,
            deletionBlocked: warned && program.components.length === before };
    })()`);
    assert.equal(benefitEdit.actual, 55);
    assert.match(benefitEdit.measuredAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(benefitEdit.reserve, 30000);
    assert.equal(benefitEdit.tolerance, 8);
    assert.equal(benefitEdit.deletionBlocked, true);
    const escalation = await evaluate(`(() => {
        const risk = risks.find(item => item.uid === 'demo-1-1');
        program.components[0].tolerance = 5;
        renderProgramTab();
        const alert = programAlerts().some(item => item.uid === risk.uid);
        document.querySelector('#program-escalate-risk').value = risk.uid;
        document.querySelector('#program-escalate-reason').value = 'Dépasse le pouvoir du projet';
        document.querySelector('#program-escalate-author').value = 'PMO';
        document.querySelector('[data-program-action="add-escalation"]').click();
        return { alert, pending: program.escalations[0]?.status,
            uid: program.escalations[0]?.riskUid };
    })()`);
    assert.deepEqual(escalation, { alert: true, pending: 'pending', uid: 'demo-1-1' });
    const decided = await evaluate(`(() => {
        const item = program.escalations[0];
        document.querySelector('[data-escalation-decision]').value = 'takeOwnership';
        document.querySelector('[data-escalation-author]').value = 'Comité de programme';
        document.querySelector('[data-escalation-reason]').value = 'Réserve du projet insuffisante';
        document.querySelector('[data-program-action="decide-escalation"]').click();
        const risk = risks.find(entry => entry.uid === 'demo-1-1');
        return { status: program.escalations[0].status, owner: risk.scopeLevel, origin: risk.programOrigin,
            affected: risk.affectedComponentIds.includes(item.fromComponentId) };
    })()`);
    assert.deepEqual(decided, { status: 'decided', owner: 'program', origin: 'escalation', affected: true });
    const external = await evaluate(`(() => {
        document.querySelector('#program-escalate-risk').value = 'demo-1-1';
        document.querySelector('#program-escalate-to').value = 'organization';
        document.querySelector('#program-escalate-reason').value = 'Décision hors programme';
        document.querySelector('#program-escalate-author').value = 'Direction programme';
        document.querySelector('[data-program-action="add-escalation"]').click();
        const item = program.escalations.at(-1);
        const choices = [...document.querySelector('[data-escalation-decision="' + item.uid + '"]').options].map(option => option.value);
        document.querySelector('[data-escalation-decision="' + item.uid + '"]').value = 'externalAccepted';
        document.querySelector('[data-escalation-author="' + item.uid + '"]').value = 'Direction générale';
        document.querySelector('[data-escalation-reason="' + item.uid + '"]').value = 'Accepté par le métier';
        document.querySelector('[data-program-action="decide-escalation"][data-program-uid="' + item.uid + '"]').click();
        return { choices, decision: item.decision, status: item.status,
            owner: risks.find(risk => risk.uid === 'demo-1-1').scopeLevel };
    })()`);
    assert.deepEqual(external, { choices: ['monitor', 'externalAccepted', 'close'],
        decision: 'externalAccepted', status: 'decided', owner: 'program' });
    const monitored = await evaluate(`(() => {
        const risk = risks.find(item => item.uid === 'demo-3-1');
        const original = [...risk.assessmentCurrent];
        const before = programAlerts().some(item => item.uid === risk.uid);
        document.querySelector('#program-escalate-risk').value = risk.uid;
        document.querySelector('#program-escalate-to').value = 'program';
        document.querySelector('#program-escalate-reason').value = 'Réserve projet insuffisante';
        document.querySelector('#program-escalate-author').value = 'Projet A';
        document.querySelector('[data-program-action="add-escalation"]').click();
        const decision = program.escalations.at(-1);
        document.querySelector('[data-escalation-author="' + decision.uid + '"]').value = 'Comité';
        document.querySelector('[data-escalation-reason="' + decision.uid + '"]').value = 'Suivi accepté';
        document.querySelector('[data-program-action="decide-escalation"][data-program-uid="' + decision.uid + '"]').click();
        const covered = !programAlerts().some(item => item.uid === risk.uid);
        risk.assessmentCurrent = [5, 5];
        const reopened = programAlerts().some(item => item.uid === risk.uid);
        risk.assessmentCurrent = original;
        return { before, covered, reopened, score: decision.scoreAtDecision };
    })()`);
    assert.deepEqual({ before: monitored.before, covered: monitored.covered, reopened: monitored.reopened },
        { before: true, covered: true, reopened: true });
    assert.ok(monitored.score > 0 && monitored.score < 25);
    const historicalLinkGuard = await evaluate(`(() => {
        program.components.push({ ...program.components[0], uid: 'temporary-component', name: 'Temporaire' });
        program.escalations.push({ ...program.escalations[0], uid: 'temporary-escalation',
            fromComponentId: '', targetComponentId: 'temporary-component', toLevel: 'component', status: 'decided' });
        renderProgramTab();
        const oldAlert = window.alert; let warned = false;
        window.alert = () => { warned = true; };
        document.querySelector('[data-program-action="delete-component"][data-program-uid="temporary-component"]').click();
        window.alert = oldAlert;
        const retained = program.components.some(item => item.uid === 'temporary-component');
        program.escalations.pop(); program.components.pop(); renderProgramTab();
        return warned && retained;
    })()`);
    assert.equal(historicalLinkGuard, true);
    const transferred = await evaluate(`(() => {
        document.querySelector('[data-transfer-owner="demo-1-1"]').value = 'Direction métiers';
        document.querySelector('[data-transfer-reason="demo-1-1"]').value = 'Suivi après programme';
        document.querySelector('[data-program-action="transfer-risk"][data-program-uid="demo-1-1"]').click();
        const transfer = risks.find(risk => risk.uid === 'demo-1-1').lifecycle;
        undo();
        const undone = risks.find(risk => risk.uid === 'demo-1-1').lifecycle;
        redo();
        return { transfer, undone, redone: risks.find(risk => risk.uid === 'demo-1-1').lifecycle,
            panel: document.querySelector('#program-panel').textContent.includes('Adoption') };
    })()`);
    assert.deepEqual(transferred, { transfer: 'transferred', undone: 'active', redone: 'transferred', panel: true });
    const transferCsv = await evaluate(`(async () => {
        let blob, download;
        const risk = risks.find(item => item.uid === 'demo-1-1'), title = risk.title;
        risk.title = '=HYPERLINK("https://example.com","test")';
        const create = URL.createObjectURL, revoke = URL.revokeObjectURL, click = HTMLAnchorElement.prototype.click;
        URL.createObjectURL = value => { blob = value; return 'blob:test'; };
        URL.revokeObjectURL = () => {};
        HTMLAnchorElement.prototype.click = function () { download = this.download; };
        try { exportProgramTransfers(); return { download, csv: await blob.text() }; }
        finally { risk.title = title; URL.createObjectURL = create; URL.revokeObjectURL = revoke; HTMLAnchorElement.prototype.click = click; }
    })()`);
    assert.match(transferCsv.download, /^riskr_transferts_/);
    assert.match(transferCsv.csv, /Direction métiers/);
    assert.match(transferCsv.csv, /Suivi après programme/);
    assert.match(transferCsv.csv, /'=HYPERLINK/);
    const invalid = await evaluate(`(() => {
        const model = serializeModel();
        model.program.dependencies[0].targetId = 'missing';
        try { buildModel(model); return false; } catch { return true; }
    })()`);
    assert.equal(invalid, true);
    const blocked = await evaluate(`(() => {
        const previousAlert = window.alert;
        let message = '';
        window.alert = text => { message = text; };
        document.querySelector('#program-closure-reason').value = 'Fin du programme';
        document.querySelector('[data-program-action="close"]').click();
        window.alert = previousAlert;
        return { status: program.status, blocked: !!message };
    })()`);
    assert.deepEqual(blocked, { status: 'active', blocked: true });
    const closed = await evaluate(`(() => {
        risks.forEach(risk => {
            if (risk.lifecycle !== 'active') return;
            risk.lifecycle = 'transferred'; risk.transferOwner = 'Direction métiers';
            risk.lifeReason = 'Suivi opérationnel'; risk.lifeDate = todayIso();
        });
        commitChange(); renderProgramTab();
        document.querySelector('#program-closure-reason').value = 'Bénéfices confiés au métier';
        document.querySelector('[data-program-action="close"]').click();
        return { status: program.status, date: program.closedAt, roundTrip: buildModel(serializeModel()).program.status };
    })()`);
    assert.equal(closed.status, 'closed');
    assert.equal(closed.roundTrip, 'closed');
    assert.ok(closed.date);
    legacyFixture = false;
    await evaluate('localStorage.clear()');
    await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/riskr.html?demo=1` });
    for (let attempt = 0; attempt < 80; attempt++) {
        if (await evaluate('document.readyState === "complete" && typeof program !== "undefined" && program?.uid === "demo-program-1"')) break;
        await new Promise(resolve => setTimeout(resolve, 150));
    }
    const demo = await evaluate(`(() => {
        showTab('programme');
        return { title: program.title, components: program.components.length, benefits: program.benefits.length,
            scenarios: program.scenarios.length, groups: riskGroups.length,
            visible: !document.querySelector('[data-panel="programme"]').hidden };
    })()`);
    assert.deepEqual(demo, { title: "Modernisation du système d'information", components: 3, benefits: 2, scenarios: 1, groups: 5, visible: true });
    const sampleSensitivity = await evaluate(`(() => {
        const p80 = trials => simulateProvision(trials, { scenarios: program.scenarios })?.p80 || 0;
        return { small: p80(1000), medium: p80(2000), reference: p80(10000) };
    })()`);
    assert.ok(Math.abs(sampleSensitivity.small - sampleSensitivity.reference) / sampleSensitivity.reference < 0.05);
    console.log('Sensibilité P80 démonstration : ' + JSON.stringify(sampleSensitivity));
    const reviewsLink = await evaluate(`(() => {
        const listed = document.querySelector('#program-panel').textContent.includes(translations.fr.programReviews);
        document.querySelector('[data-program-action="open-reviews"]').click();
        const opened = !document.querySelector('[data-panel="revues"]').hidden;
        showTab('programme');
        return { listed, opened };
    })()`);
    assert.deepEqual(reviewsLink, { listed: true, opened: true });
    const missingTranslations = await evaluate(`(() => {
        const keys = Object.keys(translations.fr).filter(key => key.startsWith('program') || key === 'tabProgram');
        return ['en', 'es', 'ar', 'zh'].flatMap(language => keys.filter(key => !translations[language][key]).map(key => language + ':' + key));
    })()`);
    assert.deepEqual(missingTranslations, []);
    const undefinedProgramKeys = await evaluate(`(async () => {
        const source = await (await fetch('/riskr.html')).text();
        const keys = [...source.matchAll(/\\bt\\(['"](program[^'"]+|tabProgram)['"]/g)].map(match => match[1]);
        return [...new Set(keys)].filter(key => !translations.fr[key]);
    })()`);
    assert.deepEqual(undefinedProgramKeys, []);
    const languageViews = await evaluate(`(() => {
        const views = ['fr', 'en', 'es', 'zh', 'ar'].map(language => {
            setLanguage(language); showTab('programme');
            return { language: document.documentElement.lang, direction: document.documentElement.dir,
                title: document.querySelector('[data-tab="programme"] span').textContent,
                panel: document.querySelector('#program-panel').textContent.length > 0 && document.querySelector('#scope-title').textContent.includes(program.title) };
        });
        setLanguage('fr'); return views;
    })()`);
    assert.deepEqual(languageViews.map(view => view.language), ['fr', 'en', 'es', 'zh', 'ar']);
    assert.deepEqual(languageViews.map(view => view.direction), ['ltr', 'ltr', 'ltr', 'ltr', 'rtl']);
    assert.ok(languageViews.every(view => view.title && view.panel));
    const largeRender = await evaluate(`(() => {
        while (program.components.length < 100) program.components.push({ ...program.components[0], uid: 'perf-component-' + program.components.length });
        const priced = risks.find(risk => risk.uid === 'demo-3-1');
        while (risks.length < 500) risks.push({ ...priced, uid: 'perf-risk-' + risks.length,
            scopeLevel: 'component', componentId: program.components[risks.length % 100].uid, affectedComponentIds: [] });
        while (program.dependencies.length < 200) program.dependencies.push({ ...program.dependencies[0], uid: 'perf-dependency-' + program.dependencies.length });
        while (program.scenarios.length < 50) program.scenarios.push({ ...program.scenarios[0], uid: 'perf-scenario-' + program.scenarios.length });
        const start = performance.now(); renderProgramTab(); return Math.round(performance.now() - start);
    })()`);
    console.log('Rendu programme (500 risques, 100 composants, 200 dépendances, 50 scénarios) : ' + largeRender + ' ms');
    console.log('Programme : création, registres, bénéfice, dépendance, scénario, escalade et import validés.');
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
