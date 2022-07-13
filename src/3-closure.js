// Closure

function logger() {
  let count = 0

  return function (value) {
    console.log(`Your value ${value}`)
    count += 1
    console.log(`counter ${count}`)
  }
}

const result = logger()

result(5)
result(3)
