describe("ball", function() {
  let ball = new Ball(28,28,30,600,10);
  let paddle = new Paddle(25,150,5,540,15);

  describe("move", function() {

    it("should increase left of ball by 1", function() {
      ball.move();
      chai.assert.equal(ball.left, 610);
    });

    it("should increase bottom of ball by 1", function() {
      ball.move();
      chai.assert.equal(ball.bottom, 50);
    });

  });

  describe("Paddle test", function() {

    it("should return a value decreased by 10 for any given number", function() {
      paddle.leftMove();
      chai.assert(paddle.leftMove, 440);
    });

    it("should return a value increased by 10 for any given number", function() {
      paddle.rightMove();
      chai.assert(paddle.rightMove, 460);
    });

  });

});