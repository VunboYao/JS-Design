let each = function (ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i])
  }
}

each([1, 2, 3, 4], (i, n) => {
  console.log(i, n);
})

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
