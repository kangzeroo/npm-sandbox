
let fn = () => "Unchanged fnA"

exports.setFn = (a) => {
  fnA = a
}

exports.triggerFn = (str) => {
  return fn(str)
}
