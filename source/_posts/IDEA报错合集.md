---
title: IDEA报错合集
date: 2021-05-07 14:07:49
author: cmg
urlname: idea_error
categories:
  - IDEA
tags:
  - IDEA报错合集
abbrlink: 4f9f6511
---

## IDEA错误列表

### 1.错误1

> 错误描述：Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile (default-compile) on project MavenProj1: Compilation failure
> 解决方案1
> 在pom.xml中指定compiler插件，所以在pom.xml中加入插件解决了问题：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <encoding>UTF-8</encoding>
            </configuration>
        </plugin>
    </plugins>
</build>
```

> 解决方案2
> 在maven的setting.xml中指定jdk版本。
> setting.xml在这里面找。
[![setting文件位置](https://z3.ax1x.com/2021/05/07/g3PiQK.png)
> 然后加入以下代码, 要在 <profiles> </profiles> 块内加入。

```xml
<profile>
    <id>jdk-1.8</id>
    <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
    </activation>
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```
