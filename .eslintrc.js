module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        "node_modules",
        "playwright-report",
        "test-results",
        "playwright.config.ts"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "no-public",
                    "methods": "explicit",
                    "properties": "explicit",
                    "parameterProperties": "no-public"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": ["class", "interface"],
                "format": ["PascalCase"]
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/object-curly-spacing": [
            'error',
            'always'
        ],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
        "keyword-spacing": ["error", { "after": true }],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "array-bracket-spacing": [
            "warn",
            "never",
            {
                "singleValue": false,
                "objectsInArrays": false,
                "arraysInArrays": false
            }
        ],
        "key-spacing": "warn",
        "array-element-newline": [
            "error",
            {
                "ArrayExpression": "consistent",
            }
        ],
        "comma-dangle": ["warn", "never"],
        "eqeqeq": [
            "error",
            "always"
        ],
        "no-multi-spaces": ["error", { "exceptions": { "Property": false } }],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "no-bitwise": "error",
        "no-cond-assign": "error",
        "no-eval": "error",
        "no-multiple-empty-lines": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-var": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-const": "error",
        "no-redeclare": "error",
        "jsx-quotes": ["error", "prefer-double"]
    }
}