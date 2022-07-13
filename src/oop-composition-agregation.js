"use strict"

// composition start

class Engine {
  run() {
    return `this engine is run`
  }
}

class Wheel {
  run() {
    return "wheel is run"
  }
}

class Bike {
  constructor(timer) {
    // agregation
    this.timer = timer

    // composition
    this.engine = new Engine()
    this.wheel = []
    this.wheel.push(new Wheel())
    this.wheel.push(new Wheel())
  }

  // delegation
  run() {
    console.log(this.engine.run())
    this.engine.run()
    this.wheel.forEach((el) => console.log(el.run()))
  }
}

// composition end

// agregation start

class Timer {
  add() {
    return "add timer"
  }
}

// agregation end

const timer = new Timer()
const motorcycle = new Bike(timer)

console.group("oop-composition-agregation")
motorcycle.run()
console.groupEnd()
