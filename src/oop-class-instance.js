"use strict"

// class

class Man {
  constructor(name, age) {
    // properties
    this._name = name
    this._age = age
  }

  // getter
  get name() {
    return this._name
  }

  get age() {
    return this._age
  }

  get greeting() {
    return `hi my name is ${this.name} and i'm ${this.age}`
  }

  // setter
  set age(value) {
    if (value <= 0 || typeof value === "string") {
      this._age = 1
    } else {
      this._age = value
    }
  }

  // method
  say(words) {
    return `i say ${words}`
  }
}

// instance
const man = new Man("Marq", 28)

man.age = "test"

console.group("class-instance")

console.log(man.greeting)
console.log(man.say("i MotoGp champ"))

console.groupEnd()
