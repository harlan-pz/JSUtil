module.exports = {
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  'rules': {
    'class-methods-use-this': [0],
    'consistent-return': [0],
    'import/prefer-default-export': [0],
    'semi': [2,'never'],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "indent": ["error", "tab"]
  },
}