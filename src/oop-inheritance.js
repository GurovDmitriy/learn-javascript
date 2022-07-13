"use strict"

class Man {
  constructor(name, age) {
    this._name = name
    this.age = age
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value < 1 ? 1 : value
  }

  get bio() {
    return `${this.name} ${this.age}`
  }

  baseSkill(speed) {
    return `walk with ${speed} km/h`
  }
}

class Rider extends Man {
  constructor(name, age, bike) {
    super(name, age)

    this.bike = bike
  }

  get bike() {
    return this._bike
  }

  set bike(bike) {
    this._bike = bike
  }

  baseSkill(speed) {
    return `ride with ${speed} km/h`
  }
}

const man = new Man("Michael Jackson", 20, "Honda")
const rider = new Rider("Marq", 28, "Honda")

console.group("oop-inheritance")
console.log(man.baseSkill(10))
console.log(rider.baseSkill(300))
console.groupEnd()
