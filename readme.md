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
