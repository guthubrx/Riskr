import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const source = readFileSync(join(dirname(dirname(fileURLToPath(import.meta.url))), 'riskr.html'), 'utf8');
const section = (start, end) => {
    const from = source.indexOf(start);
    const to = source.indexOf(end, from + start.length);
    assert.ok(from >= 0 && to > from, `Section introuvable : ${start}`);
    return source.slice(from, to);
};
const panel = { innerHTML: '' };
const events = [];
const context = vm.createContext({
    document: { getElementById: () => panel, querySelector: () => null },
    setTimeout: () => {},
    console,
});
vm.runInContext(`
let counter = 0;
const newUid = () => 'risk-' + ++counter;
const IMPACT_AXES = ['cost', 'delay', 'quality', 'service', 'benefit'];
const currentUser = 'Test';
const risks = [], riskGroups = [{ id: 1, name: 'Groupe', risks: [], mesures: [] }];
const reviews = [], journal = [];
const program = null, matrixReviewId = null;
const isActiveThreat = risk => risk.kind !== 'opportunity' && risk.lifecycle === 'active';
const matrixOptions = { counts: true, appetite: true, target: false, velocity: false };
const matrixLayout = 'after', BUBBLE_COLOR = '#000', TARGET_COLOR = '#000';
const APPETITE_LEVELS = [[9, 'acceptable']], FILTER_LEVELS = ['faible'];
const settings = { riskAppetite: 9 };
const riskFilter = { cell: null };
const t = key => key;
const flowArrow = () => '→';
const escapeHtml = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const colon = () => ' : ';
const getCriticalityLevel = () => 0;
const scoreChip = value => String(residualScore(value) ?? '—');
const matrixGroups = () => riskGroups;
const renderRisks = () => {};
const updateCharts = () => renderMatrixPanel();
const showToast = value => events.push(value);
const closeSheet = () => {};
const itemText = value => value;
const libraryText = value => value;
const RISK_LIBRARY = [];
const normalizeMesure = raw => ({ texte: raw.texte, porteur: '', echeance: '', etat: 'todo' });
const libraryItems = () => [{ key: 'type-1', title: 'Risque type', cotation: [2, 3], mesures: ['Vérifier'] }];
const library = { selected: new Set(['type-1']), target: '0', withMesures: true };
let snapshot = { risks: [], reviews: [] };
const commitChange = () => {
    risks.forEach(risk => {
        if (!risk.cout || !Array.isArray(risk.kri)) throw Error('Risque incomplet');
    });
    recordJournal(snapshot);
    snapshot = { risks: JSON.parse(JSON.stringify(risks)), reviews: [] };
};
`, context);
context.events = events;
for (const [start, end] of [
    ['        const toNumber =', '        const isIsoDate ='],
    ['        function emptyAssessments() {', '        // ========================================\n        // Supprimer un groupe'],
    ['        function addNewRiskAtPosition(', '        // ========================================\n        // Ajouter un nouveau groupe'],
    ['        function addNewGroupAtPosition(', '        // Mettre à jour une ligne de risque'],
    ['        const residualScore =', '        // Exposition moyenne /5'],
    ['        function evaluatedAssessment(', '        // Plugin pour dessiner la matrice'],
    ['        function renderMatrixPanel()', '        // Revue affichée dans l\'onglet Matrices'],
    ['        const scoreOf =', '        const isActiveThreat ='],
    ['        const currentAssessment =', '        const currentScore ='],
    ['        const JOURNAL_MAX =', '        // Libellé et valeurs lisibles'],
    ['        function addLibraryRisks()', '        // ========================================\n        // Registre compact'],
]) vm.runInContext(section(start, end), context);
const run = expression => vm.runInContext(expression, context);

// Création par le bouton : le modèle reste utilisable avant tout rechargement.
run('addNewRiskAtPosition(1, 0)');
assert.equal(run('risks.length'), 1);
assert.equal(run('risks[0].cout.probabilite'), null);
assert.equal(run('risks[0].kri.length'), 0);
assert.equal(run('risks[0].assessmentCurrent.join()'), '0,0');
assert.equal(events.at(-1), 'riskAdded');

// Une cotation actuelle vide est ignorée par les matrices, même avec une cellule filtrée.
assert.equal(run('scoreOf(evaluatedAssessment(risks[0], "After"))'), 0);
assert.equal(run('residualScore(null)'), null);
run('riskFilter.cell = { phase: "After", p: 1, i: 1 }; updateCharts(); renderRisks()');
assert.match(panel.innerHTML, /selectedCell/);
for (const current of [[0, 0], [0, 3], [3, 0], [1, 1], [5, 5], null]) {
    context.testCurrent = current;
    run('risks[0].assessmentCurrent = testCurrent; updateCharts(); renderRisks()');
    const expected = Array.isArray(current) ? current[0] * current[1] : 0;
    assert.equal(run('scoreOf(evaluatedAssessment(risks[0], "After"))'), expected);
}
run('risks[0].assessmentCurrent = [0, 0]');

// Le journal doit accepter immédiatement des modifications du coût et des indicateurs.
run('risks[0].cout.probabilite = 20; risks[0].kri.push({ id: "kri-1", nom: "Suivi", releves: [] }); commitChange()');
assert.equal(run('journal.some(entry => entry.champ === "cout.probabilite")'), true);
assert.equal(run('journal.some(entry => entry.champ === "kri")'), true);

// Le même constructeur sert à la création d'un groupe et à la bibliothèque.
run('addNewGroupAtPosition(1)');
assert.equal(run('risks[1].cout.probabilite'), null);
assert.equal(run('risks[1].kri.length'), 0);
run('addLibraryRisks()');
assert.equal(run('risks[2].cout.probabilite'), null);
assert.equal(run('risks[2].kri.length'), 0);
assert.equal(run('risks[2].mesures.length'), 1);
run('risks[2].assessmentCurrent = [0, 0]; updateCharts(); renderRisks()');
assert.equal(events.at(-1), 'libraryAdded');
console.log('OK — ajout direct, nouveau groupe, bibliothèque, journal et matrice avec cotation actuelle vide.');
