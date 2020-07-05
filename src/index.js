
//Non functional
let input = "    Javascript    "
let output = "<div>"+input.trim()+"</div>"
console.log(output)



//functional

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()
console.log(toLowerCase(wrapInDiv(trim("    Hello World    "))))