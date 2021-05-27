---
title: 根据WSDL接口使用Apache cxf生成Java代码
author: cmg
top: false
cover: false
urlname: wsdl_apache_cxf_java
tags:
  - WSDL
  - Apache xcf
  - Java
categories:
  - WebService
summary: 根据WSDL接口使用Apache cxf生成Java代码
abbrlink: 319f657d
date: 2021-05-27 17:30:49
password:
---

## 根据WSDL接口使用Apache cxf生成Java代码

> 首先说下有两种方式生成wsdl客户端代码：
>
> + 1.通过Apache cxf 的wsdl2java生成
>   + 1).先下载apace cxf包，配置环境变量，和java 的环境变量的配置方式一样。
>     在环境变量中配置CXF_HOME 值为D:\cxf\apache-cxf-3.0.0,在PATH中加入%CXF_HOME%\bin
>     验证环境变量有无配置成功，cmd 窗口，输入  wsdl2java   
>   +  2).wsdl2java用法： 
>
> ```bash
> wsdl2java -p com -d src -all  wsdl
> -p  指定其wsdl的命名空间，也就是要生成代码的包名
> -d  指定要产生代码所在目录 
> -client 生成客户端测试web service的代码 
> -server 生成服务器启动web  service的代码 
> -impl 生成web service的实现代码 
> -ant  生成build.xml文件 
> -all 生成所有开始端点代码：types,service proxy,,service interface, server mainline, client mainline, implementation object, and an Ant build.xml file. 
> ```
>
> + 2.通过soapui 工具生成wsdl 客户端代码
>
>   ![图一](https://raw.githubusercontent.com/0cmg/imgtu/develop/images/Java/20210527173926.jpg)
>
>   ![图二](https://raw.githubusercontent.com/0cmg/imgtu/develop/images/Java/20210527173927.jpg)
>
>   ![图三](https://raw.githubusercontent.com/0cmg/imgtu/develop/images/Java/20210527173929.jpg)
>
>   ![图四](https://raw.githubusercontent.com/0cmg/imgtu/develop/images/Java/20210527173930.jpg)
>
>   ![图五](https://raw.githubusercontent.com/0cmg/imgtu/develop/images/Java/20210527173928.jpg)



