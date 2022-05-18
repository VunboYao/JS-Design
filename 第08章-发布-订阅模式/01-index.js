var salesOffices = {}

salesOffices.clientList = []

salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)

}

salesOffices.trigger = function () {
  var key = Array.prototype.shift.call(arguments),
    fns = this.clientList[key]
  if (!fns || fns.length === 0) {
    return false
  }

  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments)
  }
}

salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅 88 平方米房子的消息
console.log( '价格= ' + price ); // 输出： 2000000
});
salesOffices.listen( 'squareMeter110', function( price ){ // 小红订阅 110 平方米房子的消息
console.log( '价格= ' + price ); // 输出： 3000000
});
salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布 88 平方米房子的价格
salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布 110 平方米房子的价格
