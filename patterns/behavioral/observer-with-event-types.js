// Наблютатель с типом события

export default class Observer {
  observers = [];

  subscribe(eventType, observer) {
    if (!eventType || typeof observer !== 'function') throw new Error();
    this.observers.push([eventType, observer]);
  }

  unsubscribe(eventType, observer) {
    if (!eventType || typeof observer !== 'function') throw new Error();

    let targetIndex;
    this.observers.find(([subscribedEventType, subscribedObserver], index) => {
      if (subscribedEventType === eventType && subscribedObserver === observer) {
        targetIndex = index;
        return true;
      }
      return false;
    });
    if (!Number.isInteger(targetIndex)) return;

    this.observers.splice(targetIndex, 1);
  }

  notify(eventType, data) {
    const eventObservers = this.observers.filter(([subscribedEventType]) => eventType === subscribedEventType);
    eventObservers.forEach(([, observer]) => observer(data));
  }
}

// Usage
class Publisher {
  events = new Observer();

  doJob() {
    this.events.notify('do job', 'publisher did the job');
  }
}

class Listener {
  constructor(publisher) {
    this.publisher = publisher;
    this.onEventReceive = this.onEventReceive.bind(this);
    this.onEventReceive2 = this.onEventReceive2.bind(this);
  }

  subscribe() {
    this.publisher.events.subscribe('do job', this.onEventReceive);
  }

  subscribe2() {
    this.publisher.events.subscribe('do job', this.onEventReceive2);
  }

  unsubscribe() {
    this.publisher.events.unsubscribe('do job', this.onEventReceive);
  }

  unsubscribe2() {
    this.publisher.events.unsubscribe('do job', this.onEventReceive2);
  }

  onEventReceive(data) {
    console.log('onEventReceive Данные получены!', data);
  }

  onEventReceive2(data) {
    console.log('onEventReceive2 Данные получены!', data);
  }
}

const publisher = new Publisher();
const listener = new Listener(publisher);
listener.subscribe();
listener.subscribe();
listener.subscribe();
listener.subscribe2();
listener.subscribe2();
listener.unsubscribe();
listener.unsubscribe2();
publisher.doJob();
