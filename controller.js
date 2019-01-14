const withPx = value => value + "px";

const drawBall = function(document, ball) {
  let ballDiv = document.getElementById("ball_1");
  ballDiv.style.height = withPx(ball.height);
  ballDiv.style.width = withPx(ball.width);
  ballDiv.style.bottom = withPx(ball.bottom);
  ballDiv.style.left = withPx(ball.left);
};

const createBallDiv = function(Ball) {
  let ballDiv = document.createElement("div");
  ballDiv.id = "ball_1";
  ballDiv.className = "ball";
  return ballDiv;
};

const drawPaddle = function(document, paddle) {
  let paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = withPx(paddle.height);
  paddleDiv.style.width = withPx(paddle.width);
  paddleDiv.style.bottom = withPx(paddle.bottom);
  paddleDiv.style.left = withPx(paddle.left);
};

const createPaddleDiv = function(paddle) {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  return paddleDiv;
};

const drawObject = function(document, ID, details) {
  let objectDiv = document.getElementById(ID);
  objectDiv.style.width = withPx(details.width);
  objectDiv.style.height = withPx(details.height);
  objectDiv.style.left = withPx(details.left);
  objectDiv.style.bottom = withPx(details.bottom);
};

const createBricksDiv = function(document, divID, divClass) {
  let bricksDiv = document.createElement("div");
  bricksDiv.id = divID;
  bricksDiv.className = divClass;
  return bricksDiv;
};

const drawBricks = function(document, screen, bricks) {
  bricks.map(brick => {
    let brickDiv = createBricksDiv(document, brick.id, "brick");
    screen.appendChild(brickDiv);
    drawObject(document, brick.id, brick);
  });
};

const handleKeyEvent = function(document, paddle) {
  if (event.key == "ArrowLeft" && paddle.left > 0) {
    paddle.leftMove();
    drawPaddle(document, paddle);
  }
  if (event.key == "ArrowRight" && paddle.left < 1050) {
    paddle.rightMove();
    drawPaddle(document, paddle);
  }
};

const moveBall = function(bricks, ball) {
  setInterval(() => {
    if (ball.left > 1168 || ball.left < 2) {
      ball.changeLeftDirection();
    }
    if (ball.bottom > 668 || ball.bottom < 25) {
      ball.changeBottomDirection();
    }
    ball.move();
    vanishBrick(bricks, ball);
    drawBall(document, ball);
  }, 30);
};

const createDiv = function(paddle, ball) {
  let screen = document.getElementById("screen");
  let paddleDiv = createPaddleDiv(paddle);
  let ballDiv = createBallDiv(ball);
  screen.appendChild(paddleDiv);
  screen.appendChild(ballDiv);
  screen.focus();
  return screen;
};

const isInBetween = function(upper, lower, number) {
  return number > lower && number < upper;
};

const vanishBrick = function(bricks, ball) {
  bricks.forEach(brick => {
    if (isInBetween(brick.left + brick.width, brick.left, ball.left) &&
      brick.bottom == ball.bottom) {
      bricks.splice(bricks.indexOf(brick),1);
      document.getElementById(brick.id).remove();
      ball.changeBottomDirection();
    }
    if (isInBetween(brick.bottom + brick.height, brick.bottom, ball.bottom) &&
      isInBetween(brick.left + brick.width , brick.left, ball.left)) {
      bricks.splice(bricks.indexOf(brick),1);
      document.getElementById(brick.id).remove();
      ball.changeLeftDirection();
    }
  });
};

const initialize = function() {
  let paddle = new Paddle(25, 150, 5, 540, 15);
  let ball = new Ball(28, 28, 30, 600, 10);
  let screen = createDiv(paddle, ball);
  drawPaddle(document, paddle);
  drawBall(document, ball);
  let brick = new Bricks(5, 10);
  let bricks = brick.createBricks();
  drawBricks(document, screen, bricks);
  moveBall(bricks, ball);
  screen.onkeydown = handleKeyEvent.bind(null, document, paddle);
};

window.onload = initialize;