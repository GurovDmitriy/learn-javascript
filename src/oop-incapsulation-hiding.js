"use strict"

// class

class Man {
  constructor(name, age, city) {
    // properties
    this._name = name
    this._age = age
    this._wins = []
    this._city = city
  }

  // getter setter

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value < 0 ? 1 : value
  }

  get greeting() {
    return `hi my name is ${this._name} and i'm ${this.age}`
  }

  get location() {
    return `i live in ${this._city}`
  }

  get wins() {
    return "my wins " + this._wins.join(",")
  }

  // method
  say(words) {
    return `i say ${words}`
  }

  addWin(value) {
    this._wins.push(value)
  }

  clearWin() {
    this._wins = []
  }
}

// instance
const man = new Man("Marq", 28, "Spain")

man.city = "Catalunya"
man.name = "Rossi"

man.addWin(1)
man.addWin(2)

console.group("incapsulation-hiding")
console.log(man.greeting)
console.log(man.location)
console.log(man.wins)
console.groupEnd()
