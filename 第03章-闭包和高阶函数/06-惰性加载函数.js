// * 传统
// 缺点：每次都判断
{
  let addEvent = function (elem, type, handler) {
    if (window.addEventListener) {
      return elem.addEventListener(type, handler, false)
    }
    if (window.attachEvent) {
      return elem.attachEvent('on' + type, handler)
    }
  }
}

// * 进阶

// 缺点：如果一次没用，就是浪费
{
  let addEvent = (function () {
    if (window.addEventListener) {
      return function (elem, type, handler) {
        elem.addEventListener(type, handler, false)
      }
    }
    if (window.attachEvent) {
      return function (elem, type, handler) {
        elem.attachEvent('on' + type, handler)
      }
    }
  })()
}

// !good
{
  let addEvent = function (elem, type, handler) {
    if (window.addEventListener) {
      // 重写期望的addEvent函数
      addEvent = function (elem, type, handler) {
        elem.addEventListener(type, handler, false)
      }
    } else if (window.attachEvent) {
      addEvent = function (elem, type, handler) {
        elem.attachEvent('on' + type, handler)
      }
    }
    // 再次进入时，不再存在条件分支语句
    addEvent(elem, type, handler)
  }
}
