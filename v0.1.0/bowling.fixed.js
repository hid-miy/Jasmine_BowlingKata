class Bowling {
  constructor() {
    this.pins = []
  }

  roll(pins) {
    this.pins.push(pins)
  }
  
  score() {
    var sum = 0
    for (var i in this.pins) {
      sum += this.pins[i]
    }
    return sum
  }
}
