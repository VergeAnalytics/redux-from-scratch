const { compose, pipe} = require("lodash/fp")


//functional

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()


//HOC composition of given functions
const transform = pipe(trim,toLowerCase,wrapInDiv) // Left -> Right
const transform1 = compose(toLowerCase,wrapInDiv, trim) //Right -> Left

console.log(transform("    Hello World    "))
console.log(transform1("    Hello World    "))