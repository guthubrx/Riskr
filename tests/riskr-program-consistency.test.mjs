import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, 'riskr.html'), 'utf8');
const demoRoot = process.env.RISKR_DEMO_ROOT || join(root, 'examples', 'valmeris', 'fr');
if (!existsSync(join(demoRoot, 'programme-entrepots', 'riskr-data.js')) ||
    !existsSync(join(demoRoot, 'portefeuille', 'riskr-data.js'))) {
    console.log('SKIP — données de démonstration absentes (RISKR_DEMO_ROOT).');
    process.exit(0);
}
const demo = folder => {
    const context = { window: {} };
    vm.runInNewContext(readFileSync(join(demoRoot, folder, 'riskr-data.js'), 'utf8'), context);
    return context.window.RISKR_DATA;
};
const programData = demo('programme-entrepots');
const portfolioData = demo('portefeuille');
const copy = portfolioData.portfolio.programs.find(item => item.uid === programData.program.uid);
assert.ok(copy, 'Le programme Entrepôts existe dans le portefeuille');
const section = (start, end) => {
    const from = source.indexOf(start);
    const to = source.indexOf(end, from + start.length);
    assert.ok(from >= 0 && to > from, `Section introuvable : ${start}`);
    return source.slice(from, to);
};
const context = vm.createContext({});
context.programData = programData;
context.copyData = { ...copy, program: copy.data.program };
vm.runInContext(`
let risks = [], program = null, portfolio = null;
const currentLanguage = 'fr';
const PROGRAM_GLOBAL_TRIALS = 1000, PROGRAM_COMPONENT_TRIALS = 250;
const t = key => key;
const DEFAULT_PROBABILITY = [0, 5, 15, 35, 60, 85];
const normalize = risk => ({ ...risk, kind: risk.kind || 'threat', lifecycle: risk.lifecycle || 'active',
    assessmentCurrent: risk.assessmentCurrent || risk.assessmentAfter,
    cout: { probabilite: null, sansProtection: null, ...risk.cout },
    mesures: (risk.mesures || []).map(item => ({ etat: 'todo', ...item })) });
const portfolioCopy = uid => portfolio.programs.find(item => item.uid === uid);
const programComponent = uid => program?.components.find(item => item.uid === uid);
const programRisk = uid => risks.find(item => item.uid === uid);
`, context);
for (const [start, end] of [
    ['        const residualScore =', '        // Exposition moyenne /5'],
    ['        const scoreOf =', '        const validRiskDecision ='],
    ['        const riskProbability =', '        // Provision pour risques :'],
    ['        function simulateProvision(', '        // Montant arrondi à deux chiffres'],
    ['        const programAppetite =', '        const programValue ='],
    ['        function programMetrics()', '        function renderProgramTab()'],
    ['        const portfolioScenarios =', '        // Complexité : O(P · T · r)'],
    ['        const ownedProvision =', '        const provisionText ='],
]) vm.runInContext(section(start, end), context);
const run = expression => vm.runInContext(expression, context);
run('program = programData.program; risks = programData.risks.map(normalize)');
assert.equal(run('risks.filter(isAboveTolerance).length'), 4);
assert.equal(run('programAlerts().length'), 3);
assert.equal(run('isAboveTolerance(risks.find(risk => risk.id === "2.2"))'), false);
const own = run('programMetrics()');
const ownGlobal = own.global.p80;
const ownProjects = own.components.map(item => [item.component.uid, item.current?.p80 ?? null]);
run(`portfolio = { programs: [copyData] };
    program = { components: copyData.program.components.map(item => ({ ...item, uid: copyData.uid + '/' + item.uid })) };
    risks = copyData.data.risks.map(raw => ({ ...normalize(raw), uid: copyData.uid + '/' + raw.uid,
        portfolioCopy: copyData.uid, componentId: raw.componentId ? copyData.uid + '/' + raw.componentId : '' }))`);
assert.equal(run('risks.filter(isAboveTolerance).length'), 4);
assert.equal(run('isAboveTolerance(risks.find(risk => risk.id === "2.2"))'), false);
assert.equal(run('portfolioProvision(copyData).p80'), ownGlobal, 'P80 programme identique dans sa copie');
for (const [uid, amount] of ownProjects) {
    context.projectUid = `${copy.uid}/${uid}`;
    assert.equal(run('ownedProvision(projectUid)?.p80 ?? null'), amount, `P80 attribué du projet ${uid}`);
}
console.log(`OK — Entrepôts : 4 risques actifs hors tolérance, 3 escalades à examiner, 2.2 exclu ; P80 programme et ${ownProjects.length} projets identiques dans la copie.`);
