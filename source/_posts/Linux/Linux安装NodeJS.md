---
title: Linux安装NodeJS
author: cmg
top: false
cover: false
urlname: linux_install_nodejs
tags:
  - Node
  - Linux
categories:
  - Node
  - Linux
summary: Linux系统安装Nodejs详细教程
abbrlink: fe4ed47c
date: 2021-06-01 15:42:20
password:
---

## Linux系统安装Nodejs

### 一、下载安装包

> **方法一：下载到本地后上传到服务器**
>
> 下载地址;https://nodejs.org/dist/v14.17.0/node-v14.17.0-linux-x64.tar.xz
>
> ###### 方法二：通过`wget`下载到本地目录(推荐)
>
> 首先我们在`/usr/local`文件夹下新建一个名为`nodejs`的文件夹
>
> 进入nodejs文件夹，执行下列命令（下载地址根据你自己的情况去官网复制），就可以将官网编译好了的Nodejs的压缩包下载至nodejs文件夹。
>
> $ wget https://nodejs.org/dist/v14.17.0/node-v14.17.0-linux-x64.tar.xz

### 二、解压及重命名

> 压缩包已经在`nodejs`文件夹里面了，现在我们进行解压操作。
> 执行：
>
> ```shell
> $ xz -d node-v14.17.0-linux-x64.tar.xz
> ```
>
> 再执行：
>
> ```shell
> $ tar -xf node-v14.17.0-linux-x64.tar
> ```
>
> 我们需要的Nodejs应用文件夹就解压出来了，现在下载的压缩包已经没用了，我们需要删除它，并且我们需要将node-v14.17.0-linux-x64文件夹中的所有内容移动到它的上级目录nodejs中，这里其实就相当于一个重命名操作。
> 执行：
>
> ```
> $ rm -f node-v14.17.0-linux-x64.tar
> $ mv node-v14.17.0-linux-x64/* /usr/local/nodejs
> ```
>
> OK，移动成功，现在我们要删除无用的空文件夹`node-v14.17.0-linux-x64`
> 执行：
>
> ```shell
> $ rm -rf node-v14.17.0-linux-x64
> ```

### 三、建立软连接

> 此时的bin文件夹中已经存在node以及npm，如果你进入到对应文件的中执行命令行一点问题都没有，不过不是全局的，所以通过建立软链接的方式将这个设置为全局。
> 执行：
>
> ```
> $ ln -s /usr/local/nodejs/bin/node /usr/local/bin
> $ ln -s /usr/local/nodejs/bin/npm /usr/local/bin
> ```
>
> 输入以下命令检查安装结果：
>
> ```
> node -v
> ```
>
> 出现具体版本号，安装完成！

### 四、换源

> npm默认使用的是官方源，在国内使用非常不便。为了便于国内开发者下载包，有热心的开发者提供了nrm，即对npm源管理的工具。
>
> 1. 通过`npm install -g nrm`进行全局安装。
>
> 2. 查看当前源
>
>    ```
>    nrm ls
>    ```
>
> 3. 使用淘宝源
>
>    ```bash
>    nrm use taobao
>    ```

### 五、NPM的替代工具YARN

> 安装
>
> ```bash
> npm install -g yarn
> ```
>
> 验证版本
>
> ```bash
> yarn -v
> ```
>
> 使用介绍
>
> 	npm yarn
> |                    |         **NPM**          |       **YARN**       |
> | :----------------: | :----------------------: | :------------------: |
> |       初始化       |         npm init         |      yarn init       |
> |    默认安装依赖    |       npm install        |     yarn install     |
> | 安装某个依赖并保存 |  npm install xxxx -save  |    yarn add xxxx     |
> |    安装全局依赖    |   npm install -g xxxx    | yarn global add xxxx |
> |      移除依赖      | npm uninstall xxxx -save |   yarn remove xxxx   |
> |      更新依赖      |        npm update        |  yarn upgrade xxxx   |
> |      运行指令      |         npm run          |       yarn run       |
>
> 

### 六、源管理

> yarn也有类似的工具，即yrm。
>
> ```bash
> npm install -g yrm
> ```
