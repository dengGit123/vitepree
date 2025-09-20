import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.Dwd5JCA7.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/code_standard/eslint.md","filePath":"docs/code_standard/eslint.md","lastUpdated":1758337320000}'),l={name:"docs/code_standard/eslint.md"};function i(t,s,c,r,o,d){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="核心功能" tabindex="-1">核心功能 <a class="header-anchor" href="#核心功能" aria-label="Permalink to &quot;核心功能&quot;">​</a></h2><ul><li>代码检查‌：检测未定义变量、语法错误、不规范的写法等</li><li>风格统一：统一代码风格，比如空格、缩进等</li><li>错误预防：提示可能的错误，比如未使用的变量、不必要的分号等</li></ul><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><ul><li>配置文件：.eslintrc.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  root: true, // 根配置文件, 防止向上查找配置文件</span></span>
<span class="line"><span>  env: { // 环境配置</span></span>
<span class="line"><span>    browser: true, // 浏览器环境</span></span>
<span class="line"><span>    node: true, // node环境</span></span>
<span class="line"><span>    es6: true // 支持ES6语</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>   parser: &#39;babel-eslint&#39;, // 解析器配置</span></span>
<span class="line"><span>  parserOptions: { // 解析器选项</span></span>
<span class="line"><span>    ecmaVersion: es5, // ECMAScript版本, 默认为5</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;, // 模块类型, 默认为script</span></span>
<span class="line"><span>    ecmaFeatures: { // ECMAScript特性</span></span>
<span class="line"><span>      jsx: true, // 允许JSX语法</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;eslint:recommended&#39;,</span><span> // 使用推荐的规则集</span></span>
<span class="line"><span>    &#39;plugin:vue/essential&#39;,</span><span> // 使用Vue插件的规则集</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ]// 继承配置</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    &#39;vue&#39;,</span><span> // 使用Vue插件</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ], // 插件配置</span></span>
<span class="line"><span>  rules: { // 规则配置</span></span>
<span class="line"><span>    &#39;no-unused-vars&#39;: &#39;error&#39;,</span><span> // 未使用的变量</span></span>
<span class="line"><span>    &#39;no-extra-semi&#39;: &#39;error&#39;,</span><span> // 不必要的分号</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  globals: { // 全局变量</span></span>
<span class="line"><span>    &#39;Vue&#39;: &#39;writable&#39;,</span><span> // Vue全局变量, 可写</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="忽略文件配置" tabindex="-1">忽略文件配置 <a class="header-anchor" href="#忽略文件配置" aria-label="Permalink to &quot;忽略文件配置&quot;">​</a></h2><ul><li>忽略文件：.eslintignore</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dist/</span></span>
<span class="line"><span>/node_modules/</span></span>
<span class="line"><span>*.min.js</span></span></code></pre></div>`,8)])])}const m=n(l,[["render",i]]);export{h as __pageData,m as default};
