# 单例模式
保证一个类仅有一个实例，并提供一个访问它的全局访问点
- 单一职责原则
- 单例模式的核心是确保只有一个实例，并提供全局访问
- 惰性单例：合适的时候才创建对象，并且只创建唯一的一个。
  - 创建对象和管理单例分布在两个不同的方法中

```js
// 单例管理
let getSingle = function (fn) {
  let result
  return () => result || (result = fn.apply(this, arguments))
}
```

# 策略模式
定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换

- 开放-封闭原则

# 代理模式

- vue2:defineProxy
- vue3: proxy
  - readonly
  - computed： 缓存代理
  - reactive
- 虚拟代理和保护代理
- 表格组件封装。传入的 tableData 就是个代理

## 单一职责原则
  - 仅有一个引起它变化的原因
  - 应该将设计分布到细粒度的对象中。高内聚、低耦合

```js
// 单例缓存工厂
var createProxyFactory = function (fn) {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}
```

# 迭代器模式


```js
// 迭代器
let each = function (ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i])
  }
}

each([1, 2, 3, 4], (i, n) => {
  console.log(i, n);
})
```

```js
// iterator迭代器
class Counter {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true, value: undefined }
        }
      },
      return() { // 提前终止迭代器
        return { done: true }
      }
    }
  }
}
```
