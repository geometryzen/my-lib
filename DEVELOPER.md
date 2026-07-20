In order to allow Jest testing in consuming libraries, it is necessary to make some "undesirable" changes to this package.json

1. Must remove "type": "module".
2. Must point the default export to the commonjs distribution.
3. You may need to use node@20.9 https://github.com/rollup/rollup/issues/5531

