---
title: Oracle笔记(一)创建表空间及用户
date: 2021-05-21 13:59:05
author: cmg
top: false
cover: false
urlname: oracle_create_tablespace_table
tags:
  - 创建表空间
  - 创建用户
  - 授权
categories:
  - Oracle
password:
summary:
reprintPolicy: cc_by
abbrlink: 9dc7261d
---

## 创建表空间及用户

### 1.创建表空间

```sql
--创建表空间
create tablespace tbs_gcms  datafile '/home/oracle/app/oracle/oradata/helowin/tbs_gcms01.dbf' size 1g ;
commit;
```

### 2.创建用户

```sql
--创建用户
create user gcms identified by gcms default tablespace tbs_gcms;
commit;
```



### 3.给用户授权

```sql
--给创建的用户授权
grant connect,resource,create table ,create view,create session,create procedure,create public synonym  to gcms;
grant execute on dbms_scheduler to gcms;
grant execute on dbms_lock to gcms;
grant execute on dbms_job to gcms;
grant create job to gcms;
grant manage scheduler  to gcms;
grant create library to gcms;
grant unlimited tablespace to gcms;
grant debug any procedure, debug connect session to gcms;
grant create public database link,drop public database link to gcms; 
commit;
```

### 4.删除表空间

```sql
drop tablespace tablespace_name including contents and datafiles;
```



### 5.删除用户

```sql
drop user user_name cascade;
```

