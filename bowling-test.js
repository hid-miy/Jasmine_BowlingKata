mocha.setup('bdd');
var assert = chai.assert;
var expect = chai.expect;
chai.Should();


describe('Basic test', function() {

  it("all gutter, score is 0", function() {
    var sut = new Bowling()
    sut.rollMany(0, 20)
    expect(sut.score()).to.eql(0);
  });

  it("1 roll 1pin, score is 1", function() {
    var sut = new Bowling()
    sut.roll(1)
    expect(sut.score()).to.eql(1);
  });

  it("20 roll 1pin, score is 20", function() {
    var sut = new Bowling()
    sut.rollMany(1, 20)
    expect(sut.score()).to.eql(20);
  });

})

describe('Spare test', function() {

  it("if spare, score add after 1 roll", function() {
    var sut = new Bowling()
    sut.rollByArray([5, 5, 5])
    expect(sut.score()).to.eql(20);
  });

  it("if spare, score add after 1 roll", function() {
    var sut = new Bowling()
    sut.rollByArray([0, 10, 5])
    expect(sut.score()).to.eql(20);
  });

  it("false spare", function() {
    var sut = new Bowling()
    sut.rollByArray([2, 5, 5, 2])
    expect(sut.score()).to.eql(14);
  });

})

describe('Strike test', function() {

  it("if Strike, score add after 2 roll", function() {
    var sut = new Bowling()
    sut.rollByArray([2, 2, 10, 3, 3])
    expect(sut.score()).to.eql(20);
  });

})

mocha.checkLeaks();
mocha.run();
