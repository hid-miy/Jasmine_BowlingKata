class Bowling {
  constructor() {
    this.pins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.current = 0;
  }

  roll(pins) {
    this.pins[this.current] = pins;
    this.current++;
  }

  isSpare(index) {
    return (this.pins[index] + this.pins[index + 1] == 10);
  }

  isStrike(index) {
    return (this.pins[index] == 10);
  }

  score() {
    var sum = 0;
    var index = 0;
    for (var frame = 0; frame < 10; frame++) {
      if (this.isStrike(index)) {
        sum += 10 + this.pins[index + 1] + this.pins[index + 2];
        index += 1;
      } else if (this.isSpare(index)) {
        sum += 10 + this.pins[index + 2];
        index += 2;
      } else {
        sum += this.pins[index] + this.pins[index + 1];
        index += 2;
      }
    }
    return sum;
  }
}
