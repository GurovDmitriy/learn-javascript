/* eslint-disable no-unused-vars */
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b

console.log(curriedMultiply(3)(4))

const multiplyBy5 = curriedMultiply(5)

console.log(multiplyBy5(5))
