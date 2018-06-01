mocha.setup('bdd');
var assert = chai.assert;
var expect = chai.expect;
chai.Should();


var sut = null;
beforeEach(function() {
  sut = new Bowling()
})

describe('Basic test', function() {

  it("all gutter, score is 0", function() {
    sut.rollMany(0, 20)
    expect(sut.score()).to.eql(0);
  });

  it("1 roll 1pin, score is 1", function() {
    sut.roll(1)
    expect(sut.score()).to.eql(1);
  });

  it("20 roll 1pin, score is 20", function() {
    sut.rollMany(1, 20)
    expect(sut.score()).to.eql(20);
  });

})

describe('Spare test', function() {

  it("if spare, score add after 1 roll", function() {
    sut.rollByArray([5, 5, 1])
    expect(sut.score()).to.eql(12);
  });

  it("if spare, score add after 1 roll", function() {
    sut.rollByArray([0, 10, 5])
    expect(sut.score()).to.eql(20);
  });

  it("two time spares", function() {
    sut.rollByArray([0, 10, 5, 5, 4])
    expect(sut.score()).to.eql(33);
  });

  it("false spare", function() {
    sut.rollByArray([2, 5, 5, 2])
    expect(sut.score()).to.eql(14);
  });

})

describe('Strike test', function() {

  it("if Strike, score add after 2 roll", function() {
    sut.rollByArray([2, 2, 10, 1, 2])
    expect(sut.score()).to.eql(20);
  });

})


mocha.checkLeaks();
mocha.run();
