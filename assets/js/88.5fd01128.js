(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{592:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"处理边界情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理边界情况"}},[t._v("#")]),t._v(" 处理边界情况")]),t._v(" "),a("blockquote",[a("p",[t._v("该页面假设你已经阅读过了"),a("RouterLink",{attrs:{to:"/guide/component-basics.html"}},[t._v("组件基础")]),t._v("。如果你还对组件不太了解，推荐你先阅读它。")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("这里记录的都是和处理边界情况有关的功能，即一些需要对 Vue 的规则做一些小调整的特殊情况。不过注意这些功能都是有劣势或危险的场景的。我们会在每个案例中注明，所以当你使用每个功能的时候请稍加留意。")])]),t._v(" "),a("h2",{attrs:{id:"控制更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制更新"}},[t._v("#")]),t._v(" 控制更新")]),t._v(" "),a("p",[t._v("得益于其响应性系统，Vue 总是知道何时更新 (如果你使用正确的话)。但是，在某些边缘情况下，你可能希望强制更新，尽管事实上没有任何响应式数据发生更改。还有一些情况下，你可能希望防止不必要的更新。")]),t._v(" "),a("h3",{attrs:{id:"强制更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制更新"}},[t._v("#")]),t._v(" 强制更新")]),t._v(" "),a("p",[t._v("如果你发现自己需要在 Vue 中强制更新，在 99.99%的情况下，你在某个地方犯了错误。例如，你可能依赖于 Vue 响应性系统未跟踪的状态，比如在组件创建之后添加了 "),a("code",[t._v("data")]),t._v(" 属性。")]),t._v(" "),a("p",[t._v("但是，如果你已经排除了上述情况，并且发现自己处于这种非常罕见的情况下，必须手动强制更新，那么你可以使用 "),a("RouterLink",{attrs:{to:"/api/instance-methods.html#forceupdate"}},[a("code",[t._v("$forceUpdate")])]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"低级静态组件与-v-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低级静态组件与-v-once"}},[t._v("#")]),t._v(" 低级静态组件与 "),a("code",[t._v("v-once")])]),t._v(" "),a("p",[t._v("在 Vue 中渲染纯 HTML 元素的速度非常快，但有时你可能有一个包含"),a("strong",[t._v("很多")]),t._v("静态内容的组件。在这些情况下，可以通过向根元素添加 "),a("code",[t._v("v-once")]),t._v(" 指令来确保只对其求值一次，然后进行缓存，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'terms-of-service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"language-html"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Terms of Service"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      ... a lot of static content ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("再次提醒，不要过度使用这种模式。虽然在需要渲染大量静态内容的极少数情况下使用这种模式会很方便，但除非你注意到先前的渲染速度很慢，否则就没有必要这样做。另外，过度使用这种模式可能会在以后引起很多混乱。例如，假设另一个开发人员不熟悉 "),a("code",[t._v("v-once")]),t._v(" 或者只是在模板中遗漏了它。他们可能会花上几个小时来弄清楚为什么模板没有正确更新。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);