/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**
 * Overrides the tsconfig used for the app.
 * In the test environment we need some tweaks.
 */

const tsNode = require('ts-node');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testTSConfig = require('./tests/tsconfig.json');

tsNode.register({
    files: true,
    transpileOnly: true,
    project: './tests/tsconfig.json'
});