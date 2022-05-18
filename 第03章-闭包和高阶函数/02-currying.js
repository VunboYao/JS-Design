let currying = function (fn) {
  let args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

let cost = (function () {
  let money = 0
  return function () {
    for (let i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i]
    }
    return money
  }
})()

cost = currying(cost)
cost(100)
cost(200)
cost(3)
console.log(cost());
