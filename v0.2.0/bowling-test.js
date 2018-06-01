mocha.setup('bdd');
var assert = chai.assert;
var expect = chai.expect;
chai.Should();


var bowling = null;
beforeEach(function() {
  
  /* Test helper method */
  Bowling.prototype.rollMany = function(pins, times) {
    while (times--) this.roll(pins)
  }

  bowling = new Bowling()
})


describe('Testing basic functions', function() {

  it("gutter is 1 time, score should be 0", function() {
    bowling.roll(0)
    expect(bowling.score()).to.eql(0);
  });

  it("1 pin is 1 time, score should be 1", function() {
    bowling.roll(1)
    expect(bowling.score()).to.eql(1);
  });

  it("1 pin is 20 time, score should be 20", function() {
    bowling.rollMany(1, 20)
    expect(bowling.score()).to.eql(20);
  });

})

describe('Testing spare functions', function() {

  it("after spare, score should add a bonus", function() {
    bowling.roll(5)
    bowling.roll(5)
    bowling.roll(3)
    expect(bowling.score()).to.eql(16);
  });

})


mocha.checkLeaks();
mocha.run();
