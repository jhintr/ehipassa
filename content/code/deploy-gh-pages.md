---
title: "Deploy Project Pages from gh-pages branch"
date: 2020-05-13T15:50:19+08:00
lang: en
---


> [Deployment of Project Pages from Your gh-pages branch](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch)

部署 GitHub Project Pages 的一种简单方法是将生成的网页放到 GitHub 指定的 `docs/` 文件夹（Hugo 默认 `public/`），只需要在 `config.toml` 中写入：

```toml
publishDir = "docs"
```

但这样的缺点是，把源文档和生成的网页混淆在一起进行版本管理。所以本文采取的方法是将两者放在不同的分支，然后分开维护版本历史。

`master` 分支忽略 `public/` 文件夹：

```bash
echo "public/" >> .gitignore
```

初始化 `gh-pages` 分支： (*cf*. [*orphan branch*](https://git-scm.com/docs/git-checkout/#git-checkout---orphanltnewbranchgt))

```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```

然后，利用 git 的 [*worktree*](https://git-scm.com/docs/git-worktree) 功能，将 `gh-pages` 分支切入到 `public/` 文件夹中。

```bash
rm -rf public
git worktree add -B gh-pages public origin/gh-pages
```

最后，生成网页并提交：

```bash
hugo
cd public && git add --all && git commit -m "Publishing to gh-pages" && cd ..
git push origin gh-pages
```

### 关于域名

默认的域名为 `<uname>.github.io/<repo_name>`。如果想用其它的域名，需创建一个 `static/CNAME` 文件，在其中写入域名。然后在 DNS 设置中添加 `CNAME` 记录，值仍为 `<uname>.github.io`。