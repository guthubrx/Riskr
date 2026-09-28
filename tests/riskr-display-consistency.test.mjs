import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const source = readFileSync(join(dirname(dirname(fileURLToPath(import.meta.url))), 'riskr.html'), 'utf8');
const section = (start, end) => {
    const from = source.indexOf(start), to = source.indexOf(end, from + start.length);
    assert.ok(from >= 0 && to > from, `Section introuvable : ${start}`);
    return source.slice(from, to);
};
const elements = Object.fromEntries(['review-kpis', 'review-changes', 'action-board', 'actions-summary'].map(id => [id, { innerHTML: '' }]));
elements['actions-me'] = { hidden: false, querySelector: () => ({ innerHTML: '' }) };
let calendar = '';
const context = vm.createContext({
    document: { getElementById: id => elements[id], querySelectorAll: () => [] },
    Date,
});
context.calendarSink = value => { calendar = value; };
vm.runInContext(`
let currentLanguage = 'fr';
const t = (key, params = {}) => key + (params.count === undefined ? '' : ' ' + params.count);
const flowArrow = () => currentLanguage === 'ar' ? '←' : '→';
const escapeHtml = text => String(text || '');
const risks = [
 { uid:'threat',id:'1.1',title:'Menace',kind:'threat',lifecycle:'active',assessmentCurrent:[2,3],mesures:[],responsable:'' },
 { uid:'opportunity',id:'1.2',title:'Occasion',kind:'opportunity',lifecycle:'active',assessmentCurrent:[2,2],mesures:[],responsable:'' },
 { uid:'worse',id:'1.3',title:'Dérive',kind:'threat',lifecycle:'active',assessmentCurrent:[2,3],mesures:[],responsable:'' }
];
const riskGroups = [{ name:'Groupe', risks }];
const reviews = [
 { id:'A',risks:[
  { uid:'threat',id:'1.1',title:'Menace',after:[2,4],motif:'ancien A',kind:'threat' },
  { uid:'opportunity',id:'1.2',title:'Occasion',after:[1,2],motif:'ancien A opp',kind:'opportunity' },
  { uid:'worse',id:'1.3',title:'Dérive',after:[1,2],motif:'ancien A pire',kind:'threat' }] },
 { id:'B',risks:[
  { uid:'threat',id:'1.1',title:'Menace',after:[2,3],motif:'motif B',kind:'threat' },
  { uid:'opportunity',id:'1.2',title:'Occasion',after:[2,2],motif:'motif B opp',kind:'opportunity' },
  { uid:'worse',id:'1.3',title:'Dérive',after:[2,3],motif:'motif B pire',kind:'threat' }] }
];
const comparison = { from:'A', to:'B' }, tabQueries = { revues:'', actions:'' };
const viewScopeUids = () => null, portfolio = null;
const textMatches = () => true;
const scoreChip = value => String((value?.[0] || 0) * (value?.[1] || 0));
const inViewScope = () => true;
const actionView = { group:'due',scope:'all',me:'' };
const MESURE_STATE_ORDER=['todo','doing','done'],MESURE_STATES={todo:'todo',doing:'doing',done:'done'};
const currentUser='Test';
const avatar=()=>'';const enableCardDrag=()=>{};
const mesureOwner=item=>item.mesure.porteur||item.risk.responsable;
const ownerParts=owner=>owner.split('/').map(part=>part.trim()).filter(Boolean);
const todayIso=()=>new Date().toISOString().slice(0,10);
const addDays=(iso,n)=>new Date(Date.parse(iso+'T12:00:00Z')+n*86400000).toISOString().slice(0,10);
const lastReviewDates=()=>new Map();
const settings={cadenceRevue:30};
const colon=()=>':';
const downloadTextFile=value=>calendarSink(value);
`, context);
for (const [start, end] of [
    ['        const residualScore =', '        // Exposition moyenne /5'],
    ['        const scoreOf =', '        const validRiskDecision ='],
    ['        function snapshotOf(', '        function renderReviews()'],
    ['        function renderReviewComparison()', '        // Exposition moyenne /5 par groupe'],
    ['        function mesureDueDate(', '        // Identifiant interne stable'],
    ['        function renderActionPlan()', '        // Glisser-déposer des cartes'],
    ['        function reviewStatus(', '        function setReviewCadence('],
]) vm.runInContext(section(start, end), context);
const run = expression => vm.runInContext(expression, context);
run('renderReviewComparison()');
assert.match(elements['review-kpis'].innerHTML, /review-kpi down[^>]*>diffDown<b>2<\/b>/);
assert.match(elements['review-kpis'].innerHTML, /review-kpi up[^>]*>diffUp<b>1<\/b>/);
assert.match(elements['review-changes'].innerHTML, /Occasion.*?motif B opp.*?change-delta down[^>]*>\+2/s);
assert.doesNotMatch(elements['review-changes'].innerHTML, /ancien A/);
run("comparison.from='B';comparison.to='A';renderReviewComparison()");
assert.match(elements['review-changes'].innerHTML, /ancien A opp/);
assert.doesNotMatch(elements['review-changes'].innerHTML, /motif B opp/);
run("comparison.to='current';renderReviewComparison()");
assert.doesNotMatch(elements['review-changes'].innerHTML, /ancien A|motif B/);
run("currentLanguage='ar';comparison.to='B';renderReviewComparison()");
assert.match(elements['review-changes'].innerHTML, /←/);

const today = new Date();
const day = offset => new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset).toISOString().slice(0, 10);
context.dates = { past: day(-4), soon: day(4), later: day(45) };
run(`risks[0].mesures=[
 { texte:'Terminée passée',etat:'done',echeance:dates.past,porteur:'',barriere:'prevention' },
 { texte:'À faire bientôt',etat:'todo',echeance:dates.soon,porteur:'',barriere:'prevention' },
 { texte:'En retard',etat:'todo',echeance:dates.past,porteur:'',barriere:'prevention' },
 { texte:'À faire plus tard',etat:'todo',echeance:dates.later,porteur:'',barriere:'prevention' }];
 renderActionPlan()`);
const columns = [...elements['action-board'].innerHTML.matchAll(/<section class="action-column"[^>]*>([\s\S]*?)<\/section>/g)].map(match => match[1]);
assert.equal(columns.length, 5);
const doneColumn = columns.find(html => html.includes('dueDone'));
assert.match(doneColumn, /Terminée passée/);
assert.doesNotMatch(columns.find(html => html.includes('dueSoon')), /Terminée passée/);

run("risks[0].lifecycle='closed';risks[1].lifecycle='transferred';risks[2].lifecycle='active';exportReviewCalendar()");
assert.equal((calendar.match(/BEGIN:VEVENT/g) || []).length, 1);
assert.match(calendar, /UID:riskr-worse-/);
assert.doesNotMatch(calendar, /UID:riskr-(threat|opportunity)-/);
const localeContext = vm.createContext({ riskrStorage: { getItem: () => 'fr' }, Intl });
vm.runInContext(section('        const translations = {', '        const rawStorageNamespace ='), localeContext);
vm.runInContext(section('        let currentLanguage = riskrStorage.getItem', '        // Données des échelles'), localeContext);
vm.runInContext(section('        const programGap =', '        const programField ='), localeContext);
const localize = expression => vm.runInContext(expression, localeContext);
assert.equal(localize("t('reviewRisk', { count: 1 })"), '1 risque');
assert.equal(localize("t('programThreatOne')"), '1 risque lié au-delà de sa tolérance');
assert.equal(localize('programGap(4, 4.5)'), '-0,5');
assert.equal(localize('programGap(1, 0.9999999999999999)'), '0');
assert.equal(localize("flowArrow()"), '→');
assert.equal(localize("currentLanguage='ar';flowArrow()"), '←');
console.log('OK — motifs selon la revue choisie, opportunité en vert, sens RTL, échéances terminées séparées, rappel .ics pour risque actif seulement.');
