## 核心功能
* 代码检查‌：检测未定义变量、语法错误、不规范的写法等
* 风格统一：统一代码风格，比如空格、缩进等
* 错误预防：提示可能的错误，比如未使用的变量、不必要的分号等  
## 配置文件
* 配置文件：.eslintrc.js
```
module.exports = {
  root: true, // 根配置文件, 防止向上查找配置文件
  env: { // 环境配置
    browser: true, // 浏览器环境
    node: true, // node环境
    es6: true // 支持ES6语
    ...
  },
   parser: 'babel-eslint', // 解析器配置
  parserOptions: { // 解析器选项
    ecmaVersion: es5, // ECMAScript版本, 默认为5
    sourceType: 'module', // 模块类型, 默认为script
    ecmaFeatures: { // ECMAScript特性
      jsx: true, // 允许JSX语法
      ...
    }
  },
  extends: [
    'eslint:recommended', // 使用推荐的规则集
    'plugin:vue/essential', // 使用Vue插件的规则集
    ...
  ]// 继承配置
  plugins: [
    'vue', // 使用Vue插件
    ...
  ], // 插件配置
  rules: { // 规则配置
    'no-unused-vars': 'error', // 未使用的变量
    'no-extra-semi': 'error', // 不必要的分号
    ...
  },
  globals: { // 全局变量
    'Vue': 'writable', // Vue全局变量, 可写
    ...
  }
}
```
## 忽略文件配置
* 忽略文件：.eslintignore
```
/dist/
/node_modules/
*.min.js
```