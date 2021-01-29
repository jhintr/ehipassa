---
title: "Initial Server and Deploy Django"
date: 2019-06-18T10:41:09+08:00
lang: en
---

### 初始化服务器

> [Initial Server Setup with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)

#### 1. 以 root 登录，创建新用户

```bash
$ ssh root@your_server_ip
$ adduser sammy
# append Group sudo
$ usermod -aG sudo sammy
```

#### 2. 建立基本的防火墙

```bash
$ ufw app list
$ ufw allow OpenSSH
$ ufw enable
$ ufw status
```

#### 3. 为新用户启用外部访问

需要把你的本地公钥复制到 `~/.ssh/authorized_keys` 中。

`rsync` command will copy the root user's `.ssh` directory, preserve the permissions, and modify the file owners, all in a single command.

>  When using `rsync` below, be sure that the source directory (`~/.ssh`) does not include a trailing slash.

```bash
$ rsync --archive --chown=sammy:sammy ~/.ssh /home/sammy
```

#### 4. 修改主机名

```bash
$ hostnamectl set-hostname your-new-hostname
# reload shell
$ bash
```

#### 5. 修改时区

```bash
# check current time zone
$ timedatectl
$ cat /etc/timezone
# list all available time zones
$ timedatectl list-timezones
# change time zone
$ timedatectl set-timezone Asia/Shanghai
```

#### 6. 设置 Git

```bash
$ ssh-keygen -t rsa -b 4096 -C "you@example.com"
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/id_rsa
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global core.editor vim
```

### 部署 Django

> [Set Up Django with Postgres, Nginx, and Gunicorn](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04)

Gunicorn 作为应用程序接口，处理来自客户端的请求，将其转换为 Python 程序。

Nginx 会设置在 Gunicorn 前，以利用其高性能的连接处理机制和易于植入的安全特性。

#### 安装

```bash
$ sudo apt update
$ sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

#### PostgreSQL 数据库及用户

缺省情况下，Postgres 为本地连接使用一种称为 `peer authentication` 的认证机制。简单地说，就是如果一个用户的系统用户名与 Postgres 用户名匹配，则该用户不必再次验证即可登录。

在安装 Postgres 时，系统用户名 `postgres` 已被创建，以匹配数据库的管理员。

```bash
# login with user postgres
$ sudo -u postgres psql
```

```sql
-- create database
CREATE DATABASE db_name;
-- create user
CREATE USER db_user WITH PASSWORD 'password';
-- set the default encoding
ALTER ROLE db_user SET client_encoding TO 'utf8';
-- block reads from uncommitted transactions
ALTER ROLE db_user SET default_transaction_isolation TO 'read committed';
-- set the timezone
ALTER ROLE db_user SET timezone TO 'UTC';
-- give user access to administer database
GRANT ALL PRIVILEGES ON DATABASE db_name TO db_user;
```

#### Python 虚拟环境

```bash
(venv)$ pip install django djangorestframework gunicorn psycopg2-binary
```

#### Django 设置

```python
# The simplest case: just add the domain name(s) and IP addresses of your Django server
ALLOWED_HOSTS = [ 'chen.work', '0.0.0.0' ]
# To respond to 'example.com' and any subdomains, start the domain with a dot
ALLOWED_HOSTS = [ '.chen.work', '0.0.0.0' ]
# Add localhost
ALLOWED_HOSTS = [ 'your_server_domain_or_IP', 'second_domain_or_IP', 'localhost' ]
```

```bash
# firewall
(venv)$ sudo ufw allow 8000
```

#### Gunicorn systemd Socket 及 Service 文件

Gunicorn socket 会在启动时被创建，负责侦听连接。当连接发生，系统会自动启动 Gunicorn 进程来处理连接。

```bash
$ sudo vim /etc/systemd/system/gunicorn.socket
```
```
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

创建 service 文件，文件名应与上面的相同：

```bash
$ sudo vim /etc/systemd/system/gunicorn.service
```
```
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=zhi
Group=www-data
WorkingDirectory=/home/zhi/chenwork
ExecStart=/home/zhi/chenwork/venv/bin/gunicorn \
        --access-logfile - \
        --timeout 600 \
        --workers 3 \
        --bind unix:/run/gunicorn.sock \
        --env DJANGO_SETTINGS_MODULE=chenwork.settings.production \
        chenWork.wsgi:application

[Install]
WantedBy=multi-user.target
```
```bash
# start socket
$ sudo systemctl start gunicorn.socket
$ sudo systemctl enable gunicorn.socket
# restart service
$ sudo systemctl daemon-reload
$ sudo systemctl restart gunicorn
```

#### 配置 Nginx

```bash
sudo vim /etc/nginx/sites-available/project_name
```
```
server {
    listen 443;

    ssl on;
    ssl_certificate /etc/ssl/chen.work.pem;
    ssl_certificate_key /etc/ssl/chen.work.key;

    server_name chen.work;
    access_log /var/log/nginx/nginx.vhost.access.log;
    error_log /var/log/nginx/nginx.vhost.error.log;


    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        alias /home/zhi/workcdn/static/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
        proxy_read_timeout 600s;
        client_max_body_size 1M;
    }
}

server {
    listen 80;
    server_name chen.work;
    return 301 https://$host$request_uri;
}
```
```bash
$ sudo ln -s /etc/nginx/sites-available/project_name /etc/nginx/sites-enabled
# test syntax error
$ sudo nginx -t
# restart
$ sudo systemctl restart nginx
# firewall
$ sudo ufw delete allow 8000
$ sudo ufw allow 'Nginx Full'
```
