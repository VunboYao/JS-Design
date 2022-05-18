let CreateDiv = (function () {
  let instance
  let CreateDiv = function (html) {
    if (instance) {
      return instance
    }
    this.html = html
    this.init()
    return instance = this
  }
  CreateDiv.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
  return CreateDiv
})()

let a = new CreateDiv('sev1')
let b = new CreateDiv('sev2')
console.log(a === b);
