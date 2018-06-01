class Bowling {
  constructor() {
    this.pins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.current = 0
  }

  roll(pins) {
    this.pins[this.current] = pins
    this.current++
  }

  isSpare(index) {
  }

  isStrike(index) {
  }

  score() {
    var sum = 0
    var index = 0;
    for (var frame = 0; frame < 10; frame++) {
      sum += this.pins[index] + this.pins[index + 1]
      index += 2
    }
    return sum
  }
}
