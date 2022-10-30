# docusaurus 使用介绍

## 添加顶部导航

1. 在 constant.js 文件中添加导航路由

- 例如添加 面试题的 导航

```js
  {
    id: "interview",
    docId: "interview",
    name: "面试题",
  },
```

2. 在根目录 docs 文件中创建 面试题的对应文件夹，名称与上面 id 相同

- 如果配置了 docId， 则在对应的文件加下创建 `${docId}`.md 的文档即可
- 如果希望有子目录，则在父目录下创建对应的子目录，然后在对应字目录下创建 _category_.json 文件，在里面配置 子目录显示的位置顺序和名称

```js
{
  "label": "Vue 面试题",
  "position": 1
}
```

- 在子目录下再创建需要子目录现实的 md 文件即可
