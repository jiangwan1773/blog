import{a as u}from"./chunks/theme.C1mTzYq5.js";import{_ as A,f as v,H as E,k as g,N as y,U as h,F,a1 as C,al as D,a0 as B,G as f,K as k,L as m,O as _,V as b,W as x}from"./chunks/framework.Dt0boiFn.js";const c=["jpg","jpeg","png","gif"],o=".jpg、.jpeg、.png、.gif";function I(){return new Promise((i,a)=>{j({multiple:!0,accept:"image/*",typeArr:c}).then(s=>{w(s,c)?i(s):(u.info(`上传文件类型需满足${o}`),a(`上传文件类型需满足${o}`))}).catch(s=>{a(s)})})}function j(i={}){return new Promise((a,s)=>{const d={accept:"*",typeArr:[],multiple:!1,size:10240,limit:5,...i},t=document.createElement("input");t.type="file",t.multiple=d.multiple,t.accept=d.accept,t.style.width="0",t.style.height="0",document.body.appendChild(t),t.click(),t.oninput=p=>{const n=[...p.target.files];L(n,d).then(()=>{a(n)}).catch(l=>{u.error(l),s(l)})},window.addEventListener("focus",()=>{setTimeout(()=>{t.value||(document.body.removeChild(t),s("用户取消上传"))},500)},{once:!0})})}function w(i,a=[]){const s=Array.from(i);let d=[];s.forEach(n=>{d.push(P(n))});const t=d.filter(n=>a.includes(n));return d.length===t.length}function P(i){var a;return(a=i.name.split(".")[i.name.split(".").length-1])==null?void 0:a.toLowerCase()}function L(i,a){return new Promise((s,d)=>{if(i.length>a.limit)return d(`上传数量超过${a.limit}个`);s("校验通过")})}const r=i=>(b("data-v-a7d3092f"),i=i(),x(),i),T=r(()=>h("h1",{id:"函数式封装上传图片组件",tabindex:"-1"},[k("函数式封装上传图片组件 "),h("a",{class:"header-anchor",href:"#函数式封装上传图片组件","aria-label":'Permalink to "函数式封装上传图片组件"'},"​")],-1)),V=r(()=>h("blockquote",null,[h("p",null,[k("Vue3 + ts函数式封装支持 "),h("code",null,"函数式｜组件"),k(" 两种使用方式")])],-1)),$=r(()=>h("h2",{id:"演示",tabindex:"-1"},[k("演示 "),h("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1)),S={class:"for-box"},M=["src"],N=D("",4),Y=JSON.parse('{"title":"函数式封装上传图片组件","description":"在vue中使用函数式封装上传图片组件","frontmatter":{"title":"函数式封装上传图片组件","description":"在vue中使用函数式封装上传图片组件"},"headers":[],"relativePath":"web/vue/uploadImage/index.md","filePath":"web/vue/uploadImage/index.md","lastUpdated":1715271843000}'),G={name:"web/vue/uploadImage/index.md"},O=Object.assign(G,{setup(i){const a=v([]),s=v(!1);function d(){s.value=!0,I().then(p=>{const n=[];p.forEach(l=>{const e=URL.createObjectURL(l);n.push(e)}),a.value=[...a.value,...n]}).finally(()=>{s.value=!1})}function t(){a.value.length=0}return(p,n)=>{const l=B("a-button");return f(),E("div",null,[T,V,$,g(l,{type:"primary",onClick:d,loading:s.value,style:{"margin-right":"10px"}},{default:y(()=>[k(m(s.value?"上传中...":"上传"),1)]),_:1},8,["loading"]),g(l,{type:"primary",onClick:t},{default:y(()=>[k("清空图片")]),_:1}),h("div",S,[(f(!0),E(F,null,C(a.value,e=>(f(),E(F,{key:e},[e?(f(),E("img",{key:0,src:e,class:"show-img"},null,8,M)):_("",!0)],64))),128))]),N])}}}),q=A(O,[["__scopeId","data-v-a7d3092f"]]);export{Y as __pageData,q as default};