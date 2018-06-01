mocha.setup('bdd');
var assert = chai.assert;
var expect = chai.expect;
chai.Should();


var bowling = null;
beforeEach(function() {
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

})


mocha.checkLeaks();
mocha.run();
