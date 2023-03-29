---
sidebar_position: 2
---

# 2、deepClone方法实现

## 数据
```js
let objData = {
  num: 123,
  str: 'xxxx',
  bol: false,

  nullVal: null,

  fun: function () { console.log('1234') },

  reg: /2/,
  date: new Date(),

  set: new Set([10, 34]),
  map: new Map([['name', 'corey'], ["age", "25"]]),

  arr: [2, 4, 5],
  arrObj: [{ name: 'corey' }],
  obj: { age: 18 }
}

```

## 实现方式
```js
// 方式一
const deepClone = (obj) => {
  if (typeof obj !== 'object' || !obj) return obj;
  const constructor = obj.constructor;
  let params
  if (obj instanceof RegExp || obj instanceof Date) {
    params = obj;
  }
  const temp = new constructor(params);
  if (obj instanceof Map) {
    for (let [key, value] of obj) {
      temp.set(deepClone(key), deepClone(value))
    }
  } else if (obj instanceof Set) {
    for (let value of obj) {
      temp.add(deepClone(value))
    }
  } else {
    for (let key in obj) {
      temp[key] = deepClone(obj[key]);
    }
  }
  return temp
}

let cloneObj = deepClone(objData);
console.log('cloneObj---', cloneObj, 'objData---', objData);
```


