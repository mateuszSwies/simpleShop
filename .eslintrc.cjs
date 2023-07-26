module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [['@', './src']],
  //       extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  //     },
  //   },
  // },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
  },
};
