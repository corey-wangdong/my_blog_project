# webpack 热更新原理

## 1. Webpack 热更新是指在开发过程中，当代码发生变化时，Webpack 可以自动重新编译代码，并将新的模块发送到浏览器端，从而实现浏览器端的无刷新更新。

## 2. Webpack 热更新的原理是通过在浏览器端建立一个 WebSocket 连接，将编译后的代码通过该连接发送到浏览器端，然后通过一些技术手段将新的模块替换掉旧的模块，从而实现热更新。

## 3. 在 Webpack 中，可以通过配置 webpack-dev-server 来启用热更新。具体配置如下：

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    hot: true
  }
};
```

## 4. 这里的 hot 选项表示启用热更新。同时，还需要在入口文件中添加热更新的代码：

```js
// index.js
if (module.hot) {
  module.hot.accept();
}

```

## 5. 这里的 module.hot 表示当前模块是否支持热更新，module.hot.accept() 表示接受新的模块。
