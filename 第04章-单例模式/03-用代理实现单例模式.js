
let CreateDiv = function () {
  let instance
  let CreateDiv = function (html) {
    this.html = html
    this.init()
  }
  CreateDiv.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
}

let ProxySingletonCreateDiv = (function () {
  var instance
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()
let a = new ProxySingletonCreateDiv('sev1')
let b = new ProxySingletonCreateDiv('sev2')
console.log(a === b);
