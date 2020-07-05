const { pipe} = require("lodash/fp")


//functional

const trim = str => str.trim()
// const wrapInSpan = str => `<span>${str}</span>` // Currying in effetive approach
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim,toLowerCase,wrap("span")) 

console.log(transform("    Hello World    "))
