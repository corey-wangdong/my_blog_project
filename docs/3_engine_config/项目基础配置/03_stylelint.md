---
sidebar_position: 3
---

# 3、stylelint

## 一、什么是 stylelint
>stylelint 是一款 CSS 代码检查工具，可以用于检查 CSS 代码是否符合一定的规范。在项目中使用 stylelint 可以提高代码的可读性和可维护性

## 二、stylelint 官方文档
>stylelint 的官方文档：https://stylelint.io/user-guide/rules/list

## 三、stylelint配置
```js
// .stylelintrc配置
{
  "extends": [
    "stylelint-config-standard"
  ],
  "ignore": [
    ":global"
  ],
  "rules": {
    "value-no-vendor-prefix": [
      true,
      {
        "ignoreValues": [
          "box"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "global"
        ]
      }
    ],
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "color-function-notation": null
  },
  "customSyntax": "postcss-scss"
}
```

## 四、stylelintignor配置
```js
// .stylelintignore配置
front/
*.js
*.jsx
*.tsx
*.ts

```