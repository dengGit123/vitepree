import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.DzsIGSTZ.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"code_standard/prettier.md","filePath":"code_standard/prettier.md","lastUpdated":1757172066000}'),t={name:"code_standard/prettier.md"};function l(i,s,o,r,c,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><ul><li>配置文件的优先级从高到低依次为：</li></ul><ol><li>在<code>package.json</code>中配置<code>prettier</code>;</li><li><code>.prettierrc</code>JSON格式的配置文件;</li><li><code>.prettierrc.json</code>,<code>.prettierrc.yml</code>,<code>.prettierrc.yaml</code>,<code>.prettierrc.json5</code>;</li><li><code>.prettierrc.js</code>,\`\`prettierrc.cjs<code>,</code>prettierrc.mjs<code>,</code>prettier.config.js\`等 module.exports导出配置文件;</li><li><code>.prettierrc.toml</code></li></ol><ul><li>为了方便，查看，可以使用 .prettierrc.js 文件，在里面导出配置对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//.prettierrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // 1.一行代码的最大字符数，默认是80(printWidth: &lt;int&gt;)</span></span>
<span class="line"><span>  printWidth: 80,</span></span>
<span class="line"><span>  // 2.tab宽度为2空格(tabWidth: &lt;int&gt;)</span></span>
<span class="line"><span>  tabWidth: 2,</span></span>
<span class="line"><span>  // 3.是否使用tab来缩进，(useTabs: &lt;bool&gt;)</span></span>
<span class="line"><span>  useTabs: false,</span></span>
<span class="line"><span>  // 4.结尾是否添加分号</span></span>
<span class="line"><span>  semi: false,</span></span>
<span class="line"><span>  // 5.使用单引号(singleQuote: &lt;bool&gt;)</span></span>
<span class="line"><span>  singleQuote: true,</span></span>
<span class="line"><span>  // 6.object对象中key值是否加引号（quoteProps: &quot;&lt;as-needed|consistent|preserve&gt;&quot;）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号</span></span>
<span class="line"><span>  quoteProps: &#39;as-needed&#39;,</span></span>
<span class="line"><span>  // 7.在jsx文件中的引号需要单独设置（jsxSingleQuote: &lt;bool&gt;）</span></span>
<span class="line"><span>  jsxSingleQuote: false,</span></span>
<span class="line"><span>  // 8.尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: &quot;&lt;es5|none|all&gt;&quot;）</span></span>
<span class="line"><span>  trailingComma: &#39;es5&#39;,</span></span>
<span class="line"><span>  // 9.object对象里面的key和value值和括号间的空格(bracketSpacing: &lt;bool&gt;)</span></span>
<span class="line"><span>  bracketSpacing: true,</span></span>
<span class="line"><span>  // 10.jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: &lt;bool&gt;)</span></span>
<span class="line"><span>  jsxBracketSameLine: false,</span></span>
<span class="line"><span>  // 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: &quot;&lt;always|avoid&gt;&quot;）</span></span>
<span class="line"><span>  arrowParens: &#39;always&#39;,</span></span>
<span class="line"><span>  // 12.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: &lt;int&gt;  rangeEnd: &lt;int&gt;）</span></span>
<span class="line"><span>  rangeStart: 0,</span></span>
<span class="line"><span>  rangeEnd: Infinity,</span></span>
<span class="line"><span>  // 18. vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠</span></span>
<span class="line"><span>  vueIndentScriptAndStyle: false,</span></span>
<span class="line"><span>  // 19.    endOfLine: &quot;&lt;lf|crlf|cr|auto&gt;&quot; 行尾换行符,默认是lf,</span></span>
<span class="line"><span>  endOfLine: &#39;lf&#39;,</span></span>
<span class="line"><span>  // 20.embeddedLanguageFormatting: &quot;off&quot;,默认是auto,控制被引号包裹的代码是否进行格式化</span></span>
<span class="line"><span>  embeddedLanguageFormatting: &#39;off&#39;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="忽略不想格式化的文件" tabindex="-1">忽略不想格式化的文件 <a class="header-anchor" href="#忽略不想格式化的文件" aria-label="Permalink to &quot;忽略不想格式化的文件&quot;">​</a></h2><ul><li>在项目根目录下创建<code>.prettierignore</code>文件，在里面写上不想格式化的文件名或文件夹名</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//.prettierignore</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span></code></pre></div>`,8)]))}const m=a(t,[["render",l]]);export{g as __pageData,m as default};
