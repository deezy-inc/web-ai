/* eslint-env jest */

const { utils } = require('./lib/web-ai.cjs');

describe('dummy test', () => {
    test('try out cjs file', async () => {
        expect(utils.normalizeURL('https://google.com')).toBe('https://google.com/');
    });
});