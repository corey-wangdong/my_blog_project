---
sidebar_position: 4
---

# 4、eslintrc

## 一、什么是 eslintrc
>ESLint 是一款 JavaScript 代码检查工具，可以用于检查 JavaScript 代码是否符合一定的规范。在项目中使用 ESLint 可以提高代码的可读性和可维护性

## 二、eslintrc 官方文档
>ESLint 的官方文档：https://eslint.org/docs/rules/

>ESLint 中文文档：http://eslint.cn/docs/user-guide/getting-started

## 三、eslintrc配置
```js
// .eslintrc配置
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'babel'
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
    'react-hooks/exhaustive-deps': [0]
  }
};

```

## 四、eslintignor配置
```js
// .eslintignor配置
node_modules
front/
test
build/
config/

```