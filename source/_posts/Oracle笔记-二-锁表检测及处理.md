---
title: Oracle笔记(二)锁表检测及处理
author: cmg
top: false
cover: false
abbrlink: 7b6bf07a
date: 2021-05-21 14:13:44
urlname: oracle_locked_table
tags: 
  - Oracle
  - 锁表检测
  - 锁表处理
categories: 
  - Oracle锁表
password:
summary:
---

## 锁表检测及处理

### 1.锁表检测

```sql
--查询锁表的进程及执行命令
--使用sys用户登陆执行
select 
       'alter system kill session '''|| t2.sid ||',' ||t2.serial#||''';',
       t2.username,
       t2.sid,
       t2.serial#,
       t3.object_name,
       t2.OSUSER,
       t2.MACHINE,
       t2.PROGRAM,
       t2.LOGON_TIME,
       t2.COMMAND,
       t2.LOCKWAIT,
       t2.SADDR,
       t2.PADDR,
       t2.TADDR,
       t2.SQL_ADDRESS,
       t1.LOCKED_MODE
  from v$locked_object t1, v$session t2, dba_objects t3
 where t1.session_id = t2.sid
   and t1.object_id = t3.object_id
 order by t2.logon_time;
```

### 2.锁表处理

```sql
使用sys用户执行上面语句查询第一列语句；
```

