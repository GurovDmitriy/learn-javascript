/* eslint-disable no-unused-vars */
const compose = (f, g) => (a) => f(g(a))

const sum = (num) => num + 1

console.log(compose(sum, sum)(5))
