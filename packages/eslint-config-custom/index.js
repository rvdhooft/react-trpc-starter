const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'turbo',
    'prettier',
  ],
  parserOptions: {
    project,
  },
  env: { browser: true, es2020: true },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'eslint-plugin-import'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'turbo/no-undeclared-env-vars': ['error'],
    'import/prefer-default-export': ['error'],
  },
}
