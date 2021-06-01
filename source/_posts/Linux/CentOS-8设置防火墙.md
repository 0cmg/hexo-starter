---
title: CentOS 8设置防火墙
author: cmg
top: false
cover: false
urlname: linux_centos8_firewall
tags:
  - firewall
  - Linux
  - CentOS 8
categories:
  - Linux
summary: CentOS 8设置防火墙
abbrlink: 9b3f6412
date: 2021-06-01 16:50:36
password:
---

## CentOS 8设置防火墙

启动防火墙：

```shell
systemctl start firewalld.service
```

关闭防火墙：

```shell
systemctl stop firewalld.service
```

重启防火墙：

```shell
systemctl restart firewalld.service
```

开机启用防火墙：

```shell
systemctl enable firewalld.service
```

开机禁用防火墙：

```shell
systemctl disable firewalld.service
```

查看防火墙状态：

```shell
systemctl status firewalld.service
```

查看端口：

```shell
firewall-cmd --zone=public --list-ports
```

添加端口：

```shell
firewall-cmd --permanent --zone=public --add-port=8080/tcp
```

删除端口：

```shell
firewall-cmd --permanent --zone=public --remove-port=8080/tcp
```

重新加载防火墙规则：

```shell
firewall-cmd --reload
```

