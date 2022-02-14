// Наблюдатель без типов событий (есть недостаток у unsubscribe - метод удалит всех одинаковых подписчиков)

export default class Observer {
  observers = [];

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((subscribedObserver) => subscribedObserver !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

// Usage
class JobBoard {
  #event = new Observer();

  subscribe(jobSeeker) {
    this.#event.subscribe(jobSeeker);
  }

  addJob(jobPosting) {
    this.#event.notify(jobPosting);
  }
}

const jobBoard = new JobBoard();
jobBoard.subscribe((job) => console.log(`New job: ${job}`));
jobBoard.addJob('Best job is here');
