import{d as q,c as p,f as u,o as P,x as S,w as C,M as $,H as _,V as s,aj as r,a9 as E,O as N,y as T,an as z,G as v,W as M,X as H,_ as F,k as V,F as L,a2 as O,am as U,a1 as G,g as J}from"./chunks/framework.Dt5ochYt.js";const f=o=>(M("data-v-c627a1fe"),o=o(),H(),o),R={class:"show-img-cont"},W=f(()=>s("div",{class:"icon"},"✕",-1)),X=[W],K=f(()=>s("div",{class:"icon icon-v"},"⟳",-1)),Q=[K],Y=f(()=>s("div",{class:"icon"},"◀︎",-1)),Z=[Y],ee=f(()=>s("div",{class:"icon"},"▶︎",-1)),ae=[ee],te=["src"],se=q({__name:"preview",props:{modelValue:{type:Boolean,default:!1},index:{type:Number,default:0},list:{type:Array,required:!0},blankClose:{type:Boolean,default:!1},zIndex:{type:Number,default:3001}},emits:["update:modelValue"],setup(o,{emit:y}){z(e=>({"0ace4315":w.value,"034688ec":k.value,c81e3ad4:d.value}));const i=o,h=y,l=p(()=>{var e;return(e=i.list)!=null&&e.length?i.list:[]}),m=u(0),a=u(0),t=u(600),k=p(()=>`${t.value}px`),c=u(0),d=p(()=>`${c.value*90}deg`),w=p(()=>i.zIndex);P(()=>{S(()=>{document.addEventListener("keyup",e=>{e.keyCode===27&&g()}),document.addEventListener("mousewheel",e=>{if(e.wheelDelta<0){const n=t.value+Math.abs(e.wheelDelta);t.value=n>1e3?1e3:n}else{const n=t.value-Math.abs(e.wheelDelta);t.value=n<600?600:n}})})}),C(()=>i.index,()=>{a.value=i.index},{immediate:!0}),C(()=>i.modelValue,e=>{e===!0?document.body.setAttribute("class","jw-body-hidden"):document.body.removeAttribute("jw-body-hidden")},{immediate:!0});function g(){x(),h("update:modelValue",!1)}function I(e){e.stopPropagation(),i.blankClose&&g()}function j(e){e.stopPropagation(),a.value!==0&&(x(),a.value>=1&&(a.value=a.value-1))}function B(e){e.stopPropagation(),a.value!==l.value.length&&(x(),a.value<l.value.length-1&&(a.value=a.value+1))}function x(){c.value=0,t.value=600}function D(){c.value=c.value===3?0:++c.value}function A(e){m.value=e}return(e,n)=>{var b;return v(),$(T,{to:"body"},[o.modelValue?(v(),_("div",{key:0,class:"show-img-box",onClick:I},[s("div",R,[s("div",{class:"show-img-close vp-dja",onClick:r(g,["stop"])},X),s("div",{class:"show-img-rotate vp-dja",onClick:r(D,["stop"])},Q),s("div",{style:E({cursor:a.value===0?"not-allowed":"pointer"}),class:"show-img-left vp-dja",onClick:r(j,["stop"])},Z,4),s("div",{style:E({cursor:a.value===l.value.length-1?"not-allowed":"pointer"}),class:"show-img-right vp-dja",onClick:r(B,["stop"])},ae,4),s("img",{class:"show-img-img",src:(b=l.value)==null?void 0:b[a.value],onClick:n[0]||(n[0]=r(ue=>A(a.value),["stop"]))},null,8,te)])])):N("",!0)])}}}),ie=F(se,[["__scopeId","data-v-c627a1fe"]]),le=U("",3),ne={class:"img-box"},oe=["src","onClick"],pe=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/preview/index.md","filePath":"web/vue/preview/index.md"}'),ce={name:"web/vue/preview/index.md"},de=Object.assign(ce,{setup(o){const{proxy:y}=J(),i=["pc/wegame/luban.jpg","pc/wegame/juzi.jpg","pc/wegame/yunying.jpg"],h=p(()=>i.map(t=>y.$filterImgUrl(t))),l=u(!1),m=u(0);function a(t){m.value=t,l.value=!0}return(t,k)=>{const c=G("c-title");return v(),_("div",null,[V(c,{title:"封装图片预览功能"}),le,s("div",ne,[(v(!0),_(L,null,O(h.value,(d,w)=>(v(),_("img",{key:d,class:"img",src:d,alt:"",onClick:g=>a(w)},null,8,oe))),128))]),V(ie,{modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=d=>l.value=d),index:m.value,list:h.value},null,8,["modelValue","index","list"])])}}}),ve=F(de,[["__scopeId","data-v-89c69316"]]);export{pe as __pageData,ve as default};