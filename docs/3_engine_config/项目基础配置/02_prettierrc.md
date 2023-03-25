---
sidebar_position: 2
---

# 2、Prettier

## 一、 什么是Prettier
>Prettier 是一款代码格式化工具，可以自动格式化代码，使其符合一定的规范。在项目中使用 Prettier 可以提高代码的可读性和可维护性。在 .prettierrc 文件中，可以配置 Prettier 的规则，例如缩进大小、换行符类型、引号类型等。具体的配置项

## 二、 Prettier官网地址
>Prettier 的官方文档: https://prettier.io/docs/en/options.html

>Prettier 中文文档: https://www.prettier.cn/docs/install.html

## 三、prettierrc配置
```js
// .prettierrc配置
module.exports = {
  /** 每一行的宽度 */
  printWidth: 120,
  // 强制使用单引号
  singleQuote: true,
  // 字符串使用单引号
  singleQuote: true,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 箭头函数参数括号
  arrowParens: 'avoid',
  // 在jsx中把'>' 是否单独放一行
  bracketSameLine: true,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 crlf/lf/auto
  endOfLine: 'auto'
}
```

## 四、prettierignore配置
```js
// .prettierrc配置
// Prettier 会忽略的文件

.DS_Store
node_modules
font
dist-ssr
*.local
*.d.ts
```