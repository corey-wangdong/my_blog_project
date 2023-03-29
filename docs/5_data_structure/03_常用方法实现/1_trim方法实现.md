---
sidebar_position: 1
---

# 1、trim方法实现


```javascript
// 方式一
String.prototype.my_trim = function () {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
```