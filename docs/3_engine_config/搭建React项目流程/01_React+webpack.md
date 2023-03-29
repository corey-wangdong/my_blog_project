---
sidebar_position: 1
---

# 1、React+Webpack（H5 template）

## 采用的技术
> React18 + Webpack5 + TS + scss + less

> 包管理工具：pnpm

## 初始化项目
```bash
$ pnpm init
```

## 添加 .gitignore 文件, 避免没有必要的文件提到我们的 git 仓库

## 集成 react 相关的东西  react react-dom
```bash
$ pnpm add react react-dom --save
```

## react 采用用jsx 的编写方式，浏览器无法识别，需要用到 babel 进行编译
 ```bash
  $ pnpm add babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
  ```

### 在项目的根目录下创建一个命名为 .babelrc 的配置文件
```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": {
            "version": 3,
            "proposals": true
          }
        }
      ],
      ["@babel/preset-react"]
    ]
  }
```

> 在上述安装 babel 相关的插件时有可能看到 “✕ missing peer webpack@>=5” 这样的提示，是因为我们安装的babel 插件中有用到了 webpack5 版本的插件或者 loader，下面开始安装配置 webpack5

## 添加 webpack 来管理项目

- ### 先搭建 webpack，webpack 具体搭建过程见：待定
  ```bash
  $ pnpm add webpack webpack-cli webpack-dev-server html-webpack-plugin -D
  ```

- ### 在 package.json 中配置 script 脚本: 添加 webpack
  ``` json
     "scripts": {
      "start": "webpack serve --config ./webpack/webpack.config.js"
    },
  ```

## 创建 react 项目

- ### 在项目的根目录下创建 public 文件夹, 添加并初始化 index.html 文件
```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>react-h5-template</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>
```

- ### 在项目的根目录下创建 src 文件夹, 添加并初始化 main.jsx 文件
```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<div>React</div>);
```

## 启动项目
``` shell
  pnpm start
```
> 此时项目可以成功启动

## 解决一个小优化： 在.babelrc 文件中给 @babel/preset-react编译增加 runtime: 'automatic'配置
> React更新引入了 react/jsx-runtime，编译工具会自动到React模块中获取并将代码编译为, 通过 runtime: 'automatic'来开启
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

## 脚本里添加 cross-env NODE_ENV 注入环境变量，启动和打包时来区分不同的环境
- ### 先添加 cross-env 包
```shell
pnpm add cross-env -D
```

- ### 配置脚本
```json
"scripts": {
  "start": "cross-env NODE_ENV=development webpack serve --config ./config/webpack/webpack.config.js",
  "build": "webpack --config ./config/webpack/webpack.config.js",
  "build:rc": "cross-env NODE_ENV=rc API_ENV=rc webpack --config ./config/webpack/webpack.config.js",
  "build:prod": "cross-env NODE_ENV=production API_ENV=production webpack --config ./config/webpack/webpack.config.js"
},
```

## 添加样式
- ### 在public 文件夹添加 css文件里添加 reset.css, 初始化样式
> 初始化样式可参考：https://github.com/necolas/normalize.css/blob/master/normalize.css
1. 引入 添加对 css处理的 loader
```shell
  pnpm add style-loader css-loader -D
```

2. 配置 webpack 添加对 css处理的 loader
```js
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }
```

- ### 添加 scss、less 文件
1. 引入 添加对 css处理的 loader
```shell
  pnpm add sass sass-loader less less-loader -D
```

2. 配置 webpack 添加对 scss处理的 loader
```js
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
```

- ### 配置样式使用的方式（项目中使用一种即可）
1. css module 的配置方式
> webpack 中 css-loader 开启 modules 为true

```js
// scss modules 的配置
{
  test: /\.scss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        // modules: true, // 开启 CSS Modules
        modules: {
          // 配置 modules:{} 则默认会开启 css modules 模式
          localIdentName: '[local]--[hash:base64:5]'
        }
      }
    },
    'sass-loader'
  ]
},
// less modules 的配置
{
  test: /\.less$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        // modules: true, // 开启 CSS Modules
        modules: {
          // 配置 modules:{} 则默认会开启 css modules 模式
          localIdentName: '[local]--[hash:base64:5]'
        }
      }
    },
    'less-loader'
  ]
}
```

2. CSS in JS 的配置方式
> 常见的 CSS in JS 库包括 styled-components、emotion、JSS 等。这里以 styled-components 为例
安装 styled-components
```shell
  pnpm add styled-components -D
```

> 项目中使用案例
```jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  color: pink;
`;

function Home() {
  return (
    <div>
       <Container>
        <Text>Hello, World!</Text>
      </Container>
    </div>
  )
}
export default Home
```

> 如果出现 以下报错： 则安装下 core-js 即可
```js
// Module not found: Error: Can't resolve 'core-js/modules/es.object.freeze.js'
```
```shell
pnpm add core-js -D
```

## 项目中添加 TypeScript
1. ### 如果全局没有安装过typescript，则先全局安装下

```shell
pnpm add typescript -g
```

2. ### 安装开发环境依赖
```shell
 pnpm add typescript @types/react @types/react-dom ts-loader -D
```

3. ### 修改webpack 配置，支持对 ts、tsx 文件的识别
> 配置 webpack 的 resolve

```js
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
```

>babel-loader 从 v8.0.0 开始支持解析 TypeScript 文件。在此之前，您需要使用 ts-loader 或 awesome-typescript-loader 来解析 TypeScript 文件

> 配置 webpack 解析ts、tsx 文件的 loader

```js
  module: {
    rules: [
            {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["babel-loader"]
      },
    ]
  }
```

4. ## 创建tsconfig.json 文件
> 使用 tsc --init 来初始化 文件
```shell
 tsc --init
```
> 可以看到生成的 tsconfig.json 文件里有很多的配置, 可以根据需求配置适合自己的, 以下是一个基本简单的配置案例
```json
{
  "compilerOptions": {
    // 基本配置
    "target": "ES5", // 编译成哪个版本的 es
    "module": "ESNext", // 指定生成哪个模块系统代码
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ], // 编译过程中需要引入的库文件的列表
    "allowJs": true, // 允许编译 js 文件
    // "jsx": "react", // 在 .tsx 文件里支持 JSX
    "jsx": "react-jsx", // 在 .tsx 文件里支持 JSX, 在 tsx 文件里可以不引入 import React from "react"
    "isolatedModules": true, // 提供额外的一些语法检查，如文件没有模块导出会报错
    "strict": true, // 启用所有严格类型检查选项
    // 模块解析选项
    "moduleResolution": "node", // 指定模块解析策略
    "esModuleInterop": true, // 支持 CommonJS 和 ES 模块之间的互操作性
    "resolveJsonModule": true, // 支持导入 json 模块
    "baseUrl": "./", // 根路径
    "paths": { // 路径映射，与 baseUrl 关联
      "src/*": [
        "src/*"
      ]
    },
    // 实验性选项
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "emitDecoratorMetadata": true, // 给源码里的装饰器声明加上设计类型元数据
    // 其他选项
    "forceConsistentCasingInFileNames": true, // 禁止对同一个文件的不一致的引用
    "skipLibCheck": true, // 忽略所有的声明文件（ *.d.ts）的类型检查
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入
    "noEmit": true // 只想使用tsc的类型检查作为函数时（当其他工具（例如Babel实际编译）时）使用它
  },
  "exclude": [
    "node_modules",
    "typings"
  ]
}
```

5. ### 修改 .babelrc 配置文件，引入 @babel/preset-typescript 对 TS 文件进行转义
```json
{
  "presets": [
    [
      "@babel/preset-env", //转译包
      {
        "modules": false, //默认都是支持 CommonJS
        "useBuiltIns": "usage",
        "corejs": {
          "version": 3,
          "proposals": true // 使用尚在“提议”阶段特性的 polyfill
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    [
      "@babel/preset-typescript",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

## 添加 .browserslistrc 文件, 配置打包时，babel-loader 针对目标环境进行代码编译
```
# Browsers that we support

> 0.5%
ios >= 8
ie >= 9
android >= 4.4.4
chrome >= 33
```

## 在项目根目录添加 .editorconfig 文件 来规范代码
```
root = true

[**]

# 编码格式
charset = utf-8

# 文件结尾符
end_of_line = lf
insert_final_newline = true

# 去除行尾空白字符
trim_trailing_whitespace = true

# space 缩进
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

## 添加 .prettierrc 文件
```js
module.exports = {
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

## 添加 .eslintrc.js 文件，对代码规范进行检测
1. ### 插件安装
```shell
pnpm add eslint prettier eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-prettier eslint-plugin-babel @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

2. ### eslintrc 配置
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'babel',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    camelcase: 'off',
    'space-before-function-paren': 0,
    // "error"/"off" 开启/关闭prettier
    'prettier/prettier': 'error',
    // 取消函数参数需要重新赋值给另一个变量才能使用
    'no-param-reassign': [0],
    // 取消 { a, b, c } 多个变量需要换行
    'object-curly-newline': [0],

    // 禁用var，用let和const代替
    'no-var': 2,
    // 开启强制单引号
    quotes: [2, 'single'],
    // 强制全等( === 和 !==)
    eqeqeq: 2,
    // 语句强制分号结尾
    semi: [2, 'always'],
    // 禁止出现未使用的变量
    '@typescript-eslint/no-unused-vars': [2],
    'react/react-in-jsx-scope': 0,
    // 箭头函数参数括号，一个参数时可省略括号
    'arrow-parens': [2, 'as-needed'],
    // 箭头函数，箭头前后空格
    'arrow-spacing': [2, { before: true, after: true }],
    // 禁止对象最后一项逗号
    'comma-dangle': [2, 'never'],
    // 单行代码/字符串最大长度
    'max-len': [2, { code: 130 }],
    // jsx缩进2个空格
    'react/jsx-indent': [2, 2],
    // 文件末尾强制换行
    'eol-last': 2,

    // react配置
    // 强制组件方法顺序
    'react/sort-comp': [2],
    // 结束标签，组件省略闭合标签，html不省略闭合标签
    'react/self-closing-comp': [2, { component: true, html: false }],
    // 检查 Hook 的规则，不允许在if for里面使用
    'react-hooks/rules-of-hooks': [2],
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': [0] // <--- THIS IS THE NEW RULE
  }
};
```