/// ////////////////////////////////
// Более приземленный пример
/// ////////////////////////////////

// * Классы поведения (стратегии)
// abstract class
class QuackBehavior {}

class Quack extends QuackBehavior {
  quack() {
    console.log('Кря кря');
  }
}

class MuteQuack extends QuackBehavior {
  quack() {
    console.log('... тишина');
  }
}

// * основной класс. Поведение не наследуется, а предоставляется переданным объектом
// abstract class
class Duck {
  #quackBehavior;

  // сеттер для динамической смены поведения
  setQuackBehavior(quackBehavior) {
    this.#quackBehavior = quackBehavior;
  }

  performQuack() {
    this.#quackBehavior.quack();
  }
}

// * в субклассах устанавливается начальное поведение
class MallardDuck extends Duck {
  constructor() {
    super();
    super.setQuackBehavior(new Quack());
  }
}

class RubberDuck extends Duck {
  constructor() {
    super();
    super.setQuackBehavior(new MuteQuack());
  }
}

const duck = new MallardDuck();
duck.performQuack();
duck.setQuackBehavior(new MuteQuack()); // динамическая смена поведения
duck.performQuack();

const muteDuck = new RubberDuck();
muteDuck.performQuack();
muteDuck.setQuackBehavior(new Quack());
muteDuck.performQuack(); // резиновая утка закрякала!
