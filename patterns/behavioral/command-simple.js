// https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command

// Receiver
class Bulb {
  turnOn() {
    console.log('Bulb has been lit');
  }

  turnOff() {
    console.log('Darkness!');
  }
}

// Command
// в этом варианте команда делегирует выполнение операции получателю
class TurnOnCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

class TurnOffCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

// Invoker
class RemoteControl {
  execute(command) {
    command.execute();
  }
}

// Usage
const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.execute(turnOn); // Bulb has been lit!
remote.execute(turnOff); // Darkness!
