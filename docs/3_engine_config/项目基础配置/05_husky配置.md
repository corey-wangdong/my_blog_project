---
sidebar_position: 5
---

# 5、husky

## 1. 安装 （https://typicode.github.io/husky/#/?id=install）
```shell
pnpm install husky -D
```

## 启用git钩子
```
npx husky install
```

## 完成后你的项目根目录下应该会有一个.husky文件夹，编辑package.json文件
```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```