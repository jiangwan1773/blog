import{_ as i,H as l,G as e,al as o}from"./chunks/framework.MbiYLvr2.js";const k=JSON.parse('{"title":"网站的部署发布","description":"博客的部署发布工作流程，以及详细的介绍","frontmatter":{"title":"网站的部署发布","description":"博客的部署发布工作流程，以及详细的介绍","outline":[2,4]},"headers":[],"relativePath":"other/blog/basics/deploy.md","filePath":"other/blog/basics/deploy.md","lastUpdated":1719159064000}'),a={name:"other/blog/basics/deploy.md"},c=o(`<h1 id="网站的部署发布" tabindex="-1">网站的部署发布 <a class="header-anchor" href="#网站的部署发布" aria-label="Permalink to &quot;网站的部署发布&quot;">​</a></h1><h2 id="前置准备工作" tabindex="-1">前置准备工作 <a class="header-anchor" href="#前置准备工作" aria-label="Permalink to &quot;前置准备工作&quot;">​</a></h2><p>如果不想花钱可以使用 <a href="/other/blog/up/usePage.html"><code>github pages</code></a></p><div class="tip custom-block"><p class="custom-block-title">所需</p><ul><li>云服务器 （年花费200rmb左右）</li><li>域名 （年花费50rmb左右）</li></ul></div><h2 id="云服务器" tabindex="-1">云服务器 <a class="header-anchor" href="#云服务器" aria-label="Permalink to &quot;云服务器&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">注意事项</p><ol><li>初次使用云服务器建议先买一年最便宜的华为云试试</li><li>初次购买建议 <code>windows server</code> 服务器，可以快速上手</li><li>充分掌握云服务器之后再换其他 <code>linux</code> 服务器</li><li>服务器配置 <code>2核2G3M</code> 够用了</li></ol></div><div class="info custom-block"><p class="custom-block-title">云服务器种类</p><ul><li><code>阿里云</code><ul><li>有过云服务器使用经验的首选，也是博主现在使用的云服务器厂商</li><li>个人感觉使用体验最好的</li><li>服务器限制不多</li></ul></li><li><code>华为云</code><ul><li>新用户有个<code>28rmb/年</code></li></ul></li><li><code>腾讯云</code></li></ul></div><h4 id="关于费用问题" tabindex="-1">关于费用问题 <a class="header-anchor" href="#关于费用问题" aria-label="Permalink to &quot;关于费用问题&quot;">​</a></h4><ul><li>博主目前服务器年消费在200以内</li><li>每个服务器厂商也会有新用户活动，但是推荐 <em><code>618</code></em> 或 <em><code>双11</code></em> 活动的时候购买</li><li>活动买一年用完了就换一家厂商的服务器即可，不行也可以用家人的身份信息购买</li><li>现在 <em><code>618</code></em> 或 <em><code>双11</code></em> 都有连续几年的服务器便意出售</li></ul><h2 id="域名" tabindex="-1">域名 <a class="header-anchor" href="#域名" aria-label="Permalink to &quot;域名&quot;">​</a></h2><blockquote><p>推荐第一次使用的话可以先买一个便宜的<code>.top</code>，<code>.dev</code>等，<code>华为云</code>、<code>阿里云</code>等均有售卖</p></blockquote><div class="info custom-block"><p class="custom-block-title">云服务器种类</p><ol><li><code>三大顶级域名</code><ul><li><code>.com</code> 商业机构（commercial），诸如<code>apple.com</code>, <code>google.com</code></li><li><code>.net</code> 网络服务提供商（network）诸如网站后台接口地址</li><li><code>.org</code> 非营利组织（organization） 诸如<code>vuejs.org</code></li></ul></li><li><code>国家顶级域名</code><ul><li><code>.cn</code> 中国</li><li><code>.us</code> 美国</li><li><code>.jp</code> 日本</li></ul></li></ol></div><h2 id="配置nginx" tabindex="-1">配置nginx <a class="header-anchor" href="#配置nginx" aria-label="Permalink to &quot;配置nginx&quot;">​</a></h2><blockquote><p>建议先用windows电脑本地先熟悉一下 <code>nginx</code> 的使用</p></blockquote><p><a href="https://nginx.org/en/" target="_blank" rel="noreferrer">官网直通车   🚘</a></p><div class="info custom-block"><p class="custom-block-title">nginx的常用配置文件说明</p><ul><li><code>nginx.exe</code> nginx的启动文件，不推荐使用，建议使用命令行启动项目</li><li><code>html</code> html文件夹下是默认的项目路径</li><li><code>conf/nginx.conf</code> nginx的核心配置文件</li></ul></div><div class="tip custom-block"><p class="custom-block-title">nginx的常用命令</p><blockquote><p>命令都需要在 <code>nginx文件目录下</code> 执行</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新加载配置（项目需要更新操作执行，最常用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div></div><h4 id="windows系统下nginx的使用" tabindex="-1">windows系统下nginx的使用 <a class="header-anchor" href="#windows系统下nginx的使用" aria-label="Permalink to &quot;windows系统下nginx的使用&quot;">​</a></h4><ul><li>进入官网下载好nginx文件，进行解压</li><li>进入nginx文件目录下打开 <code>cmd</code> 或者 <code>powershell</code></li><li>执行命令 <code>nginx</code> 启动nginx</li><li>打开浏览器访问 <code>localhost</code> 可以看到 <code>Welcome to nginx!</code> 界面即成功</li><li>把自己的项目打包后文件放入 <code>nginx/html</code> 文件夹下</li><li>执行 <code>nginx -s reload</code> 命令重新访问 <code>localhost</code> 预览自己的博客项目</li></ul><h2 id="备案" tabindex="-1">备案 <a class="header-anchor" href="#备案" aria-label="Permalink to &quot;备案&quot;">​</a></h2><ul><li>服务器是香港或者国外是不需要进行备案的</li><li>服务器在国内是需要进行备案</li><li>备案周期大概是 <code>15-30</code> 天</li></ul><p><a href="/other/blog/up/operate.html">关于如何备案，参考链接</a></p><h2 id="部署到云服务器" tabindex="-1">部署到云服务器 <a class="header-anchor" href="#部署到云服务器" aria-label="Permalink to &quot;部署到云服务器&quot;">​</a></h2><blockquote><p>这里假设购买的是 <code>windows server</code> 云服务器</p></blockquote><ul><li>买完服务器，在自己电脑操作使用过nginx</li><li>在服务器下载nginx，在服务器的浏览器里测试nginx是否可用</li><li>代码上传云服务器，建议通过 <code>git clone</code> 的方式</li><li>这里需要注意 <code>vitepress</code> 打包后 <code>dist打包文件</code> 也需要上传的代码仓库</li><li>云服务器电脑安装git工具，拉取代码</li><li>两种方式启动博客项目 <ul><li><code>方式一:</code> 将dist目录复制到 <code>nginx/html</code> 文件夹下</li><li><code>方式二:</code> 修改nginx配置文件，将项目地址映射到git拉取的dist目录下</li><li>推荐使用地址映射，可以省去复制粘贴代码，后续升级linux服务器，我们将通过执行脚本方式，<code>一键完成</code> 拉取，部署，重载</li></ul></li><li>重载nginx，在服务器浏览器访问 <code>localhost</code> 看网站效果</li></ul><h2 id="如何使用linux云服务器" tabindex="-1">如何使用linux云服务器 <a class="header-anchor" href="#如何使用linux云服务器" aria-label="Permalink to &quot;如何使用linux云服务器&quot;">​</a></h2><p><a href="/other/blog/up/useLinux.html">参考链接</a></p>`,27),s=[c];function n(d,t,h,r,p,u){return e(),l("div",null,s)}const b=i(a,[["render",n]]);export{k as __pageData,b as default};
