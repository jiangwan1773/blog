import{_ as a,H as s,G as e,al as c}from"./chunks/framework.MbiYLvr2.js";const b=JSON.parse('{"title":"前端加密安全","description":"怎么做前端加密安全","frontmatter":{"title":"前端加密安全","description":"怎么做前端加密安全"},"headers":[],"relativePath":"web/basics/codeSafety.md","filePath":"web/basics/codeSafety.md","lastUpdated":1719018861000}'),t={name:"web/basics/codeSafety.md"},n=c(`<h1 id="前端加密安全" tabindex="-1" data-v-2c6874e5>前端加密安全 <a class="header-anchor" href="#前端加密安全" aria-label="Permalink to &quot;前端加密安全&quot;" data-v-2c6874e5>​</a></h1><blockquote data-v-2c6874e5><p data-v-2c6874e5>核心使用了前端js库CryptoJS</p></blockquote><h2 id="流程" tabindex="-1" data-v-2c6874e5>流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;" data-v-2c6874e5>​</a></h2><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>一、前端加密场景有哪些？</p><div class="language- vp-adaptive-theme" data-v-2c6874e5><button title="Copy Code" class="copy" data-v-2c6874e5></button><span class="lang" data-v-2c6874e5></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-2c6874e5><code data-v-2c6874e5><span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.请求接口</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.路由跳转携带参数</span></span></code></pre></div></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>二、常用加密方式</p><div class="language- vp-adaptive-theme" data-v-2c6874e5><button title="Copy Code" class="copy" data-v-2c6874e5></button><span class="lang" data-v-2c6874e5></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-2c6874e5><code data-v-2c6874e5><span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.base64</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.Sha256</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>3.AES</span></span></code></pre></div></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>三、Base64使用场景</p><p data-v-2c6874e5>浏览器url地址栏 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare001.png" class="show-img" data-v-2c6874e5></p><p data-v-2c6874e5>区别&amp;缺陷 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare002.png" class="show-img" data-v-2c6874e5></p><div class="language- vp-adaptive-theme" data-v-2c6874e5><button title="Copy Code" class="copy" data-v-2c6874e5></button><span class="lang" data-v-2c6874e5></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-2c6874e5><code data-v-2c6874e5><span class="line" data-v-2c6874e5><span data-v-2c6874e5>Base64优缺点(Base64本质是一种编码方式，而非加密方式)</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>优点</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.使用简单，javascript语言支持</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.对称性加密（加密之后可以解密）</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>缺点</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.加解密会改变基础类型（Number 变成String），仅支持ASCII</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.编码后的大小会比原文件大小大1/3</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>3.加密单一，内容相同的密文加密解密对一样的</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>4.会造成文件体积增加，影响文件的加载速度</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>5.兼容性的问题，ie8以前的浏览器不支持</span></span></code></pre></div></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>四、Sha256简介</p><div class="language- vp-adaptive-theme" data-v-2c6874e5><button title="Copy Code" class="copy" data-v-2c6874e5></button><span class="lang" data-v-2c6874e5></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-2c6874e5><code data-v-2c6874e5><span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.比较流行，也是最强的加密函数之一</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.非对称性加密（加密之后，无法通过密文解密）</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>3.应用场景：比特币等加密货币</span></span></code></pre></div><p data-v-2c6874e5>加密、解密过程演示 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare003.png" class="show-img" data-v-2c6874e5></p></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>五、AES简介</p><p data-v-2c6874e5>加密、解密过程演示 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare004.png" class="show-img" data-v-2c6874e5></p><div class="language- vp-adaptive-theme" data-v-2c6874e5><button title="Copy Code" class="copy" data-v-2c6874e5></button><span class="lang" data-v-2c6874e5></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-2c6874e5><code data-v-2c6874e5><span class="line" data-v-2c6874e5><span data-v-2c6874e5>前端加密步骤</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>1.获取当前时间戳</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>2.拼接密钥字符串（eg：token + 时间戳）</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>3.哈希算法对拼接后的字符串进行哈希</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>借助sha256生成非对称性加密</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>生成结果64位</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>4.取哈希结果前32位生成完整的密钥（utf8格式）</span></span>
<span class="line" data-v-2c6874e5><span data-v-2c6874e5>5.使用前端js库CryptoJS生成密文</span></span></code></pre></div></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>六、如何加密</p><img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare006.png" class="show-img" data-v-2c6874e5></div><div class="info custom-block" data-v-2c6874e5><p class="custom-block-title" data-v-2c6874e5>七、如何解密</p><img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare007.png" class="show-img" data-v-2c6874e5></div>`,10),p=[n];function d(i,l,v,o,h,r){return e(),s("div",null,p)}const m=a(t,[["render",d],["__scopeId","data-v-2c6874e5"]]);export{b as __pageData,m as default};