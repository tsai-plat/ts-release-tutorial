# CI Wiki

> CI workflow

## initial project

> Step by step initialize a Typescript project

```bash
# 1
pnpm init

npx tsc --init
# Configure Jest
npx ts-jest config:init

# rename jest.config.js to jest.config.ts

# install dependencies
pnpm add -D typescript @types/jest @types/node ts-jest jest

# edit package scripts add `test: jest`
# write some functions

# verify jest
pnpm test

pnpm build
################### TS + JEST END #####################
```

### Eslint9.x

```bash
pnpm add -D eslint @eslint/js eslint-plugin-import typescript-eslint
# pnpm add -D typescript-eslint

## 绝大部份扩展和插件没有做适配，因此需要通过以下官方包来兼容旧的配置
pnpm install -D @eslint/compat @eslint/eslintrc

## eslint 8.x

pnpm add eslint@8.56.0 -D --save-peer

## prettier
pnpm add -D eslint-plugin-import typescript-eslint @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier

# verify
```

---

## Husky9.x

```bash

pnpm add -D @commitlint/cli @commitlint/config-conventional husky lint-staged

npx husky init

echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

```

## Changeset

> 用户 changeset 代替 changelog

- install

```bash
pnpm add -D @changesets/cli  @changesets/changelog-git
npx changeset init
```

- 配置说明

```js
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.5/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false, // changeset 在publish 不主动 git add
  "fixed": [],
  "linked": [],
  "access": "restricted",  // 内网 restricted ,开源 public
  "baseBranch": "main", // 项目主分支
  "updateInternalDependencies": "patch",
  "ignore": [] // 不需要变动的 version 包
}

```

## changeset 发布模式

```bash
# 正常提交
pnpm changeset

# 进入预发布模式 <?> alpha beta or next
pnpm exec changeset pre enter beta

# ... 预发布操作

# 退出
pnpm exec changeset pre exit
```

### Changeset 流程

1. git commit -am ''
2. npx changeset # 发布版本 生成 临时markdown
3. npx changeset version 将临时写入 changelog
