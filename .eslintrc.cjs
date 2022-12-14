module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-no-bind': 0,
    'import/prefer-default-export': 0,
  },
};
