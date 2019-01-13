class Paddle {
  constructor(height, width, bottom, left, speed){
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
    this.speed = speed;
  }
  leftMove() {
    this.left -= this.speed;
  }
  rightMove() {
    this.left += this.speed;
  }
  increaseSpeed() {
    this.speed += 5;
  }
  decreaseSpeed() {
    this.speed -= 5;
  }
}

class Ball {
  constructor(height, width, bottom, left, speed){
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
    this.deltaLeft = speed;
    this.deltaBottom = speed;
  }
  move() {
    this.left += this.deltaLeft;
    this.bottom += this.deltaBottom;
  }
  changeLeftDirection() {
    this.deltaLeft = -this.deltaLeft;
  }
  changeBottomDirection() {
    this.deltaBottom = -this.deltaBottom;
  }
  increaseSpeed() {
    this.speed += 5;
  }
  decreaseSpeed() {
    this.speed -= 5;
  }
}