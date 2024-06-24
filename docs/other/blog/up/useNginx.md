---
title: 怎么使用nginx
description: 不同系统下怎么使用nginx
outline: [2, 4]
---

# 怎么使用nginx

## nginx介绍

> Nginx是一个 轻量级/高性能的反向代理Web服务器，它是由C语言写的，所以速度非常快、性能非常优秀。它的主要功能就是反向代理、负载均衡、配置SSL证书、防盗链、解决跨域问题、缓存、限流、动静资源分离等等

::: info nginx的常用 `配置文件` 说明
- `nginx.exe` nginx的启动文件，不推荐使用，建议使用命令行启动项目
- `html` html文件夹下是默认的项目路径
- `conf/nginx.conf` nginx的核心配置文件
:::

::: tip nginx的 `常用命令`

> 命令都需要在 `nginx文件目录下` 执行

```bash
# 启动 Nginx
start nginx

# 停止 Nginx
nginx -s stop

# 重新加载配置（项目需要更新操作执行，最常用）
nginx -s reload
```
:::


## `windows server` 系统

::: info 如何使用nginx
- 进入官网下载好nginx文件，进行解压
- 在nginx文件目录下打开 `cmd` 终端
- 执行命令 `start nginx` 启动nginx
- 打开浏览器访问 `localhost` 可以看到 `Welcome to nginx!` 界面即成功
- 把自己的项目打包后的dist文件内容放入 `nginx/html` 文件夹下
- 执行 `nginx -s reload` 命令
- 刷新 `localhost` 预览自己的博客项目
:::

#### 借助nginx实现自己的图片服务器
[参考链接](/other/blog/up/setupOss.html)


## `linux` 系统

> 待完善...
