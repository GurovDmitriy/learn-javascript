"use strict"

// ad-hoc

class Calculator {
  add(a, b) {
    return a + b
  }
}

const calc = new Calculator()

console.group("oop-polymorphism")
console.log(calc.add(1, 1), calc.add("1", "1"))
console.groupEnd()

// parametric

class Man {
  greeting() {
    return "hi i'm man"
  }
}

class Rider extends Man {
  greeting() {
    return "hi i'm rider"
  }
}

const man = new Man()
const rider = new Rider()

console.group("oop-polymorphism")
const friends = [man, rider]
friends.forEach((el) => console.log(el.greeting()))
console.groupEnd()
