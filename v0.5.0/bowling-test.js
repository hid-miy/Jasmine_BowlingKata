mocha.setup('bdd');
var assert = chai.assert;
var expect = chai.expect;
chai.Should();


var bowling = null;
beforeEach(function() {
  
  /* Test helper method */
  Bowling.prototype.rollMany = function(pins, times) {
    while (times--) this.roll(pins);
  }
  Bowling.prototype.rollByArray = function(pinsArray) {
    pinsArray.forEach(pin => {this.roll(pin)});
  }

  bowling = new Bowling();
})


describe('Testing basic functions', function() {

  it("gutter is 1 time, score should be 0", function() {
    bowling.roll(0);
    expect(bowling.score()).to.eql(0);
  });

  it("1 pin is 1 time, score should be 1", function() {
    bowling.roll(1);
    expect(bowling.score()).to.eql(1);
  });

  it("1 pin is 20 time, score is 20", function() {
    bowling.rollMany(1, 20);
    expect(bowling.score()).to.eql(20);
  });

})

describe('Testing spare functions', function() {

  it("after spare, score should add a bonus", function() {
    bowling.rollByArray([5, 5, 3]);
    expect(bowling.score()).to.eql(10 + 3 + 3);
  });

  it("after false spare, score should not add a bonus", function() {
    bowling.rollByArray([2, 5, 5, 2]);
    expect(bowling.score()).to.eql(7 + 7);
  });

})

describe('Testing strike functions', function() {

  it("after strike, score should add a bonus", function() {
    bowling.rollByArray([10, 3, 3]);
    expect(bowling.score()).to.eql(10 + 6 + 6);
  });

  it("perfect game, score should be 300", function() {
    bowling.rollMany(10, 12);
    expect(bowling.score()).to.eql(300);
  });

})


mocha.checkLeaks();
mocha.run();
