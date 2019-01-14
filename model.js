class Paddle {
  constructor(height, width, bottom, left, speed) {
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
  constructor(height, width, bottom, left, speed) {
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

class Brick {
  constructor(height, width, left, bottom, ID) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.id = ID;
  }
}

class Bricks {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }
  createRow(row, left, bottom) {
    let bricks = [];
    for (let column = 0; column < this.columns; column++) {
      let brickId = "brick_" + column + "_" + row;
      let brick = new Brick(28, 110, left, bottom, brickId);
      bricks.push(brick);
      left += 120;
    }
    return bricks;
  }
  createBricks() {
    let bricks = [];
    let left = 5;
    let bottom = 480;
    for (let rows = 0; rows < this.rows; rows++) {
      let row = this.createRow(rows, left, bottom);
      bricks = bricks.concat(row);
      left = 5;
      bottom += 40;
    }
    return bricks;
  }
}
