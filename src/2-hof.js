/* eslint-disable no-unused-vars */

// Higher Order Functions

// const filter = (predicate, xs) => xs.filter(predicate)
// const is = (type) => (x) => Object(x) instanceof type

const result = filter(is(Number), [0, "1", 2, null])

function filter(func, arr) {
  return arr.filter(func)
}

function is(type) {
  return function (value) {
    return Object(value) instanceof type
  }
}

console.log(result)
