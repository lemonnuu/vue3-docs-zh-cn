import{_ as s,o as n,c as a,a as e}from"./app.f3eebbf7.js";const l=JSON.parse('{"title":"搭配 TypeScript 使用 Vue","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"项目配置","slug":"project-setup","link":"#project-setup","children":[{"level":3,"title":"总览","slug":"overview","link":"#overview","children":[]},{"level":3,"title":"IDE 支持","slug":"ide-support","link":"#ide-support","children":[]},{"level":3,"title":"配置 tsconfig.json","slug":"configuring-tsconfig-json","link":"#configuring-tsconfig-json","children":[]},{"level":3,"title":"Volar Takeover 模式","slug":"volar-takeover-mode","link":"#volar-takeover-mode","children":[]},{"level":3,"title":"关于 Vue CLI 和 ts-loader","slug":"note-on-vue-cli-and-ts-loader","link":"#note-on-vue-cli-and-ts-loader","children":[]}]},{"level":2,"title":"常见使用说明","slug":"general-usage-notes","link":"#general-usage-notes","children":[{"level":3,"title":"defineComponent()","slug":"definecomponent","link":"#definecomponent","children":[]},{"level":3,"title":"在单文件组件中的用法","slug":"usage-in-single-file-components","link":"#usage-in-single-file-components","children":[]},{"level":3,"title":"模板中的 TypeScript","slug":"typescript-in-templates","link":"#typescript-in-templates","children":[]}]},{"level":2,"title":"特定 API 的使用指南","slug":"api-specific-recipes","link":"#api-specific-recipes","children":[]}],"relativePath":"guide/typescript/overview.md"}'),p={name:"guide/typescript/overview.md"},o=[e('<h1 id="using-vue-with-typescript" tabindex="-1">搭配 TypeScript 使用 Vue <a class="header-anchor" href="#using-vue-with-typescript" aria-hidden="true">#</a></h1><p>像 TypeScript 这样的类型系统可以在编译时通过静态分析检测出很多常见错误。这减少了生产环境中的运行时错误，也让我们在重构大型项目的时候更有信心。通过 IDE 中基于类型的自动补全，TypeScript 还改善了开发体验和效率。</p><p>Vue 本身就是用 TypeScript 编写的，并对 TypeScript 提供了一等公民的支持。所有的 Vue 官方库都自带了类型声明文件，开箱即用。</p><h2 id="project-setup" tabindex="-1">项目配置 <a class="header-anchor" href="#project-setup" aria-hidden="true">#</a></h2><p><a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer"><code>create-vue</code></a>，即官方的项目脚手架工具，提供了搭建基于 <a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 且 TypeScript 就绪的 Vue 项目的选项。</p><h3 id="overview" tabindex="-1">总览 <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h3><p>在基于 Vite 的配置中，开发服务器和打包器将只会对 TypeScript 文件执行语法转译，而不会执行任何类型检查，这保证了 Vite 开发服务器在使用 TypeScript 时也能始终保持飞快的速度。</p><ul><li><p>在开发阶段，我们推荐你依赖一个好的 <a href="#ide-support">IDE 配置</a>来获取即时的类型错误反馈。</p></li><li><p>对于单文件组件，你可以使用工具 <a href="https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc" target="_blank" rel="noreferrer"><code>vue-tsc</code></a> 在命令行检查类型和生成类型声明文件。<code>vue-tsc</code> 是对 TypeScript 自身命令行界面 <code>tsc</code> 的一个封装。它的工作方式基本和 <code>tsc</code> 一致。除了 TypeScript 文件，它还支持 Vue 的单文件组件。你可以在开启 Vite 开发服务器的同时以侦听模式运行 <code>vue-tsc</code>，或是使用 <a href="https://vite-plugin-checker.netlify.app/" target="_blank" rel="noreferrer">vite-plugin-checker</a> 这样在另一个 worker 线程里做静态检查的插件。</p></li><li><p>Vue CLI 也提供了对 TypeScript 的支持，但是已经不推荐了。详见<a href="#note-on-vue-cli-and-ts-loader">下方的说明</a>。</p></li></ul><h3 id="ide-support" tabindex="-1">IDE 支持 <a class="header-anchor" href="#ide-support" aria-hidden="true">#</a></h3><ul><li><p>强烈推荐 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> (VSCode)，因为它对 TypeScript 有着很好的内置支持。</p><ul><li><p><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Volar</a> 是官方的 VSCode 扩展，提供了 Vue 单文件组件中的 TypeScript 支持，还伴随着一些其他非常棒的特性。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Volar 取代了我们之前为 Vue 2 提供的官方 VSCode 扩展 <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a>。如果你之前已经安装了 Vetur，请确保在 Vue 3 的项目中禁用它。</p></div></li><li><p><a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">TypeScript Vue Plugin</a> 用于支持在 TS 中 import <code>*.vue</code> 文件。</p></li></ul></li><li><p><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noreferrer">WebStorm</a> 对 TypeScript 和 Vue 也都提供了开箱即用的支持。其他的 JetBrains IDE 也同样可以通过一个<a href="https://plugins.jetbrains.com/plugin/9442-vue-js" target="_blank" rel="noreferrer">免费插件</a>支持。</p></li></ul><h3 id="configuring-tsconfig-json" tabindex="-1">配置 <code>tsconfig.json</code> <a class="header-anchor" href="#configuring-tsconfig-json" aria-hidden="true">#</a></h3><p>通过 <code>create-vue</code> 搭建的项目包含了预先配置好的 <code>tsconfig.json</code>。其底层配置抽象于 <a href="https://github.com/vuejs/tsconfig" target="_blank" rel="noreferrer"><code>@vue/tsconfig</code></a> 包中。在项目内我们使用 <a href="https://www.typescriptlang.org/docs/handbook/project-references.html" target="_blank" rel="noreferrer">Project References</a> 来确保运行在不同环境下的代码的类型正确 (比如应用代码和测试代码应该有不同的全局变量)。</p><p>手动配置 <code>tsconfig.json</code> 时，请留意以下选项：</p><ul><li><p><a href="https://www.typescriptlang.org/tsconfig#isolatedModules" target="_blank" rel="noreferrer"><code>compilerOptions.isolatedModules</code></a> 应当设置为 <code>true</code>，因为 Vite 使用 <a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">esbuild</a> 来转译 TypeScript，并受限于单文件转译的限制。</p></li><li><p>如果你正在使用选项式 API，需要将 <a href="https://www.typescriptlang.org/tsconfig#strict" target="_blank" rel="noreferrer"><code>compilerOptions.strict</code></a> 设置为 <code>true</code> (或者至少开启 <a href="https://www.typescriptlang.org/tsconfig#noImplicitThis" target="_blank" rel="noreferrer"><code>compilerOptions.noImplicitThis</code></a>，它是 <code>strict</code> 模式的一部分)，才可以获得对组件选项中 <code>this</code> 的类型检查。否则 <code>this</code> 会被认为是 <code>any</code>。</p></li><li><p>如果你在构建工具中配置了路径解析别名，例如 <code>@/*</code> 这个别名被默认配置在了 <code>create-vue</code> 项目中，你需要通过 <a href="https://www.typescriptlang.org/tsconfig#paths" target="_blank" rel="noreferrer"><code>compilerOptions.paths</code></a> 选项为 TypeScript 再配置一遍。</p></li></ul><p>参考：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank" rel="noreferrer">官方 TypeScript 编译选项文档</a></li><li><a href="https://esbuild.github.io/content-types/#typescript-caveats" target="_blank" rel="noreferrer">esbuild TypeScript 编译注意事项</a></li></ul><h3 id="volar-takeover-mode" tabindex="-1">Volar Takeover 模式 <a class="header-anchor" href="#volar-takeover-mode" aria-hidden="true">#</a></h3><blockquote><p>这一章节仅针对 VSCode + Volar。</p></blockquote><p>为了让 Vue 单文件组件和 TypeScript 一起工作，Volar 创建了一个针对 Vue 的 TS 语言服务实例，将其用于 Vue 单文件组件。同时，普通的 TS 文件依然由 VSCode 内置的 TS 语言服务来处理。这也是为什么我们需要安装 <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">TypeScript Vue Plugin</a> 来支持在 TS 文件中引入 Vue 单文件组件。这套默认设置能够工作，但在每个项目里我们都运行了两个语言服务实例：一个来自 Volar，一个来自 VSCode 的内置服务。这在大型项目里可能会带来一些性能问题。</p><p>为了优化性能，Volar 提供了一个叫做“Takeover 模式”的功能。在这个模式下，Volar 能够使用一个 TS 语言服务实例同时为 Vue 和 TS 文件提供支持。</p><p>要开启 Takeover 模式，你需要执行以下步骤来<strong>在你的项目的工作空间中</strong>禁用 VSCode 的内置 TS 语言服务：</p><ol><li>在当前项目的工作空间下，用 <code>Ctrl + Shift + P</code> (macOS：<code>Cmd + Shift + P</code>) 唤起命令面板。</li><li>输入 <code>built</code>，然后选择“Extensions：Show Built-in Extensions”。</li><li>在插件搜索框内输入 <code>typescript</code> (不要删除 <code>@builtin</code> 前缀)。</li><li>点击“TypeScript and JavaScript Language Features”右下角的小齿轮，然后选择“Disable (Workspace)”。</li><li>重新加载工作空间。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。</li></ol><img src="/vue3-docs-zh-cn/assets/takeover-mode.54f7bbf6.png" width="590" height="426" style="margin:0px auto;border-radius:8px;"><h3 id="note-on-vue-cli-and-ts-loader" tabindex="-1">关于 Vue CLI 和 <code>ts-loader</code> <a class="header-anchor" href="#note-on-vue-cli-and-ts-loader" aria-hidden="true">#</a></h3><p>像 Vue CLI 这样的基于 webpack 搭建的项目，通常是在模块编译的过程中顺道执行类型检查，例如使用 <code>ts-loader</code>。然而这并不是一个理想的解决方案，因为类型系统需要了解整个模块关系才能执行类型检查。loader 中只适合单个模块的编译，并不做适合需要全局信息的工作。这导致了下面的问题：</p><ul><li><p><code>ts-loader</code> 只能对在它之前的 loader 编译转换后的代码执行类型检查，这和我们在 IDE 或 <code>vue-tsc</code> 中看到的基于源代码的错误提示并不一致。</p></li><li><p>类型检查可能会很慢。当它和代码转换在相同的线程/进程中执行时，它会显著影响整个应用的构建速度。</p></li><li><p>我们已经在 IDE 中通过单独的进程运行着类型检查了，却还要在构建流程中执行类型检查导致降低开发体验，这似乎不太划算。</p></li></ul><p>如果你正通过 Vue CLI 使用 Vue 3 和 TypeScript，我们强烈建议你迁移到 Vite。我们也在为 CLI 开发仅执行 TS 语法转译的选项，以允许你切换至 <code>vue-tsc</code> 来执行类型检查。</p><h2 id="general-usage-notes" tabindex="-1">常见使用说明 <a class="header-anchor" href="#general-usage-notes" aria-hidden="true">#</a></h2><h3 id="definecomponent" tabindex="-1"><code>defineComponent()</code> <a class="header-anchor" href="#definecomponent" aria-hidden="true">#</a></h3><p>为了让 TypeScript 正确地推导出组件选项内的类型，我们需要通过 <a href="/vue3-docs-zh-cn/api/general.html#definecomponent"><code>defineComponent()</code></a> 这个全局 API 来定义组件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 启用了类型推导</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">msg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 类型：string | undefined</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 类型：string</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 类型：number</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>当没有结合 <code>&lt;script setup&gt;</code> 使用组合式 API 时，<code>defineComponent()</code> 也支持对传递给 <code>setup()</code> 的 prop 的推导：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 启用了类型推导</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 类型：string | undefined</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>参考：</p><ul><li><a href="/vue3-docs-zh-cn/api/general.html#note-on-webpack-treeshaking">webpack Treeshaking 的注意事项</a></li><li><a href="https://github.com/vuejs/core/blob/main/test-dts/defineComponent.test-d.tsx" target="_blank" rel="noreferrer">对 <code>defineComponent</code> 的类型测试</a></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>defineComponent()</code> 也支持对纯 JavaScript 编写的组件进行类型推导。</p></div><h3 id="usage-in-single-file-components" tabindex="-1">在单文件组件中的用法 <a class="header-anchor" href="#usage-in-single-file-components" aria-hidden="true">#</a></h3><p>要在单文件组件中使用 TypeScript，需要在 <code>&lt;script&gt;</code> 标签上加上 <code>lang=&quot;ts&quot;</code> 的 attribute。当 <code>lang=&quot;ts&quot;</code> 存在时，所有的模板内表达式都将享受到更严格的类型检查。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 启用了类型检查和自动补全 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  {{ count.toFixed(2) }}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><code>lang=&quot;ts&quot;</code> 也可以用于 <code>&lt;script setup&gt;</code>：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 启用了 TypeScript</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 启用了类型检查和自动补全 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  {{ count.toFixed(2) }}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="typescript-in-templates" tabindex="-1">模板中的 TypeScript <a class="header-anchor" href="#typescript-in-templates" aria-hidden="true">#</a></h3><p>在使用了 <code>&lt;script lang=&quot;ts&quot;&gt;</code> 或 <code>&lt;script setup lang=&quot;ts&quot;&gt;</code> 后，<code>&lt;template&gt;</code> 在绑定表达式中也支持 TypeScript。这对需要在模板表达式中执行类型转换的情况下非常有用。</p><p>这里有一个假想的例子：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 出错，因为 x 可能是字符串 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  {{ x.toFixed(2) }}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>可以使用内联类型强制转换解决此问题：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">  {{ (x as number).toFixed(2) }}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果正在使用 Vue CLI 或基于 webpack 的配置，支持模板内表达式的 TypeScript 需要 <code>vue-loader@^16.8.0</code>。</p></div><h2 id="api-specific-recipes" tabindex="-1">特定 API 的使用指南 <a class="header-anchor" href="#api-specific-recipes" aria-hidden="true">#</a></h2><ul><li><a href="./composition-api.html">TS 与组合式 API</a></li><li><a href="./options-api.html">TS 与选项式 API</a></li></ul>',50)];const t=s(p,[["render",function(s,e,l,p,t,c){return n(),a("div",null,o)}]]);export{l as __pageData,t as default};
