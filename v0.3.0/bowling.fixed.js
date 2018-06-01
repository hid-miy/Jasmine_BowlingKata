class Bowling {
  constructor() {
    this.pins = []
    this.isFrameFirst = []
  }

  roll(pins) {
    this.pins.push(pins)

    // record where the first roll for current frame
    var index = this.isFrameFirst.length
    var isFrameFirst = (index == 0 || !this.isFrameFirst[index - 1])
    this.isFrameFirst.push(isFrameFirst)
  }

  isSpareBonus(index) {
    if (index < 2) return false
    if (!this.isFrameFirst[index]) return false
    var isSpare = (this.pins[index - 1] + this.pins[index - 2] == 10)
    return isSpare
  }
  
  // isStrikeBonus(index) {
  //   if (index > 0 && this.pins[index - 1] == 10 && this.isFrameFirst[index - 1]) return true
  //   if (index > 1 && this.pins[index - 2] == 10 && this.isFrameFirst[index - 2]) return true
  //   return false
  // }
  isStrikeBonus(index) {
    for (var i = 1; i <= 2; i++) {
      if (index >= i
        && this.pins[index - i] == 10
        && this.isFrameFirst[index - i]) return true
    }
    return false
  }

  score() {
    var sum = 0
    for (var i in this.pins) {
      sum += this.pins[i]
      if (this.isSpareBonus(i) || this.isStrikeBonus(i)) {
        sum += this.pins[i]
      }
    }
    return sum
  }
}
