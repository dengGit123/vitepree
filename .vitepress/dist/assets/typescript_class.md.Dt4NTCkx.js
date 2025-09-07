import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.Cd-3tpCq.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/class.md","filePath":"typescript/class.md","lastUpdated":1757172066000}'),t={name:"typescript/class.md"};function i(l,s,c,o,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><ul><li>相同属性和方法的一系列对象的集合，用<code>class</code>关键字定义</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> class Person{</span></span>
<span class="line"><span>  name:string;</span></span>
<span class="line"><span>  constructor(name:string){</span></span>
<span class="line"><span>    this.name=name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h2><ul><li>保证一个类仅有一个实例，并提供一个访问它的全局访问点</li><li>即创建一个类，这个类只能实例化一次。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Singleton{</span></span>
<span class="line"><span>  private static instance:Singleton;</span></span>
<span class="line"><span>  public static getInstance():Singleton{</span></span>
<span class="line"><span>    if(!this.instance){</span></span>
<span class="line"><span>      this.instance=new Singleton();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this.instance;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)]))}const _=a(t,[["render",i]]);export{u as __pageData,_ as default};
