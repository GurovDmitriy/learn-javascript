const promise = new Promise((resolve, reject) => {
  // some work

  try {
    const date = Date.now()
    const delay = 3000

    while (Date.now() < date + delay) {
      // work
    }

    resolve("work end")
  } catch (error) {
    reject(error)
  }
})

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

// Promise.all([promise1, promise2...]).then(...)
// Promise.allSettled([promise1, promise2...]).then(...)

// const urls = [
//   "https://jsonplaceholder....",
//   "https://jsonplaceholder....",
//   "https://jsonplaceholder....",
// ]

// Promise.all(urls.map(url => {
//   return fetch(url).then(res => res.json())
// })).then(...)
