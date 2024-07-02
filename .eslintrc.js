module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
  rules: {
    'linebreak-style': ['error', 'unix'], // 换行风格unix
    quotes: ['error', 'single'], // 使用单引号符号
    semi: ['error', 'never'], // 禁止尾部使用分号
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'], // JSX属性不使用大括号
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-empty-function': 'off',
    'no-async-promise-executor': 'off',
    'quotes': ['error', 'single'],
    'prefer-destructuring': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 'array-bracket-spacing': ['error', 'always'], // 数组前后留空格
    'object-curly-spacing': ['error', 'always'], // 对象前后留空格
    'semi': ['error', 'never'], // ;分号省略
    'comma-dangle': ['error', 'never'], // ,逗号省略
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
}
