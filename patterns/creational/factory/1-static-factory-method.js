export default class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }

  static create(type) {
    if (type === 'X5') return new this(type, 108000, 300);
    if (type === 'X6') return new this(type, 111000, 320);

    return null;
  }
}

// Usage
const x5 = Bmw.create('X5');
const x6 = Bmw.create('X6');
console.table([x5, x6]);
