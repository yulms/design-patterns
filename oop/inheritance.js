class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getSide() {
    return this.height;
  }
}

const square = new Square(100);
console.dir(square);
console.log(square.getArea());
console.log(square.getSide());
