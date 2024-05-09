import{_ as a,H as s,G as i,am as d}from"./chunks/framework.2MLJsAWF.js";const E=JSON.parse('{"title":"CSS控制虚线间距虚线长度","description":"CSS控制虚线间距虚线长度","frontmatter":{"title":"CSS控制虚线间距虚线长度","description":"CSS控制虚线间距虚线长度"},"headers":[],"relativePath":"web/basics/dashedLine.md","filePath":"web/basics/dashedLine.md"}'),t={name:"web/basics/dashedLine.md"},n=d(`<h1 id="css控制虚线间距虚线长度" tabindex="-1" data-v-ffd426b6>CSS控制虚线间距虚线长度 <a class="header-anchor" href="#css控制虚线间距虚线长度" aria-label="Permalink to &quot;CSS控制虚线间距虚线长度&quot;" data-v-ffd426b6>​</a></h1><h2 id="示例" tabindex="-1" data-v-ffd426b6>示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;" data-v-ffd426b6>​</a></h2><div class="info custom-block" data-v-ffd426b6><p class="custom-block-title" data-v-ffd426b6>源代码</p><div class="dotted_line" data-v-ffd426b6></div><div class="language-css vp-adaptive-theme" data-v-ffd426b6><button title="Copy Code" class="copy" data-v-ffd426b6></button><span class="lang" data-v-ffd426b6>css</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ffd426b6><code data-v-ffd426b6><span class="line" data-v-ffd426b6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>{</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>26</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 28</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>;</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>498</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>;</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 30</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>;</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>;</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>(</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>    to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>,</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>    #c2daff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 35</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>,</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>    rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>%</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>  ); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ffd426b6>/* 35%设置虚线点x轴上的长度 */</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  background-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ffd426b6>/* top配置上边框位置的虚线 */</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ffd426b6>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ffd426b6>/* 第一个参数设置虚线点的间距；第二个参数设置虚线点y轴上的长度 */</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>  background-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ffd426b6>repeat-x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>;</span></span>
<span class="line" data-v-ffd426b6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ffd426b6>}</span></span></code></pre></div></div>`,3),h=[n];function k(f,p,l,e,b,r){return i(),s("div",null,h)}const g=a(t,[["render",k],["__scopeId","data-v-ffd426b6"]]);export{E as __pageData,g as default};
