const { rules } = require("eslint-plugin-jest");

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
