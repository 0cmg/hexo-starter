---
title: PicGo+GitHub搭建图床
author: cmg
top: false
cover: false
urlname: picgo_github_images
tags:
  - PicGo
  - GitHub
  - 图床
categories:
  - 图床
summary: 使用PicGo + GitHub搭建免费图床
abbrlink: e4df49cd
date: 2021-06-01 15:25:17
password:
---

## PicGo + GitHub搭建图床

### 一、GitHub 仓库设置
> 流程：新建 public 仓库 -> 创建 token -> 复制 token 备用
>
> 1.1 新建仓库
> 点击 git 主页右上角的 + 创建 New repository；
>
> 填写仓库信息，例如我就创建了一个 cloudimg 的仓库。这里注意，仓库得设置为 Public 因为后面通过客户端访问算是外部访问，因此无法访问 Private ，这样的话图片传上来之后只能存储不能显示。所以要设置为 Public。
>
> 1.2 创建 token 并复制保存
>
> 此时仓库已经建立，点击右上角头像，然后进入设置；
>
> 在页面最下找到 `Developer settings`，点击进入；
>
> 创建 token；
>
> 填 description（也是随心填），勾选复选框 repo ，接着到页面底部 `Generate token` 就完成了；
>
> 然后复制生成一串字符 token，这个 token 只出现一次，所以要保存一下。

### 二、PicGo客户端配置

> 2.1 下载&安装
>
> PicGo （目前 2.0.4）是一个开源的图床工具，非常优秀。可以到 git 上下载，但下载速度太慢，所以我放了一个百度云的链接，速度快很多。
>
> git地址：[PicGo](https://github.com/Molunerfinn/PicGo)
>
> Win版下载链接：[百度云](https://pan.baidu.com/s/17KycPMoqNCnc1cR_yQO8nQ) 密码：PicG
>
> 2.2 配置
>
> 仓库名 即你的用户名/仓库名
> 分支名 默认 main
> Token 就是刚刚复制的那一串字符
> 存储路径 这个可以填也可以不填，填了的话图片就上传到 git 中 data 这个文件夹
> 域名 https://raw.githubusercontent.com/yefcion/cloudimg/master这个要改一下 格式 https://raw.githubusercontent.com/[username]/[仓库名]/master
>
> 然后点确定就可以了。
>
> 注：这里提供一个加速访问图片的方法：CDN加速，具体原理自行百度（我还不是很懂）
> 将上面的域名改为：
> 原 https://raw.githubusercontent.com/yefcion/cloudimg/master
> 现 https://cdn.jsdelivr.net/gh/yefcion/cloudimg@master
