// Closure

// const addTo = (a) => (b) => a + b
function addTo(a) {
  return function (b) {
    return a + b
  }
}

const addToFive = addTo(5)

const result = addToFive(3)
console.log(result)
