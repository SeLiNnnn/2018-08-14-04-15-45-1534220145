// Write your cade below:
module.exports = function main(a, b) {
  // console.log(a - Math.floor(a / b) * b)
  if (b === 0) {
    console.log("除数不能为0")
  } else {
    return a - Math.floor(a / b) * b
  }
}
