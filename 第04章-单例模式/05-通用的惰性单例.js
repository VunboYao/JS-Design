let getSingle = function (fn) {
  let result
  return () => result || (result = fn.apply(this, arguments))
}

let createLoginLayer = () => {
  let div = document.createElement('div')
  div.innerHTML = 'i am login window'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

let createSingleLoginLayer = getSingle(createLoginLayer)
