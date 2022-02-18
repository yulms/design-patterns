/*
Стратегия — это поведенческий паттерн проектирования,
который определяет семейство схожих алгоритмов и
помещает каждый из них в собственный класс,
после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.
*/

/// ////////////////////////////////
// Абстрактный пример
/// ////////////////////////////////

class StrategyManager {
  #strategy;

  set strategy(strategy) {
    this.#strategy = strategy;
  }

  get strategy() {
    return this.#strategy;
  }

  doAction() {
    this.#strategy.doAction();
  }
}

class Strategy1 {
  doAction() {
    console.log('Strategy1 runned!');
  }
}

class Strategy2 {
  doAction() {
    console.log('Strategy2 runned!');
  }
}

// Usage
const strategyManager = new StrategyManager();
strategyManager.strategy = new Strategy1();
strategyManager.doAction();
strategyManager.strategy = new Strategy2();
strategyManager.doAction();
