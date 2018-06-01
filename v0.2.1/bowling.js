class Bowling {
  constructor() {
    this.pins = [];
  }

  roll(pins) {
    this.pins.push(pins);
  }

  isSpareBonus(index) {
    if (index < 2) return false;
    var isSpare = (this.pins[index - 1] + this.pins[index - 2] == 10);
    return isSpare;
  }
  
  score() {
    var sum = 0;
    for (var i in this.pins) {
      sum += this.pins[i];
      if (this.isSpareBonus(i)) sum += this.pins[i];
    }
    return sum;
  }
}
