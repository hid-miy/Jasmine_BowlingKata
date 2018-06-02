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

  it("score example from http://www.tokibow.com/tbchp/score.htm", function() {
    bowling.rollByArray([6, 3, 9, 0, 0, 3, 8, 2, 7, 3, 10, 9, 1, 8, 0, 10, 10, 6, 4]);
    expect(bowling.score()).to.eql(150);
  });

  it("score example from http://renai-jyoujyu.net/bowling-score", function() {
    bowling.rollByArray([8, 0, 7, 2, 0, 5, 7, 3, 9, 1, 10, 8, 2, 7, 0, 10, 10, 7, 3]);
    expect(bowling.score()).to.eql(152);
  });

  it("score example from http://renai-jyoujyu.net/bowling-score", function() {
    bowling.rollByArray([10, 10, 10, 10, 8, 0, 0, 0, 7, 3, 0, 9, 8, 1, 5, 5, 7]);
    expect(bowling.score()).to.eql(159);
  });

  it("score example from https://nageyo.com/score/", function() {
    bowling.rollByArray([9, 1, 8, 0, 10, 10, 9, 0, 10, 10, 10, 7, 3, 9, 1, 10]);
    expect(bowling.score()).to.eql(199);
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
