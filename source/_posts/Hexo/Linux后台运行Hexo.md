---
title: Linux后台运行Hexo
author: cmg
top: false
cover: false
urlname: linux_run_back_hexo
tags:
  - Hexo
  - Linux
  - 后台运行
categories:
  - Hexo
password:
summary: Linux后台运行Hexo
abbrlink: 8631bdb3
date: 2021-06-02 14:50:27
---

## Linux后台运行Hexo

> 自己搭建了一个hexo博客，并部署到阿里云服务器上面，使用“hexo s &”时发现，当关闭终端时，博客系统也会退出，并不能一直在后台运行，通过查阅资料发现可以通过pm2来托管
>
> **第一步，安装pm2**
>
> ```sh
> npm install -g pm2
> ```
>
> **第二步，在博客根目录创建一个名为“hexo_run.js”的脚本**
>
> ```javascript
> //run
> const { exec } = require('child_process')
> exec('hexo g && hexo s',(error, stdout, stderr) => {
>         if(error){
>                 console.log('exec error: ${error}')
>                 return
>         }
>         console.log('stdout: ${stdout}');
>         console.log('stderr: ${stderr}');
> })
> ```
>
> **第三步，到博客根目录运行脚本**
>
> ```sh
> pm2 start hexo_run.js
> ```
>
> **pm2的相关命令**
>
> ```sh
> pm2 start hexo_run.js	#启动
> pm2 list	#查看pm2管理的所有服务
> 
> pm2 stop all	#停止pm2列表的所有服务
> pm2 stop 0 #停止进程为0的进程
> 
> pm2 reload all #重新载入列表所有进程
> pm2 reload 0 #重载列表中进程为0的进程
> 
> pm2 restart all	#重启列表中所有的进程
> pm2 restart 0	#重启列表中进程为0的进程
> 
> pm2 delete 0	#删除列表中进程为0的进程
> pm2 delete all	#删除列表中所有的进程
> ```
>
> 

