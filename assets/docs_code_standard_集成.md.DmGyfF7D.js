import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.Dwd5JCA7.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/code_standard/集成.md","filePath":"docs/code_standard/集成.md","lastUpdated":1758337320000}'),t={name:"docs/code_standard/集成.md"};function l(i,s,o,c,r,d){return e(),n("div",null,[...s[0]||(s[0]=[p(`<h2 id="prettier-和-eslint集成配置方案" tabindex="-1">Prettier 和 ESLint集成配置方案 <a class="header-anchor" href="#prettier-和-eslint集成配置方案" aria-label="Permalink to &quot;Prettier 和 ESLint集成配置方案&quot;">​</a></h2><ol><li>安装依赖</li></ol><ul><li>npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier</li></ul><ol start="2"><li>配置文件<code>‌.eslintrc.js</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    .....,</span></span>
<span class="line"><span>    &#39;plugin:prettier/recommended&#39;</span><span> // 必须放在最后面，否则会覆盖其他配置规则;等价于同时启用冲突解决和规则集成</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="冲突处理方案" tabindex="-1">冲突处理方案 <a class="header-anchor" href="#冲突处理方案" aria-label="Permalink to &quot;冲突处理方案&quot;">​</a></h2><ol><li>规则优先级</li></ol><ul><li>Prettier 格式化规则优先</li><li>通过 eslint-config-prettier 关闭 ESLint 冲突规则</li></ul><ol start="2"><li>自定义覆盖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//.eslintrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    ...,</span></span>
<span class="line"><span>    &#39;prettier/prettier&#39;: [</span></span>
<span class="line"><span>      &#39;error&#39;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        // 自定义覆盖规则</span></span>
<span class="line"><span>        semi: false,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="编辑器配置" tabindex="-1">编辑器配置 <a class="header-anchor" href="#编辑器配置" aria-label="Permalink to &quot;编辑器配置&quot;">​</a></h2><h3 id="vs-code" tabindex="-1">VS Code <a class="header-anchor" href="#vs-code" aria-label="Permalink to &quot;VS Code&quot;">​</a></h3><ol><li>安装插件<code>Prettier - Code formatter</code>和<code>ESLint</code></li><li>设置自动格式化快捷键（可选）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: true,</span><span> // 保存时自动格式化</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: true</span><span> // 自动修复 ESLint 问题</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>配置文件<code>.vscode/settings.json</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span><span> // JavaScript 文件默认使用 Prettier</span></span>
<span class="line"><span>    &quot;editor.formatOnSave&quot;: true,</span><span> // 保存时自动格式化</span></span>
<span class="line"><span>    &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>      &quot;source.fixAll.eslint&quot;: true</span><span> // 自动修复 ESLint 问题</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 其他语言也可以这样配置，例如 TypeScript、Vue 等</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>禁用某些规则的自动修复（可选）</li></ol><ul><li>在 <code>.eslintrc.js</code> 中添加 <code>rules</code> 并设置 <code>0</code> 或 <code>off</code> 来禁用特定规则</li></ul>`,18)])])}const v=a(t,[["render",l]]);export{h as __pageData,v as default};
