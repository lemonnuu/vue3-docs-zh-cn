import{_ as s,o as a,c as n,a as l}from"./app.f3eebbf7.js";const o=JSON.parse('{"title":"响应式 API：工具函数","description":"","frontmatter":{},"headers":[{"level":2,"title":"isRef()","slug":"isref","link":"#isref","children":[]},{"level":2,"title":"unref()","slug":"unref","link":"#unref","children":[]},{"level":2,"title":"toRef()","slug":"toref","link":"#toref","children":[]},{"level":2,"title":"toRefs()","slug":"torefs","link":"#torefs","children":[]},{"level":2,"title":"isProxy()","slug":"isproxy","link":"#isproxy","children":[]},{"level":2,"title":"isReactive()","slug":"isreactive","link":"#isreactive","children":[]},{"level":2,"title":"isReadonly()","slug":"isreadonly","link":"#isreadonly","children":[]}],"relativePath":"api/reactivity-utilities.md"}'),p={name:"api/reactivity-utilities.md"},e=[l('<h1 id="reactivity-api-utilities" tabindex="-1">响应式 API：工具函数 <a class="header-anchor" href="#reactivity-api-utilities" aria-hidden="true">#</a></h1><h2 id="isref" tabindex="-1">isRef() <a class="header-anchor" href="#isref" aria-hidden="true">#</a></h2><p>检查某个值是否为 ref。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">r</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">r</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>请注意，返回值是一个<a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates" target="_blank" rel="noreferrer">类型判定</a> (type predicate)，这意味着 <code>isRef</code> 可以被用作类型守卫：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#82AAFF;">isRef</span><span style="color:#A6ACCD;">(foo)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// foo 的类型被收窄为了 Ref&lt;unknown&gt;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="unref" tabindex="-1">unref() <a class="header-anchor" href="#unref" aria-hidden="true">#</a></h2><p>如果参数是 ref，则返回内部值，否则返回参数本身。这是 <code>val = isRef(val) ? val.value : val</code> 计算的一个语法糖。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">ref</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>示例</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFoo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">unwrapped</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">unref</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// unwrapped 现在保证为 number 类型</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="toref" tabindex="-1">toRef() <a class="header-anchor" href="#toref" aria-hidden="true">#</a></h2><p>基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">defaultValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ToRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ToRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>示例</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fooRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRef</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 更改该 ref 会更新源属性</span></span>\n<span class="line"><span style="color:#A6ACCD;">fooRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 更改源属性也会更新该 ref</span></span>\n<span class="line"><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">++</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(fooRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>\n<span class="line"></span></code></pre></div><p>请注意，这不同于：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fooRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo)</span></span>\n<span class="line"></span></code></pre></div><p>上面这个 ref <strong>不会</strong>和 <code>state.foo</code> 保持同步，因为这个 <code>ref()</code> 接收到的是一个纯数值。</p><p><code>toRef()</code> 这个函数在你想把一个 prop 的 ref 传递给一个组合式函数时会很有用：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 将 `props.foo` 转换为 ref，然后传入</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 一个组合式函数</span></span>\n<span class="line"><span style="color:#82AAFF;">useSomeFeature</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">toRef</span><span style="color:#A6ACCD;">(props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>当 <code>toRef</code> 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效。尝试将新的值传递给 ref 等效于尝试直接更改 props，这是不允许的。在这种场景下，你可能可以考虑使用带有 <code>get</code> 和 <code>set</code> 的 <a href="./reactivity-core.html#computed"><code>computed</code></a> 替代。详情请见<a href="/vue3-docs-zh-cn/guide/components/v-model.html">在组件上使用 <code>v-model</code></a> 指南。</p><p>即使源属性当前不存在，<code>toRef()</code> 也会返回一个可用的 ref。这让它在处理可选 props 的时候格外实用，相比之下 <a href="#torefs"><code>toRefs</code></a> 就不会为可选 props 创建对应的 refs。</p></li></ul><h2 id="torefs" tabindex="-1">toRefs() <a class="header-anchor" href="#torefs" aria-hidden="true">#</a></h2><p>将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 <a href="#toref"><code>toRef()</code></a> 创建的。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&gt;(</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>\n<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ToRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ToRef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>示例</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> stateAsRefs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#A6ACCD;">(state)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">stateAsRefs 的类型：{</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  foo: Ref&lt;number&gt;,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  bar: Ref&lt;number&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 这个 ref 和源属性已经“链接上了”</span></span>\n<span class="line"><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">++</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(stateAsRefs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">stateAsRefs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>\n<span class="line"></span></code></pre></div><p>当从组合式函数中返回响应式对象时，<code>toRefs</code> 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFeatureX</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    foo</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    bar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...基于状态的操作逻辑</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 在返回时都转为 ref</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 可以解构而不会失去响应性</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFeatureX</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><p><code>toRefs</code> 在调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 <a href="#toref"><code>toRef</code></a>。</p></li></ul><h2 id="isproxy" tabindex="-1">isProxy() <a class="header-anchor" href="#isproxy" aria-hidden="true">#</a></h2><p>检查一个对象是否是由 <a href="./reactivity-core.html#reactive"><code>reactive()</code></a>、<a href="./reactivity-core.html#readonly"><code>readonly()</code></a>、<a href="./reactivity-advanced.html#shallowreactive"><code>shallowReactive()</code></a> 或 <a href="./reactivity-advanced.html#shallowreadonly"><code>shallowReadonly()</code></a> 创建的代理。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isProxy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="isreactive" tabindex="-1">isReactive() <a class="header-anchor" href="#isreactive" aria-hidden="true">#</a></h2><p>检查一个对象是否是由 <a href="./reactivity-core.html#reactive"><code>reactive()</code></a> 或 <a href="./reactivity-advanced.html#shallowreactive"><code>shallowReactive()</code></a> 创建的代理。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isReactive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="isreadonly" tabindex="-1">isReadonly() <a class="header-anchor" href="#isreadonly" aria-hidden="true">#</a></h2><p>检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。</p><p>通过 <a href="./reactivity-core.html#readonly"><code>readonly()</code></a> 和 <a href="./reactivity-advanced.html#shallowreadonly"><code>shallowReadonly()</code></a> 创建的代理都是只读的，因为他们是没有 <code>set</code> 函数的 <a href="./reactivity-core.html#computed"><code>computed()</code></a> ref。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isReadonly</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>\n<span class="line"></span></code></pre></div></li></ul>',23)];const t=s(p,[["render",function(s,l,o,p,t,c){return a(),n("div",null,e)}]]);export{o as __pageData,t as default};
