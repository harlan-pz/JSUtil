module.exports = {
  env: {
    browser: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'class-methods-use-this': [0],
    'consistent-return': [0],
    'import/prefer-default-export': [0],
    'react/destructuring-assignment': [0],
    'semi': [2,'never'],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "never"]
  },
}