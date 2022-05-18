let strategies = {
  isNonEmpty: (value, errorMsg) => {
    if (value === '') {
      return errorMsg
    }
  },
  minLength: (value, length, errorMsg) => {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: (value, errorMsg) => {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}


let registerForm = document.getElementById('registerForm')
registerForm.onSubmit = function () {
  let errorMsg = validateFunc()
  if (errorMsg) {
    console.log(errorMsg);
    return false
  }
}



let validateFunc = function () {
  let validator = new Validator()
  validator.add(registerForm.userName, 'isNonEmpty', 'username is can not empty')
  validator.add(registerForm.password, 'minLength:6', 'password minLength is 6')
  validator.add(registerForm.phoneNumber, 'isMobile', 'phoneNumber incorrect')
  let errorMsg = validator.start()
  return errorMsg
}

var Validator = function () {
  this.cache = []
}
Validator.prototype.add = function (dom, rule, errorMsg) {
  let ary = rule.split(':')
  this.cache.push(function () {
    var strategy = ary.shift()
    ary.unshift(dom.value)
    ary.push(errorMsg)
    return strategies[strategy].apply(dom, ary)
  })
}
