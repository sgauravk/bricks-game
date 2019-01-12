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
    this.speed = speed;
  }
  moveUp() {
    this.bottom += this.speed;
  }
  moveDown() {
    this.bottom -= this.speed;
  }
  increaseSpeed() {
    this.speed += 5;
  }
  decreaseSpeed() {
    this.speed -= 5;
  }
}