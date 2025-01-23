module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // 如果你的项目会在浏览器中运行
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier', // 这会禁用与 Prettier 冲突的规则
    'eslint:recommended',  // 添加基础的 JavaScript 规则支持
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',  // 如果使用了 ES 模块
  },
  rules: {
    'semi': ['error', 'never'],  // 禁用分号
    'comma-dangle': ['error', 'never'],  // 禁用尾随逗号
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
