var event2 = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }

    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  },
  remove(key, fn) {
    var fns = this.clientList[key]
    if (!fns) {
      return false
    }

    if (!fn) {
      fns && (fns.length = 0)
    } else {
      // 删除特定的回调
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
}

var installEvent = function (obj) {
  for (var i in event2) {
    obj[i] = event2[i]
  }
}

var salesOffices = {}
installEvent(salesOffices)
salesOffices.listen('sq88', fn1 = function (price) {
  console.log('price = ' + price);
})
salesOffices.listen('sq100', fn2 = function (price) {
  console.log('price = ' + price);
})
salesOffices.remove('sq88', fn1)
salesOffices.trigger('sq100', 3000000); // 输出：3000000
