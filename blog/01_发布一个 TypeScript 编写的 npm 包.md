---
slug: 发布一个 TypeScript 编写的 npm 包
title: 发布一个 TypeScript 编写的 npm 包
authors:
  name: Corey
  title: 不懂来时之路, 怎知归去之心？
tags: ['npm包']
---

# 使用TypeScript和Jest从头开始构建和发布一个NPM包。

##  初始化项目

```shell
npm init --yes
```

## 设置一个git仓库，配置 .gitignore
```shell
git init
git add .
git commit -m "initial"
```

## 安装 typescript
```shell
npm i -D typescript
```

## 创建tsconfig.json文件：
```json
{
  "files": ["src/index.ts"],
  "compilerOptions": {
    "target": "es2015",
    "module": "es2015",
    "declaration": true,
    "outDir": "./dist",
    "noEmit": false,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

## 重点设置是以下值：

1. 库的主文件会位于src文件夹下，因此需要这么设置"files": ["src/index.ts"]。
2. "target": "es2015" 确保我们的库支持现代平台，并且不会携带不必要的垫片。
3. "module": "es2015"。我们的模块将是一个标准的ES模块（默认是CommonJS）。ES模式在现代浏览器下没有任何问题；甚至Node从13版本开始就支持ES模式。
4. "declaration": true - 因为我们想要自动生成d.ts声明文件。我们的TypeScript用户将需要这些声明文件。

## 打开package.json，更新scripts的内容：
```json
"scripts": {
  "build": "tsc"
}
```

## 可以用npm run build来运行构建


# 添加测试
```shell
npm i -D jest @types/jest ts-jest
```

## ts-jest包是Jest理解TypeScript所需要的。另一个选择是使用babel，这将需要更多的配置和额外的模块。我们就保持简洁，采用ts-jest。

## 使用如下命令初始化jest配置文件：一直回车
```shell
./node_modules/.bin/jest --init
```

## 这会使用一些默认选项创建jest.config.js文件，并添加"test": "jest"脚本到package.json中。

## 打开jest.config.js，找到以preset开始的行，并更新为：
```json
{
  // ...
  preset: "ts-jest",
  // ...
}
```

## 最后，创建src目录，以及测试文件src/digx.test.ts  写入测试代码

## npm run build

# 发布

1. 如果你还没有在npm上注册，就先注册。

2. 注册成功后，通过你的终端用npm login登录。

3. 我们离发布我们的新包只有一步之遥。不过，还有几件事情需要处理。

4. 首先，确保我们的package.json中拥有正确的元数据。

- 确保main属性设置为打包的文件"main": "dist/index.js"。
- 为TypeScript用户添加"types": "dist/index.d.ts"。
- 因为我们的库会作为ES Module被使用，因此需要指定"type": "module"。
- name和description也应填写。

5. 我们可以做的一件事是使用 .npmignore，列出所有我们不想发布的文件。我更希望有一个"白名单"，所以让我们使用package.json中的files字段来指定我们想要包含的文件。

```json
{
  // ...
  "files": ["dist", "LICENSE", "README.md", "package.json"],
  // ...
}
```

## npm publish --dry-run

## npm publish

## 需要将源换成npm 的
```shell
 npm config set registry https://registry.npmjs.org/
```