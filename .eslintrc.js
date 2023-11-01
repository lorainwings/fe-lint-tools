// .eslintrc.js
/** @type {import("eslint").Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
}
