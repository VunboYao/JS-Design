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
  }
}

var installEvent = function (obj) {
  for (var i in event2) {
    obj[i] = event2[i]
  }
}

var salesOffices = {}
installEvent(salesOffices)
salesOffices.listen('sq88', function (price) {
  console.log('price = ' + price);
})
salesOffices.listen('sq100', function (price) {
  console.log('price = ' + price);
})
salesOffices.trigger('sq88', 2000000); // 输出：2000000
salesOffices.trigger('sq100', 3000000); // 输出：3000000
