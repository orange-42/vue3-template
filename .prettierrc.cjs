module.exports = {
  // 每行代码的最大字符数
  printWidth: 80,
  // 缩进空格数
  tabWidth: 2,
  // 使用空格代替制表符
  useTabs: false,
  // 在句末添加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在 JSX 中使用单引号
  jsxSingleQuote: false,
  // 在对象属性前后添加空格
  bracketSpacing: true,
  // 将箭头函数参数用括号包裹
  arrowParens: 'always',
  // 不在对象的最后一个元素后添加逗号
  trailingComma: 'none',
  overrides: [
    {
      files: '*.js',  // 明确指定 JS 文件
      options: {
        // 每行代码的最大字符数
        printWidth: 80,
        // 缩进空格数
        tabWidth: 2,
        // 使用空格代替制表符
        useTabs: false,
        // 在句末添加分号
        semi: false,
        // 使用单引号
        singleQuote: true,
        // 在 JSX 中使用单引号
        jsxSingleQuote: false,
        // 在对象属性前后添加空格
        bracketSpacing: true,
        // 将箭头函数参数用括号包裹
        arrowParens: 'always',
        // 不在对象的最后一个元素后添加逗号
        trailingComma: 'none',
        singleQuote: true
      }
    }
  ]
}
