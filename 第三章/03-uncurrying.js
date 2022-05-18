// * 实现一
/* Function.prototype.uncurrying = function () {
  let self = this // self === Array.prototype.push
  return function () {
    let obj = Array.prototype.shift.call(arguments) // 截取第一个参数
    return self.apply(obj, arguments) // 拼接返回
  }
} */

// * 实现二
Function.prototype.uncurrying = function () {
  let self = this
  return function () {
    return Function.prototype.call.apply(self, arguments)
  }
}

let push = Array.prototype.push.uncurrying()
let obj = {
  'length': 2,
  '0': 1,
  '1': 2
}
push(obj, 3)
console.log(obj);
