import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { Plugin, RollupOptions } from 'rollup';
import external from 'rollup-plugin-peer-deps-external';

const options: RollupOptions[] = [
    {
        input: {
            'index': './es2015/src/index.js'
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
            // Problem with the typings...
            external() as unknown as Plugin,
            resolve()
        ]
    }];

export default options;
