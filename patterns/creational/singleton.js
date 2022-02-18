class Singleton {
  constructor(name) {
    if (this.constructor.instance) {
      return this.constructor.instance;
    }
    this.constructor.instance = this;

    this.name = name;
  }
}

// Usage
const nick = new Singleton('Nick');
const mike = new Singleton('Mike');

console.log(nick.name, mike.name, nick === mike); // Nick Nick true

// or just export object instance
