const {
    defineConfig,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");
const react = require("eslint-plugin-react");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },

        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ),

    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
    },

    rules: {
        "prettier/prettier": ["error", {
            semi: true,
            singleQuote: true,
            trailingComma: "all",
            printWidth: 80,
            tabWidth: 2,
            arrowParens: "avoid",
            bracketSpacing: true,
            jsxBracketSameLine: true,
            endOfLine: "auto",
        }],

        "react/react-in-jsx-scope": "off",

        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
        }],

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
}]);
