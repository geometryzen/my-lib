import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import peer_deps_external from 'rollup-plugin-peer-deps-external';
import package_json from './package.json' assert { type: 'json' };

/**
* Comment with library information to be appended in the generated bundles.
*/
const banner = `/**
* ${package_json.name} ${package_json.version}
* (c) ${package_json.author.name} ${package_json.author.email}
* Released under the ${package_json.license} License.
*/
`.trim();

const options: RollupOptions[] = [
    {
        input: './src/index.ts',
        output: [
            {
                banner,
                file: './dist/esm/index.js',
                format: 'esm',
                sourcemap: true
            },
            {
                file: package_json.module,
                format: 'esm',
                sourcemap: true,
                plugins: [terser()]
            },
            {
                banner,
                file: './dist/system/index.js',
                format: 'system',
                sourcemap: true
            },
            {
                file: package_json.exports['.'].system,
                format: 'system',
                sourcemap: true,
                plugins: [terser()]
            },
            {
                banner,
                file: package_json.main,
                format: 'commonjs',
                sourcemap: true
            },
            {
                file: package_json.browser,
                format: 'umd',
                name: 'MYLIB',
                sourcemap: true
            }
        ],
        plugins: [
            // Allows us to consume libraries that are CommonJS.
            commonjs(),
            peer_deps_external() as Plugin,
            resolve(),
            typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.spec.ts'] })
        ]
    },
    // Bundle the generated ESM type definitions.
    {
        input: './dist/esm/types/src/index.d.ts',
        output: [{ file: package_json.types, format: "esm" }],
        plugins: [dts()]
    }
];

export default options;