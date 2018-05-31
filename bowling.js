class Bowling {
  constructor() {
    this.pins = []
    this.isFrameFirst = []
  }

  roll(pins) {
    this.pins.push(pins)

    var current = this.isFrameFirst.length
    var isFrameFirst = (current == 0 || !this.isFrameFirst[current - 1])
    this.isFrameFirst.push(isFrameFirst)
  }
  
  rollMany(pins, times) {
    for (var i = 1; i <= times; i++) {
      this.roll(pins)
    }
  }
  
  rollByArray(pinsArray) {
    for (var i in pinsArray) {
      this.roll(pinsArray[i])
    }
  }
  
  isPreviousSpare(index) {
    var sum = 0
    if (this.isFrameFirst[index]) {
      if (index > 0) sum += this.pins[index - 1]
      if (index > 1) sum += this.pins[index - 2]
    }
    return (sum == 10)
  }

  score() {
    var sum = 0
    for (var i in this.pins) {
      sum += this.pins[i]
      if (this.isPreviousSpare(i)) {
        sum += this.pins[i]
      }
    }
    return sum
  }
}
