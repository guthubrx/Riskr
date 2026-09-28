import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const programs = ['programme-si', 'programme-entrepots', 'programme-clients'];

async function loadData(path) {
    const window = {};
    const localStorage = { getItem: () => null, setItem: () => {} };
    vm.runInNewContext(await readFile(path, 'utf8'), { window, localStorage }, { timeout: 1000 });
    return window.RISKR_DATA;
}

test('the public default is the complete Valmeris portfolio', async () => {
    const current = await loadData(join(root, 'riskr-data.js'));
    const video = await loadData(join(root, 'examples/valmeris/en/portefeuille/riskr-data.js'));
    assert.deepEqual(JSON.parse(JSON.stringify(current)), JSON.parse(JSON.stringify(video)));
    assert.equal(current.portfolio.programs.length, 3);
    assert.equal(current.portfolio.programs.reduce((sum, item) => sum + item.data.risks.length, 0), 47);
});

test('the published examples contain only fictional document domains', async () => {
    for (const language of ['en', 'fr']) {
        for (const name of [...programs, 'portefeuille']) {
            const path = join(root, 'examples/valmeris', language, name, 'riskr-data.js');
            const source = await readFile(path, 'utf8');
            assert.doesNotMatch(source, /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i, path);
            assert.doesNotMatch(source, /\b(?:SNCF|ViGi360|Gares\s*&\s*Connexions)\b/i, path);
            for (const match of source.matchAll(/https?:\/\/([^/\s"']+)/g)) {
                assert.match(match[1], /\.example$/, `${path}: ${match[0]}`);
            }
        }
    }
});
