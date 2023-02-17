import{_ as s,o as n,c as a,a as o}from"./app.f3eebbf7.js";const l=JSON.parse('{"title":"生命周期钩子","description":"","frontmatter":{},"headers":[{"level":2,"title":"注册周期钩子","slug":"registering-lifecycle-hooks","link":"#registering-lifecycle-hooks","children":[]},{"level":2,"title":"生命周期图示","slug":"lifecycle-diagram","link":"#lifecycle-diagram","children":[]}],"relativePath":"guide/essentials/lifecycle.md"}'),e={name:"guide/essentials/lifecycle.md"},p=[o('<h1 id="lifecycle-hooks" tabindex="-1">生命周期钩子 <a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a></h1><p>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。</p><h2 id="registering-lifecycle-hooks" tabindex="-1">注册周期钩子 <a class="header-anchor" href="#registering-lifecycle-hooks" aria-hidden="true">#</a></h2><p>举例来说，<span class="composition-api"><code>onMounted</code></span><span class="options-api"><code>mounted</code></span> 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">the component is now mounted.</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">the component is now mounted.</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></div><p>还有其他一些钩子，会在实例生命周期的不同阶段被调用，最常用的是 <span class="composition-api"><a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html#onmounted"><code>onMounted</code></a>、<a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html#onupdated"><code>onUpdated</code></a> 和 <a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html#onunmounted"><code>onUnmounted</code></a>。所有生命周期钩子的完整参考及其用法请参考 <a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html">API 索引</a>。</span><span class="options-api"><a href="/vue3-docs-zh-cn/api/options-lifecycle.html#mounted"><code>mounted</code></a>、<a href="/vue3-docs-zh-cn/api/options-lifecycle.html#updated"><code>updated</code></a> 和 <a href="/vue3-docs-zh-cn/api/options-lifecycle.html#unmounted"><code>unmounted</code></a>。</span></p><div class="options-api"><p>所有生命周期钩子函数的 <code>this</code> 上下文都会自动指向当前调用它的组件实例。注意：避免用箭头函数来定义生命周期钩子，因为如果这样的话你将无法在函数中通过 <code>this</code> 获取组件实例。</p></div><div class="composition-api"><p>当调用 <code>onMounted</code> 时，Vue 会自动将回调函数注册到当前正被初始化的组件实例上。这意味着这些钩子应当在组件初始化时被<strong>同步</strong>注册。例如，请不要这样做：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">onMounted</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 异步注册时当前组件实例已丢失</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 这将不会正常工作</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>注意这并不意味着对 <code>onMounted</code> 的调用必须放在 <code>setup()</code> 或 <code>&lt;script setup&gt;</code> 内的词法上下文中。<code>onMounted()</code> 也可以在一个外部函数中调用，只要调用栈是同步的，且最终起源自 <code>setup()</code> 就可以。</p></div><h2 id="lifecycle-diagram" tabindex="-1">生命周期图示 <a class="header-anchor" href="#lifecycle-diagram" aria-hidden="true">#</a></h2><p>下面是实例生命周期的图表。你现在并不需要完全理解图中的所有内容，但以后它将是一个有用的参考。</p><p><img src="/vue3-docs-zh-cn/assets/lifecycle.16e4c08e.png" alt="组件生命周期图示"></p><p>有关所有生命周期钩子及其各自用例的详细信息，请参考<span class="composition-api"><a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html">生命周期钩子 API 索引</a></span><span class="options-api"><a href="/vue3-docs-zh-cn/api/options-lifecycle.html">生命周期钩子 API 索引</a></span>。</p>',13)];const c=s(e,[["render",function(s,o,l,e,c,t){return n(),a("div",null,p)}]]);export{l as __pageData,c as default};
