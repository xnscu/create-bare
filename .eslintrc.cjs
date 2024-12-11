/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  globals: {
    globalThis: false
  },
  env: {
    node: true,
    amd: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-empty": 0,
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        trailingComma: "all",
        printWidth: 100,
      },
    ],
    "max-len": ["warn", { code: 100, ignoreComments: true, ignoreStrings: true }],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: false,
      },
    ]
  },
};
