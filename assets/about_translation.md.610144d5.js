import{_ as s,o as t,c as a,a as n}from"./app.f3eebbf7.js";const l=JSON.parse('{"title":"翻译说明","description":"","frontmatter":{"aside":"deep"},"headers":[{"level":2,"title":"翻译须知","slug":"翻译须知","link":"#翻译须知","children":[]},{"level":2,"title":"协作指南","slug":"协作指南","link":"#协作指南","children":[]},{"level":2,"title":"基本原则","slug":"基本原则","link":"#基本原则","children":[]},{"level":2,"title":"格式规范","slug":"格式规范","link":"#格式规范","children":[{"level":3,"title":"提交规范","slug":"提交规范","link":"#提交规范","children":[]},{"level":3,"title":"文档格式规范","slug":"文档格式规范","link":"#文档格式规范","children":[]}]},{"level":2,"title":"术语翻译参考","slug":"术语翻译参考","link":"#术语翻译参考","children":[]},{"level":2,"title":"工作流","slug":"工作流","link":"#工作流","children":[{"level":3,"title":"更新内容同步策略","slug":"更新内容同步策略","link":"#更新内容同步策略","children":[]},{"level":3,"title":"锚点链接的统一化","slug":"锚点链接的统一化","link":"#锚点链接的统一化","children":[]}]}],"relativePath":"about/translation.md"}'),e={name:"about/translation.md"},p=[n('<h1 id="翻译说明" tabindex="-1">翻译说明 <a class="header-anchor" href="#翻译说明" aria-hidden="true">#</a></h1><p>该中文文档翻译由 <a href="https://github.com/ShenQingchuan" target="_blank" rel="noreferrer">@ShenQingchuan</a> 个人发起，随后作为 Vue 官方认可的中文翻译仓库，以团队的形式进行官方维护。最新的代码仓库链接是：<a href="https://github.com/vuejs-translations/docs-zh-cn" target="_blank" rel="noreferrer">https://github.com/vuejs-translations/docs-zh-cn</a></p><h2 id="翻译须知" tabindex="-1">翻译须知 <a class="header-anchor" href="#翻译须知" aria-hidden="true">#</a></h2><p>请移步至官方仓库的 <a href="https://github.com/vuejs-translations/docs-zh-cn/wiki/%E7%BF%BB%E8%AF%91%E9%A1%BB%E7%9F%A5" target="_blank" rel="noreferrer">wiki 页面</a>查阅。</p><h2 id="协作指南" tabindex="-1">协作指南 <a class="header-anchor" href="#协作指南" aria-hidden="true">#</a></h2><p>请移步至官方仓库的 <a href="https://github.com/vuejs-translations/docs-zh-cn/wiki/%E5%8D%8F%E4%BD%9C%E6%8C%87%E5%8D%97" target="_blank" rel="noreferrer">wiki 页面</a>查阅。</p><blockquote><p>编写文档是一种换位思考的练习。我们并不是在描述客观现实，那是源代码已经做到了的。我们的工作是帮助塑造用户与 Vue 生态系统之间的关系。</p></blockquote><details><summary>原版翻译说明，仅供备忘和归档</summary><h2 id="基本原则" tabindex="-1">基本原则 <a class="header-anchor" href="#基本原则" aria-hidden="true">#</a></h2><p>翻译工作追求的无外乎 “信、达、雅” 三个字，因此我们总结了以下原则：</p><ol><li><p><strong>忠实原文，通俗易懂</strong>，保证正确是最基本的要求。此外，还应该尽可能将一些特定概念降维，使得入门级读者也能够流畅阅读。</p></li><li><p><strong>中文词汇优先，特殊概念次之</strong>：要尽可能地将文档中的英语单词译作读者好理解的词汇。</p><p>同时用词应尽可能地从前端开发领域已有的词汇中衍生。我们认为作为 Vue 文档的译者应承担这样一种职责：避免创建一套独立于标准 JavaScript 环境之外、Vue 专属的语境。</p><p>但也有例外的情况，某些英文单词我们倾向于选择不翻译、用原词。开发者常常与一部分英语单词打交道，许多英语单词甚至作为了开发框架或操作系统的专有名词，直接抛出这个单词也的确能够帮助用户更好的理解、锁定所讲的是什么概念。</p></li><li><p><strong>更符合中文的表述方式</strong>：我们必须正视英语和中文本身的差异与不同，由于表达方式和语法结构的区别，常常一个结构复杂的多重定语从句很难逐字逐词地直译成中文，翻译出的句子应符合母语者的叙述习惯，即尽可能避免英语式的倒装（哪怕讲述方式与作者原文有较大区别），表述尽可能口语化。最好的方式应该是将视线从单个句子中移出来，结合上下文先进行理解再用中文的习惯性表达将其重新复述出来。</p></li></ol><h2 id="格式规范" tabindex="-1">格式规范 <a class="header-anchor" href="#格式规范" aria-hidden="true">#</a></h2><h3 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-hidden="true">#</a></h3><p>可以参考 <a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">这个网站</a> 了解提交信息的既定书写格式：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">^-------------^  ^-------^</span></span>\n<span class="line"><span style="color:#A6ACCD;">|                |</span></span>\n<span class="line"><span style="color:#A6ACCD;">|                +-&gt; 主题。总结 commit 内容，用现在时书写。</span></span>\n<span class="line"><span style="color:#A6ACCD;">|</span></span>\n<span class="line"><span style="color:#A6ACCD;">+-------&gt; 目的: chore, docs, feat, fix, refactor, style, 或 test。&lt;scope&gt; 为可选项。</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">// 以下是 body 部分，这部分是可选的：</span></span>\n<span class="line"><span style="color:#A6ACCD;">  hash: (对应到官方英文文档的某次更新 commit hash)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  time: (由 `new Date().toLocaleString()` 生成的时间戳)</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>如果你贡献提交的目的并不是与官方英文文档同步内容相关，为 <code>chore</code> 或其他类型，body 部分可以省略。</li><li>body 部分的信息只是为了在特定情况下方便溯源。</li></ul><h4 id="释义" tabindex="-1">释义 <a class="header-anchor" href="#释义" aria-hidden="true">#</a></h4><ul><li>feat: (新功能，面向用户)</li><li>fix: (bug 修复，面向用户)</li><li>docs: (编辑文档)</li><li>style: (格式，如全角半角；对生产环境没有影响)</li><li>refactor: (比如重命名变量)</li><li>test: (加入缺少的测试，对生产环境没有影响)</li><li>chore: (更新依赖等，对生产环境没有影响)</li></ul><h3 id="文档格式规范" tabindex="-1">文档格式规范 <a class="header-anchor" href="#文档格式规范" aria-hidden="true">#</a></h3><h4 id="译注写法" tabindex="-1">译注写法 <a class="header-anchor" href="#译注写法" aria-hidden="true">#</a></h4><ol><li>在原文需要加译者注的位置添加角标：</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">... </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">sup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[[1]](#footnote-1)</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">sup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">sup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[[2]](#footnote-2)</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">sup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ...</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>在文章最末尾加入译者注的内容，格式如下：</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">small</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  __译者注__</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footnote-1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[1] ... </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footnote-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[2] ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footnote-3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[3] ...</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">small</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h4 id="标点符号" tabindex="-1">标点符号 <a class="header-anchor" href="#标点符号" aria-hidden="true">#</a></h4><ul><li>逗号、句号、分号、冒号、叹号、问号，统一使用全角字符：，。；：！？</li><li>破折号使用：——</li><li>引号统一使用 “ ” 和 ‘ ’</li><li>括号统一使用全角括号 （）</li><li>非注释部分的代码除外，保留英文标点符号。</li></ul><h4 id="内联代码或代码关键字" tabindex="-1">内联代码或代码关键字 <a class="header-anchor" href="#内联代码或代码关键字" aria-hidden="true">#</a></h4><ul><li>务必用反引号（即英文输入法下，按键盘上 Tab 键上方的那个键）将内容括起来。</li><li>包括代码注释中出现代码或代码关键字时，也要括起来。</li></ul><h4 id="空格的使用" tabindex="-1">空格的使用 <a class="header-anchor" href="#空格的使用" aria-hidden="true">#</a></h4><ul><li><p>英文单词和英文单词之间要有一个空格 <code>something in English</code></p></li><li><p>中文和英文单词之间要有一个空格 <code>中文当中有 something 是英文</code></p></li><li><p>英文单词和标点符号之间没有空格 <code>这里是一句中文，something 又是英文</code></p></li></ul><h4 id="链接、斜体、粗体与行内代码等" tabindex="-1">链接、斜体、粗体与行内代码等 <a class="header-anchor" href="#链接、斜体、粗体与行内代码等" aria-hidden="true">#</a></h4><p>对于 Markdown 中上述的行内简单样式，为了保证 Vitepress 中良好的渲染效果，我们提倡在文档中使用如下的格式：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 链接 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">链接</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">https://github.com/vitejs/vite</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 指向 Vite 官方仓库</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 加粗 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;font-weight:bold;">**</span><span style="color:#F07178;font-weight:bold;">加粗</span><span style="color:#89DDFF;font-weight:bold;">**</span><span style="color:#A6ACCD;"> 的文字</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 斜体 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;font-style:italic;">_</span><span style="color:#F07178;font-style:italic;">斜体</span><span style="color:#89DDFF;font-style:italic;">_</span><span style="color:#A6ACCD;"> 的文字 &lt;!-- Good --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;font-style:italic;">_</span><span style="color:#F07178;font-style:italic;">斜体</span><span style="color:#89DDFF;font-style:italic;">_</span><span style="color:#A6ACCD;"> 的文字 &lt;!-- 不推荐，尽在下划线效果不可用时作为替代使用 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 行内代码 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 行内代码</span></span>\n<span class="line"><span style="color:#A6ACCD;">假如后面就是标点符号 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">：</span></span>\n<span class="line"></span></code></pre></div><p>你可能已经注意到，默认情况下，在两端我们都加上了空格。</p><p><strong>此处的某些规则可能暂时和旧有的 <a href="https://github.com/vuejs/cn.vuejs.org/wiki" target="_blank" rel="noreferrer">Vue.js 中文文档的风格</a> 不太一致</strong>，如果你曾参与过 Vue 中文文档相关工作，可能与你的习惯有一定区别。</p><p>这是为了保证文档视图中不会出现字符靠太近而黏合的问题。</p><p>关于文档中的链接，针对以下两种 Markdown 书写：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 链接前后带空格  --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">Vite 支持了一套 </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">通用插件 API</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./api-plugin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 扩展了 Rollup 的插件接口</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 链接前后不带空格 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">Vite 支持了一套</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">通用插件 API</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./api-plugin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">扩展了 Rollup 的插件接口</span></span>\n<span class="line"></span></code></pre></div><p>Vitepress 和 Vuepress 中对以上两种写法的渲染视觉效果为：</p><p><strong>链接前后带空格</strong></p><p><img src="/vue3-docs-zh-cn/images/link-with-around-spaces.png" alt="链接前后带空格"></p><p><strong>链接前后不带空格</strong></p><p><img src="/vue3-docs-zh-cn/images/link-without-around-spaces.png" alt="链接前后不带空格"></p><p>不带空格的形式 与 带空格相比，没有那么突出。</p><p>同样这类情况还包括 Markdown 中的斜体字：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">这是一个_斜体_尝试 &lt;!-- Vitepress 和 Vuepress 中无效！  --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个</span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#F07178;font-style:italic;">斜体</span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">尝试 &lt;!-- 前后无空格 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">这是一个 </span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#F07178;font-style:italic;">斜体</span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;"> 尝试 &lt;!-- 前后有空格 --&gt;</span></span>\n<span class="line"></span></code></pre></div><p>下面是效果，不带空格的情况看上去中文字体的笔画之间会接在一起，变得很拥挤，观感较差。</p><p><img src="/vue3-docs-zh-cn/images/italic-demo.png" alt="斜体尝试"></p><h4 id="关于加粗和斜体格式的约定" tabindex="-1">关于加粗和斜体格式的约定 <a class="header-anchor" href="#关于加粗和斜体格式的约定" aria-hidden="true">#</a></h4><p>根据 <a href="https://github.github.com/gfm/#emphasis-and-strong-emphasis" target="_blank" rel="noreferrer">GitHub Flavored Markdown Spec</a>，用成对的星号或下划线都可以用来代表加粗或斜体，但是使用下划线的时候存在更多的特殊条件限制，例如：</p><blockquote><p><code>5*6*78</code> → <code>&lt;p&gt;5&lt;em&gt;6&lt;/em&gt;78&lt;/p&gt;</code> <a href="https://github.github.com/gfm/#example-346" target="_blank" rel="noreferrer">https://github.github.com/gfm/#example-346</a></p><p><code>5_6_78</code> → <code>&lt;p&gt;5_6_78&lt;/p&gt;</code> <a href="https://github.github.com/gfm/#example-351" target="_blank" rel="noreferrer">https://github.github.com/gfm/#example-351</a></p></blockquote><p>经过讨论，考虑到 GFM 的规范以及中文的特殊情况，决定：</p><ul><li>中文翻译统一使用星号来标注加粗和斜体，而不是使用下划线，同时尊重英文版自身的用法。</li><li>仍然不能正确渲染的地方，允许适当调整包含或不包含加粗或斜体部分两侧的标点符号。参见 <a href="https://github.com/vuejs/composition-api-rfc/pull/30/files" target="_blank" rel="noreferrer">这个例子</a>。</li><li>仍然不能正确渲染的地方，手动使用 <code>&lt;strong&gt;</code> 或 <code>&lt;em&gt;</code> 标记。</li></ul><h2 id="术语翻译参考" tabindex="-1">术语翻译参考 <a class="header-anchor" href="#术语翻译参考" aria-hidden="true">#</a></h2><table><thead><tr><th>英文</th><th>建议翻译</th><th>备注</th></tr></thead><tbody><tr><td>property</td><td>属性</td><td>组件的属性（数据、计算属性等）</td></tr><tr><td>attribute</td><td><em>不翻译</em></td><td>特指 HTML 元素上的属性</td></tr><tr><td>getter</td><td><em>一般不翻译</em></td><td>计算属性中作计算函数</td></tr><tr><td>setter</td><td><em>一般不翻译</em></td><td>计算属性中作设置函数</td></tr><tr><td>prop</td><td><em>不翻译</em></td><td></td></tr><tr><td>ref</td><td><em>不翻译</em></td><td></td></tr><tr><td>feature/functionality</td><td>功能</td><td></td></tr><tr><td>directive</td><td>指令</td><td></td></tr><tr><td>mixin</td><td>混入</td><td></td></tr><tr><td>listen/listener</td><td>监听/监听器</td><td></td></tr><tr><td>observe/observer</td><td>侦听/侦听器</td><td></td></tr><tr><td>watch/watcher</td><td>侦听/侦听器</td><td></td></tr><tr><td>normalize (HTML code, ...)</td><td>规范化</td><td></td></tr><tr><td>standardize</td><td>标准化</td><td></td></tr><tr><td>fire/trigger (事件)</td><td>触发</td><td></td></tr><tr><td>emit (某个值或事件)</td><td>抛出</td><td></td></tr><tr><td>queue (v.)</td><td>把……加入队列</td><td></td></tr><tr><td>workaround (n.)</td><td>变通办法</td><td></td></tr><tr><td>workaround (v.)</td><td>绕过</td><td></td></tr><tr><td>convention</td><td>约定</td><td></td></tr><tr><td>parse</td><td>解析</td><td></td></tr><tr><td>stringify</td><td>字符串化</td><td></td></tr><tr><td>side effect</td><td>副作用</td><td></td></tr><tr><td>declarative</td><td>声明式</td><td></td></tr><tr><td>imperative</td><td>命令式</td><td></td></tr><tr><td>handler</td><td>处理函数</td><td></td></tr><tr><td>you</td><td>你 (而不用 “您”)</td><td></td></tr><tr><td>computed</td><td>计算属性</td><td></td></tr><tr><td>computed property</td><td>计算属性</td><td></td></tr><tr><td>guard</td><td>守卫</td><td></td></tr><tr><td>hook</td><td>钩子</td><td></td></tr><tr><td>selector</td><td>选择器</td><td></td></tr><tr><td>truthy</td><td>真值</td><td>需加 MDN 的解释作为译注</td></tr><tr><td>falsy</td><td>假值</td><td>需加 MDN 的解释作为译注</td></tr><tr><td>mutate/mutation</td><td>变更</td><td></td></tr><tr><td>immutable</td><td>不可变</td><td></td></tr><tr><td>mutable</td><td>可变</td><td></td></tr></tbody></table><ul><li>MDN - <code>truthy</code> → <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/Truthy</a></li><li>MDN - <code>falsy</code> → <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/Falsy</a></li></ul><h2 id="工作流" tabindex="-1">工作流 <a class="header-anchor" href="#工作流" aria-hidden="true">#</a></h2><h3 id="更新内容同步策略" tabindex="-1">更新内容同步策略 <a class="header-anchor" href="#更新内容同步策略" aria-hidden="true">#</a></h3><p>此中文文档由 <a href="https://docschina.org/" target="_blank" rel="noreferrer">印记中文</a> 团队进行翻译，它们也是 Vite 官方中文文档背后的翻译维护团队。</p><p><a href="https://github.com/QC-L" target="_blank" rel="noreferrer">QC-L</a> 曾在 Vue 文档的讨论区提出过这套 <a href="https://github.com/vuejs/docs-next-zh-cn/discussions/522#discussioncomment-779521" target="_blank" rel="noreferrer">中英文档同步工作流</a>，这也是 Vite 官方中文文档正在使用的一套工作流。</p><ul><li>保留英文文档的原始 commit 记录，以保证可以对后续的更新进行再翻译、合并</li><li>由于 Vue 文档以 Markdown 书写，每一行成一个自然段。因此在 Markdown 文档中原则上应该保证中英文行号一一对应，以保证后续更新时位置不发生错乱</li><li>由机器人每日定时从英文文档仓库同步新的提交，并生成 Pull Request 交由翻译团队 Review、翻译并最终合入中文文档</li></ul><h3 id="锚点链接的统一化" tabindex="-1">锚点链接的统一化 <a class="header-anchor" href="#锚点链接的统一化" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">插件支持</p><p>我们提供了一个包含此项功能的 <a href="https://marketplace.visualstudio.com/items?itemName=shenqingchuan.vue-docs-tr-helper" target="_blank" rel="noreferrer">Vue 官方文档翻译助手插件</a>，你可以在 VSCode 中安装，并遵照 README 的指引来使用。</p></div><p>在 Markdown 文档中 <code>[title](link)</code> 形式的链接非常常用，而 Vue 文档中大量使用了这一语法，用来作章节的跳转。</p><p>链接中有时还会带有锚点（以 <code>#</code> 作前缀）用来定位到页面的对应位置，例如 <code>[props 大小写格式](/guide/components/props.html#prop-name-casing)</code>。</p><p>但是在 VitePress 中，由于锚点是对应 Markdown 内容中的 “标题行” 的，因此若改动了英文内容的标题行，别处引用此处的锚点就是失效了：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 英文文档中该标题行为 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Props name casing</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 中文文档将标题翻译为 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Props 大小写格式</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 此时这个链接在页面上无法正常跳转 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">props 大小写格式</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/guide/components/props.html#prop-name-casing</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div><p>若将链接中的锚点也改为中文内容的确可以暂时解决问题，但若后续该标题有改动，又需要修改所有引用了该锚点的地方，可维护性较差。</p><p>因此我们提供了一种特殊的锚点标记：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 标记的内容就是原来的锚点 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Props 大小写格式 {#props-name-casing}</span></span>\n<span class="line"></span></code></pre></div><p>我们会为 VitePress 提供处理这个标记的逻辑，保证它不会在页面上显示出来。</p><p>但也有需要注意的例外情况：若按上面的方式为一篇文章的所有标题行都生成了标记，但文章中出现了两个相同的标记，比如 “类和 CSS 样式” 章节中的 “绑定对象” 小节，可以为其加上数字标记，保证其在文章中的唯一性。</p><p>此外，由于文章的总标题也被加上了锚点标记，导致在开发环境下，浏览器的标签页上会看到标记。但在构建发布时，我们运行了一个脚本，为文档的 frontmatter 中添加了不含标记的 <code>title</code>，因此读者将不会看到该标记。</p></details>',8)];const o=s(e,[["render",function(s,n,l,e,o,r){return t(),a("div",null,p)}]]);export{l as __pageData,o as default};
