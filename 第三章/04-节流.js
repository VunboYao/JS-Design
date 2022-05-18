let throttle = function (fn, interval) {
  let __self = fn, // 保存需要被延迟执行的函数引用
    timer, // 定时器
    firstTime = true // 是否第一次调用
  return function () {
    let args = arguments,
      __me = this

    if (firstTime) { // if first execute, dont't need delay
      __self.apply(__me, args)
      return firstTime = false
    }

    if (timer) { // if timer exist, indicate last delay call dont't OK
      return false
    }

    timer = setTimeout(function () { // delay a time execute
      clearTimeout(timer)
      timer = null
      __self.apply(__me, args)
    }, interval || 500)
  }
}
let fun = function () {
  console.log('test');
}

let c = throttle(fun, 1000)

for (let i = 0; i < 5; i++) {
  console.log(i);
  c()
}
