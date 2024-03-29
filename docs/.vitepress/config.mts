import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

const chineLanguage = {
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  sidebarMenuLabel: "菜单",
  outline: {
    label: "本页目录",
  },
  returnToTopLabel: "返回顶部",
};

export default defineConfig({
  title: "一条懒羊羊",
  lang: "zh-CN",
  // 打包配置来源子deploy.yml文件，  deploy.yml：这是一个github的自动化打包配置文件
  base: process.env.BUILD_ENV === 'github' ? '/blog/' : '/', // 打包兼容github page处理
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: "algolia",
      options: {
        appId: "2TMERJKE3X",
        apiKey: "281977021315cf1bb8e8678408f9c891",
        indexName: "vitepressblog",
        placeholder: "请输入关键词",
      },
    },
    logo: {
      src: "image/logo.svg",
      width: 24,
      height: 24,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/blog" },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">豫ICP-备2023019165</a>',
      copyright: "版权所有 © 2023-至今 jiangwan1773",
    },
    ...chineLanguage,
  },
});
