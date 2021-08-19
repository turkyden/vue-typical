module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/dist/**', 'docs/*'],
      env: {
        jest: true,
      },
    },
  ],
};
