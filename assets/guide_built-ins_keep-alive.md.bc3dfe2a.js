import{r as s,o as a,c as n,e as l,t as e,F as p,D as o,E as c,I as t,J as i,d as r,i as D,K as F,L as d,j as y,a as C}from"./app.f3eebbf7.js";const u=l("p",null,"Current component: A",-1),A={style:{"margin-right":"20px"}},b={__name:"CompA",setup(o){let c=s(0);return(s,o)=>(a(),n(p,null,[u,l("span",A,"count: "+e(c.value),1),l("button",{onClick:o[0]||(o[0]=s=>c.value++)},"+")],64))}},g=l("p",null,"Current component: B",-1),v={style:{"margin-right":"20px"}},m={__name:"CompB",setup(t){let i=s("");return(s,t)=>(a(),n(p,null,[g,l("span",v,"Message is: "+e(i.value),1),o(l("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s)},null,512),[[c,i.value]])],64))}},I={class:"demo"},h={__name:"SwitchComponent",props:{useKeepAlive:Boolean},setup(s){let e=t(b);return(p,c)=>(a(),n("div",I,[l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[0]||(c[0]=s=>e.value=s),value:b},null,512),[[i,e.value]]),r(" A")]),l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[1]||(c[1]=s=>e.value=s),value:m},null,512),[[i,e.value]]),r(" B")]),s.useKeepAlive?(a(),D(d,{key:0},[(a(),D(F(e.value)))],1024)):(a(),D(F(e.value),{key:1}))]))}},X=C('<h1 id="keepalive" tabindex="-1">KeepAlive <a class="header-anchor" href="#keepalive" aria-hidden="true">#</a></h1><p><code>&lt;KeepAlive&gt;</code> 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。</p><h2 id="basic-usage" tabindex="-1">基本使用 <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><p>在组件基础章节中，我们已经介绍了通过特殊的 <code>&lt;component&gt;</code> 元素来实现<a href="/vue3-docs-zh-cn/guide/essentials/component-basics.html#dynamic-components">动态组件</a>的用法：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">activeComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre></div><p>默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。</p><p>在下面的例子中，你会看到两个有状态的组件——A 有一个计数器，而 B 有一个通过 <code>v-model</code> 同步 input 框输入内容的文字展示。尝试先更改一下任意一个组件的状态，然后切走，再切回来：</p>',7),B=C('<p>你会发现在切回来之后，之前已更改的状态都被重置了。</p><p>在切换时创建新的组件实例通常是有意义的，但在这个例子中，我们的确想要组件能在被“切走”的时候保留它们的状态。要解决这个问题，我们可以用 <code>&lt;KeepAlive&gt;</code> 内置组件将这些动态组件包装起来：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 非活跃的组件将会被缓存！ --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">activeComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>现在，在组件切换时状态也能被保留了：</p>',4),G=C('<div class="composition-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHNoYWxsb3dSZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgQ29tcEEgZnJvbSAnLi9Db21wQS52dWUnXG5pbXBvcnQgQ29tcEIgZnJvbSAnLi9Db21wQi52dWUnXG5cbmNvbnN0IGN1cnJlbnQgPSBzaGFsbG93UmVmKENvbXBBKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlbW9cIj5cbiAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJjdXJyZW50XCIgOnZhbHVlPVwiQ29tcEFcIiAvPiBBPC9sYWJlbD5cbiAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJjdXJyZW50XCIgOnZhbHVlPVwiQ29tcEJcIiAvPiBCPC9sYWJlbD5cbiAgICA8S2VlcEFsaXZlPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJjdXJyZW50XCI+PC9jb21wb25lbnQ+XG4gICAgPC9LZWVwQWxpdmU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0iLCJDb21wQS52dWUiOiI8c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBjb3VudCA9IHJlZigwKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHA+Q3VycmVudCBjb21wb25lbnQ6IEE8L3A+XG4gIDxzcGFuPmNvdW50OiB7eyBjb3VudCB9fTwvc3Bhbj5cbiAgPGJ1dHRvbiBAY2xpY2s9XCJjb3VudCsrXCI+KzwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cbiIsIkNvbXBCLnZ1ZSI6IjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5jb25zdCBtc2cgPSByZWYoJycpXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cD5DdXJyZW50IGNvbXBvbmVudDogQjwvcD5cbiAgPHNwYW4+TWVzc2FnZSBpczoge3sgbXNnIH19PC9zcGFuPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank" rel="noreferrer">在演练场中尝试一下</a></p></div><div class="options-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdD5cbmltcG9ydCBDb21wQSBmcm9tICcuL0NvbXBBLnZ1ZSdcbmltcG9ydCBDb21wQiBmcm9tICcuL0NvbXBCLnZ1ZSdcbiAgXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgQ29tcEEsIENvbXBCIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQ6ICdDb21wQSdcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZW1vXCI+XG4gICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiY3VycmVudFwiIHZhbHVlPVwiQ29tcEFcIiAvPiBBPC9sYWJlbD5cbiAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJjdXJyZW50XCIgdmFsdWU9XCJDb21wQlwiIC8+IEI8L2xhYmVsPlxuICAgIDxLZWVwQWxpdmU+XG4gICAgICA8Y29tcG9uZW50IDppcz1cImN1cnJlbnRcIj48L2NvbXBvbmVudD5cbiAgICA8L0tlZXBBbGl2ZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJcbiAgfVxufSIsIkNvbXBBLnZ1ZSI6IjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50OiAwXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cD5DdXJyZW50IGNvbXBvbmVudDogQTwvcD5cbiAgPHNwYW4+Y291bnQ6IHt7IGNvdW50IH19PC9zcGFuPlxuICA8YnV0dG9uIEBjbGljaz1cImNvdW50KytcIj4rPC9idXR0b24+XG48L3RlbXBsYXRlPlxuIiwiQ29tcEIudnVlIjoiPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHRlbXBsYXRlPlxuICA8cD5DdXJyZW50IGNvbXBvbmVudDogQjwvcD5cbiAgPHNwYW4+TWVzc2FnZSBpczoge3sgbXNnIH19PC9zcGFuPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank" rel="noreferrer">在演练场中尝试一下</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 <a href="/vue3-docs-zh-cn/guide/essentials/component-basics.html#dom-template-parsing-caveats">DOM 模板</a>中使用时，它应该被写为 <code>&lt;keep-alive&gt;</code>。</p></div><h2 id="include-exclude" tabindex="-1">包含/排除 <a class="header-anchor" href="#include-exclude" aria-hidden="true">#</a></h2><p><code>&lt;KeepAlive&gt;</code> 默认会缓存内部的所有组件实例，但我们可以通过 <code>include</code> 和 <code>exclude</code> prop 来定制该行为。这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 以英文逗号分隔的字符串 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a,b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 正则表达式 (需使用 `v-bind`) --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;/</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">/&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 数组 (需使用 `v-bind`) --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>它会根据组件的 <a href="/vue3-docs-zh-cn/api/options-misc.html#name"><code>name</code></a> 选项进行匹配，所以组件如果想要条件性地被 <code>KeepAlive</code> 缓存，就必须显式声明一个 <code>name</code> 选项。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 3.2.34 或以上的版本中，使用 <code>&lt;script setup&gt;</code> 的单文件组件会自动根据文件名生成对应的 <code>name</code> 选项，无需再手动声明。</p></div><h2 id="max-cached-instances" tabindex="-1">最大缓存实例数 <a class="header-anchor" href="#max-cached-instances" aria-hidden="true">#</a></h2><p>我们可以通过传入 <code>max</code> prop 来限制可被缓存的最大组件实例数。<code>&lt;KeepAlive&gt;</code> 的行为在指定了 <code>max</code> 后类似一个 <a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)" target="_blank" rel="noreferrer">LRU 缓存</a>：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">activeComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="lifecycle-of-cached-instance" tabindex="-1">缓存实例的生命周期 <a class="header-anchor" href="#lifecycle-of-cached-instance" aria-hidden="true">#</a></h2><p>当一个组件实例从 DOM 上移除但因为被 <code>&lt;KeepAlive&gt;</code> 缓存而仍作为组件树的一部分时，它将变为<strong>不活跃</strong>状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新<strong>被激活</strong>。</p><div class="composition-api"><p>一个持续存在的组件可以通过 <a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html#onactivated"><code>onActivated()</code></a> 和 <a href="/vue3-docs-zh-cn/api/composition-api-lifecycle.html#ondeactivated"><code>onDeactivated()</code></a> 注册相应的两个状态的生命周期钩子：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onActivated</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onDeactivated</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">onActivated</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 调用时机为首次挂载</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 以及每次从缓存中被重新插入时</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">onDeactivated</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 在从 DOM 上移除、进入缓存</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 以及组件卸载时调用</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></div><div class="options-api"><p>一个持续存在的组件可以通过 <a href="/vue3-docs-zh-cn/api/options-lifecycle.html#activated"><code>activated</code></a> 和 <a href="/vue3-docs-zh-cn/api/options-lifecycle.html#deactivated"><code>deactivated</code></a> 选项来注册相应的两个状态的生命周期钩子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">activated</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在首次挂载、</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 以及每次从缓存中被重新插入的时候调用</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deactivated</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在从 DOM 上移除、进入缓存</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 以及组件卸载时调用</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></div><p>请注意：</p><ul><li><p><span class="composition-api"><code>onActivated</code></span><span class="options-api"><code>activated</code></span> 在组件挂载时也会调用，并且 <span class="composition-api"><code>onDeactivated</code></span><span class="options-api"><code>deactivated</code></span> 在组件卸载时也会调用。</p></li><li><p>这两个钩子不仅适用于 <code>&lt;KeepAlive&gt;</code> 缓存的根组件，也适用于缓存树中的后代组件。</p></li></ul><hr><p><strong>参考</strong></p><ul><li><a href="/vue3-docs-zh-cn/api/built-in-components.html#keepalive"><code>&lt;KeepAlive&gt;</code> API 参考</a></li></ul>',20),x=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"包含/排除","slug":"include-exclude","link":"#include-exclude","children":[]},{"level":2,"title":"最大缓存实例数","slug":"max-cached-instances","link":"#max-cached-instances","children":[]},{"level":2,"title":"缓存实例的生命周期","slug":"lifecycle-of-cached-instance","link":"#lifecycle-of-cached-instance","children":[]}],"relativePath":"guide/built-ins/keep-alive.md"}'),Z=Object.assign({name:"guide/built-ins/keep-alive.md"},{setup:s=>(s,l)=>(a(),n("div",null,[X,y(h),B,y(h,{"use-KeepAlive":""}),G]))});export{x as __pageData,Z as default};
