const withPx = value => value + "px";

const drawBall = function(document, ball){
  let ballDiv = document.getElementById("ball_1");
  ballDiv.style.height = withPx(ball.height);
  ballDiv.style.width = withPx(ball.width);
  ballDiv.style.bottom = withPx(ball.bottom);
  ballDiv.style.left = withPx(ball.left);
};

const createBallDiv = function(Ball){
  let ballDiv = document.createElement("div");
  ballDiv.id = "ball_1";
  ballDiv.className = "ball";
  return ballDiv;
}

const drawPaddle = function(document, paddle){
  let paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = withPx(paddle.height);
  paddleDiv.style.width = withPx(paddle.width);
  paddleDiv.style.bottom = withPx(paddle.bottom);
  paddleDiv.style.left = withPx(paddle.left);
};

const createPaddleDiv = function(paddle){
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  return paddleDiv;
}

const handleKeyEvent = function(document, paddle){
  if(event.key == "ArrowLeft" && paddle.left > 0){
    paddle.leftMove();
    drawPaddle(document, paddle);
  }
  if(event.key == "ArrowRight" && paddle.left < 1050){
    paddle.rightMove();
    drawPaddle(document, paddle);
  }
};

const moveBall = function(ball){
  setInterval(() => {
    if(ball.left > 1170 || ball.left < 0){
      ball.changeLeftDirection();
    }
    if(ball.bottom > 670 || ball.bottom < 25){
      ball.changeBottomDirection();
    }
    ball.move();
    drawBall(document, ball);
  },30)
}

const createDiv = function(paddle, ball){
  let screen = document.getElementById("screen");
  let paddleDiv = createPaddleDiv(paddle);
  let ballDiv = createBallDiv(ball);
  screen.appendChild(paddleDiv);
  screen.appendChild(ballDiv);
  screen.focus();
  return screen;
}

const initialize = function(){
  let paddle = new Paddle(25,150,5,540,15);
  let ball = new Ball(28,28,30,600,10);
  let screen = createDiv(paddle, ball);
  drawPaddle(document, paddle);
  drawBall(document, ball);
  moveBall(ball);
  screen.onkeydown = handleKeyEvent.bind(null,document, paddle);
}

window.onload = initialize;