var myImage = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()


var proxyImage = (function () {
  var img = new Image
  img.onload = function () {
    console.log(this);
    myImage.setSrc(this.src)
  }

  return {
    setSrc: function (src) {
      myImage.setSrc('http://127.0.0.1:5555/%E7%AC%AC06%E7%AB%A0-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/foo.jpg')
      img.src = src
    }
  }
})()
proxyImage.setSrc('https://t7.baidu.com/it/u=2701208059,2978966657&fm=193&f=GIF')
