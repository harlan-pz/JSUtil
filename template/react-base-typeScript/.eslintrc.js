module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint','react'],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'class-methods-use-this': [0],
    'consistent-return': [0],
    'import/prefer-default-export': [0],
    'react/destructuring-assignment': [0],
    'semi': [2,'never'],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "never"]
  },
};