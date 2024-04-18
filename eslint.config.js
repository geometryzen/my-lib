import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
    {
        ignores: ["build/**", "coverage/**", "dist/**", "docs/**", "node_modules/**", "types/**"],
        files: ["**/*.ts"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                // project: ["./tsconfig.json"]
            },
            globals: globals.browser
        },
        plugins: {
            "@typescript-eslint": typescriptEslint
        },
        "rules": {
            // Make this "error" when releasing.
            "brace-style": [
                2,
                "stroustrup"
            ],
            "no-console": "warn",
            "no-param-reassign": "off",
            "semi": [
                2,
                "always"
            ]
        }
    }
];