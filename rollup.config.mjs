import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

/**
 * @type {import('rollup').RollupOptions}
 */
const options =
{
    input: {
        'index': './es2015/index.js'
    },
    output: [
        {
            dir: './system',
            format: 'system',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    plugins: [
        external(),
        resolve()
    ]
};

export default [
    options
];
