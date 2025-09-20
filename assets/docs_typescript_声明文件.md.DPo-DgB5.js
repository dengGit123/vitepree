import{_ as s,c as n,o as e,ae as p}from"./chunks/framework.Dwd5JCA7.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/typescript/声明文件.md","filePath":"docs/typescript/声明文件.md","lastUpdated":1758337320000}'),l={name:"docs/typescript/声明文件.md"};function i(t,a,c,o,d,r){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h2 id="为什么要用声明文件" tabindex="-1">为什么要用声明文件： <a class="header-anchor" href="#为什么要用声明文件" aria-label="Permalink to &quot;为什么要用声明文件：&quot;">​</a></h2><ul><li><strong>声明文件中只能声明类型，不能实现逻辑。</strong></li></ul><ol><li>使用第三方库的类型或使用集成库时，如果没有声明文件，就无法使用类型检查。比如： axios、lodash等,需要声明文件来告诉ts编译器如何识别这些库的类型。</li><li>在编译成js文件可以自动生成声明文件(.d.ts)</li></ol><h2 id="声明文件具体实现" tabindex="-1">声明文件具体实现 <a class="header-anchor" href="#声明文件具体实现" aria-label="Permalink to &quot;声明文件具体实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//关键字 declare 表示声明一个类型</span></span>
<span class="line"><span>declare let myName: string; // 声明全局变量</span></span>
<span class="line"><span>declare const num: number;// 声明全局常量</span></span>
<span class="line"><span>declare var isSure: boolean;// 声明全局变量</span></span>
<span class="line"><span>declare function sayHello(name: string): void;// 声明全局方法</span></span>
<span class="line"><span>declare class Animal {}// 声明全局类</span></span>
<span class="line"><span>declare enum Color {Red, Green, Blue}// 声明全局枚举</span></span>
<span class="line"><span>declare namespace SomeNameSpace {}// 声明全局命名空间</span></span>
<span class="line"><span>declare module &quot;someModule&quot; {} // 声明全局模块</span></span>
<span class="line"><span>interface Person {} // 声明全局接口</span></span>
<span class="line"><span>type MyType = string; // 声明全局类型</span></span></code></pre></div><h2 id="声明文件位置" tabindex="-1">声明文件位置 <a class="header-anchor" href="#声明文件位置" aria-label="Permalink to &quot;声明文件位置&quot;">​</a></h2><ul><li>与库文件同目录下(同名不同扩展名 .d.ts)</li><li>全局位置(node_modules/@types),通过@types包安装社区维护的声明文件。</li><li>自定义位置(tsconfig.json中配置) <ul><li>配置typeRoots或者types</li></ul></li></ul><h2 id="使用声明文件" tabindex="-1">使用声明文件 <a class="header-anchor" href="#使用声明文件" aria-label="Permalink to &quot;使用声明文件&quot;">​</a></h2><ul><li>通过<code>import</code>导入</li><li>通过三斜线指令 <code>/// &lt;reference path=&quot;....&quot; /&gt;</code></li></ul><h2 id="‌声明方式‌" tabindex="-1">‌声明方式‌ <a class="header-anchor" href="#‌声明方式‌" aria-label="Permalink to &quot;‌声明方式‌&quot;">​</a></h2><ul><li>全局声明：直接声明在文件顶层</li><li>模块声明： 包含在 <code>declare module</code> 块中</li><li>命名空间声明：包含在 <code>declare namespace</code> 块中</li></ul><h2 id="模块声明" tabindex="-1">模块声明 <a class="header-anchor" href="#模块声明" aria-label="Permalink to &quot;模块声明&quot;">​</a></h2><ul><li>为无类型声明的js库提供类型支持：当使用没有类型声明的第三方库时，可以通过<code>declare module</code>来为其添加类型定义</li><li>扩展现有模块：基于现有的模块进行扩展，添加新的属性或方法</li><li>声明自定义模块的类型：为项目中的自定义模块提供类型定义，提高类型安全性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>declare module &quot;my-module&quot; {</span></span>
<span class="line"><span>  //类型声明内容</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>模块内部可以包含：</p><ul><li>变量声明： <code>export const 变量名：类型;</code></li><li>函数声明： <code>export function 函数名(参数：类型)：返回类型;</code></li><li>类声明： <code>export class 类名 {}</code></li><li>接口声明： <code>export interface 接口名 {}</code></li><li>枚举声明： <code>export enum 枚举名 {}</code></li><li>命名空间声明： <code>export namespace 命名空间名 {}</code></li></ul><h3 id="模块声明使用场景" tabindex="-1">模块声明使用场景 <a class="header-anchor" href="#模块声明使用场景" aria-label="Permalink to &quot;模块声明使用场景&quot;">​</a></h3><h4 id="_1-为无类型库添加声明" tabindex="-1">1. 为无类型库添加声明 <a class="header-anchor" href="#_1-为无类型库添加声明" aria-label="Permalink to &quot;1. 为无类型库添加声明&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// my-library.d.ts</span></span>
<span class="line"><span>declare module &quot;my-library&quot; {</span></span>
<span class="line"><span>  export function doSomething(input: string): number;</span></span>
<span class="line"><span>  export const version: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用时获得完整类型提示</span></span>
<span class="line"><span>//import { doSomething, version } from &quot;my-library&quot;;</span></span>
<span class="line"><span>//doSomething(&quot;hello&quot;);</span></span></code></pre></div><h4 id="_2-扩展现有模块-如vue" tabindex="-1">2. 扩展现有模块，如vue <a class="header-anchor" href="#_2-扩展现有模块-如vue" aria-label="Permalink to &quot;2. 扩展现有模块，如vue&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// vue.d.ts</span></span>
<span class="line"><span>declare module &quot;vue&quot; {</span></span>
<span class="line"><span>  interface ComponentCustomProperties {</span></span>
<span class="line"><span>    $bus: EventEmitter;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//这样可以在所有Vue组件中安全使用 this.$bus</span></span></code></pre></div><h4 id="_3-声明全局模块" tabindex="-1">3. 声明全局模块 <a class="header-anchor" href="#_3-声明全局模块" aria-label="Permalink to &quot;3. 声明全局模块&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// global.d.ts</span></span>
<span class="line"><span>declare module &quot;global&quot; {</span></span>
<span class="line"><span>  type BreadCrumbsType = {</span></span>
<span class="line"><span>    title: string;</span></span>
<span class="line"><span>    to: string;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//所有文件都可以直接使用 BreadCrumbsType 类型</span></span></code></pre></div><h2 id="注意事项-模块声明" tabindex="-1">注意事项(模块声明) <a class="header-anchor" href="#注意事项-模块声明" aria-label="Permalink to &quot;注意事项(模块声明)&quot;">​</a></h2><ol><li>仅包含类型声明，不包含实现逻辑。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 错误示例</span></span>
<span class="line"><span>declare class World {</span></span>
<span class="line"><span>  m() { console.log(&quot;Hello&quot;); } // ❌ 不能包含实现</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>避免命名冲突: 声明<strong>模块的名称应与实际模块名称</strong>完全一致，包括大小写</li><li>合并规则: 如果实际代码中存在同名模块，<code>declare module</code> 声明会与其合并，补充类型信息</li><li>模块解析: 确保<code>tsconfig.json</code>中正确配置了 <code>typeRoots</code> 或 <code>types</code>，以便编译器能找到声明文件</li><li>全局与模块声明: <code>declare module</code> 用于模块声明，而 <code>declare global</code> 用于全局变量声明，<strong>两者不要混淆</strong></li></ol><h2 id="使用方法-模块声明" tabindex="-1">使用方法(模块声明) <a class="header-anchor" href="#使用方法-模块声明" aria-label="Permalink to &quot;使用方法(模块声明)&quot;">​</a></h2><h3 id="_1-基本使用步骤" tabindex="-1">1. 基本使用步骤 <a class="header-anchor" href="#_1-基本使用步骤" aria-label="Permalink to &quot;1. 基本使用步骤&quot;">​</a></h3><ol><li>创建 .d.ts 声明文件（如 my-module.d.ts）</li><li>使用 declare module 声明模块结构</li><li>在 tsconfig.json 中包含声明文件</li><li>在代码中正常导入使用</li></ol><h2 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h2><ul><li>减少全局污染：将类型定义限制在命名空间范围内，避免全局类型冲突</li></ul><h3 id="命名空间在声明文件中的语法结构" tabindex="-1">命名空间在声明文件中的语法结构 <a class="header-anchor" href="#命名空间在声明文件中的语法结构" aria-label="Permalink to &quot;命名空间在声明文件中的语法结构&quot;">​</a></h3><ol><li>基本语法</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基础命名空间声明</span></span>
<span class="line"><span>declare namespace MyNamespace {</span></span>
<span class="line"><span>  // 类型定义</span></span>
<span class="line"><span>  interface MyType {</span></span>
<span class="line"><span>    prop: string;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 导出类型成员</span></span>
<span class="line"><span>  export const version: string;</span></span>
<span class="line"><span>  export class MyClass {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>嵌套命名空间</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>declare namespace Outer {</span></span>
<span class="line"><span>  export namespace Inner {</span></span>
<span class="line"><span>    export interface NestedType {</span></span>
<span class="line"><span>      value: number;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 使用方式</span></span>
<span class="line"><span>Outer.Inner.NestedType;</span></span></code></pre></div><ol start="3"><li>多文件命名空间</li></ol><ul><li>通过 <code>/// &lt;reference path=&quot;...&quot; /&gt;</code> 引用其他文件中的命名空间</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// file1.d.ts</span></span>
<span class="line"><span>declare namespace MyLib {</span></span>
<span class="line"><span>  export interface Config {</span></span>
<span class="line"><span>    timeout: number;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// file2.d.ts</span></span>
<span class="line"><span>/// &lt;reference path=&quot;file1.d.ts&quot; /&gt;</span></span>
<span class="line"><span>declare namespace MyLib {</span></span>
<span class="line"><span>  export class Service {</span></span>
<span class="line"><span>    constructor(config: Config);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="基本使用方式" tabindex="-1">基本使用方式 <a class="header-anchor" href="#基本使用方式" aria-label="Permalink to &quot;基本使用方式&quot;">​</a></h2><ol><li>直接访问命名空间成员‌: 在声明文件中使用 <code>export</code> 导出的命名空间成员，可以直接通过 <code>命名空间名.成员名</code> 的方式访问</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 声明文件 my-namespace.d.ts</span></span>
<span class="line"><span>declare namespace MyNamespace {</span></span>
<span class="line"><span>  export const PI: number = 3.14159;</span></span>
<span class="line"><span>  export function calculateCircumference(diameter: number): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用文件 app.ts</span></span>
<span class="line"><span>console.log(MyNamespace.PI); // 输出: 3.14159</span></span>
<span class="line"><span>const circumference = MyNamespace.calculateCircumference(5);</span></span></code></pre></div><ol start="2"><li>嵌套命名空间访问‌： 需要使用逐级访问的方式</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 声明文件 app.d.ts</span></span>
<span class="line"><span>declare namespace MyApp {</span></span>
<span class="line"><span>  export namespace Models {</span></span>
<span class="line"><span>    export interface User {</span></span>
<span class="line"><span>      id: string;</span></span>
<span class="line"><span>      name: string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用文件 app.ts</span></span>
<span class="line"><span>interface User extends MyApp.Models.User {}</span></span></code></pre></div>`,45)])])}const m=s(l,[["render",i]]);export{h as __pageData,m as default};
