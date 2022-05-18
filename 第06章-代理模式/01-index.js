var Flower = function () { }

var xm = {
  sendFlower: function (target) {
    var flower = new Flower()
    target.receiverFlower(flower)
  }
}

var B = {
  receiverFlower: function (flower) {
    A.listenGoodMood(function () {
      A.receiverFlower(flower)
    })
  }
}

var A = {
  receiverFlower: function (flower) {
    console.log('get flower' + flower);
  },
  listenGoodMood: function (fn) {
    setTimeout(function () {
      fn()
    }, 10000)
  }
}
xm.sendFlower(B)
