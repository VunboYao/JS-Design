let timeChunk = function (ary, fn, count) {
  let obj, t;
  let len = ary.length
  let start = function () {
    for (let i = 0; i < Math.min(count || 1, ary.length); i++) {
      let obj = ary.shift()
      fn(obj)
    }
  }
  return function () {
    t = setInterval(function () {
      if (ary.length === 0) {
        return clearInterval(t)
      }
      start()
    }, 200)
  }
}
