// Base classes
// https://github.com/HowProgrammingWorks/Observer/blob/master/JavaScript/3-pure-oop.js

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    observer.observable = this;
    this.observers.push(observer);
    return this;
  }

  notify(data) {
    if (this.observers.length === 0) return;
    this.observers.forEach((observer) => observer.update(data));
  }

  complete() {
    throw new Error('Observable.complete is not implemented');
  }
}

class Observer {
  update() {
    throw new Error('Observer.update is not implemented');
  }
}

// Usage

const randomChar = () => String
  .fromCharCode(Math.floor((Math.random() * 25) + 97));

class CharStream extends Observable {
  constructor() {
    super();
    this.timer = setInterval(() => {
      const char = randomChar();
      this.notify(char);
    }, 200);
  }

  complete() {
    clearInterval(this.timer);
  }
}

class CharStreamObserver extends Observer {
  constructor() {
    super();
    this.count = 0;
    this.observable = null;
  }

  update(char) {
    process.stdout.write(char);
    this.count += 1;
    if (this.count > 50) {
      this.observable.complete();
      process.stdout.write('\n');
    }
  }
}

const observer = new CharStreamObserver();
const observable = new CharStream().subscribe(observer);
console.dir({ observer, observable });
