/*
Паттерн Состояние предлагает создать отдельные классы для каждого состояния,
в котором может пребывать объект,
а затем вынести туда поведения, соответствующие этим состояниям.
Очень важным нюансом, отличающим этот паттерн от Стратегии, является то,
что и контекст, и сами конкретные состояния могут знать друг о друге
и инициировать переходы от одного состояния к другому.
*/

class PowerOffState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {
    console.log('PowerOffState, touch... Nothing');
  } // nothing

  swipe() {
    console.log('PowerOffState, swipe... Nothing');
  } // nothing
}

class ScreenDisabledState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {
    console.log('ScreenDisabledState, touch... Screen on');
    // Включаем экран. В конструктор нужно передать сам экран.
    this.screen.state = new this.screen.states.ScreenOn(this.screen);
    // Оповещаем текущую программу об активации
    this.screen.notify('touch');
  }

  swipe() {
    console.log('ScreenDisabledState, swipe...');
  } // nothing
}

class ScreenOnState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {
    console.log('ScreenOnState, touch...');
    this.screen.notify('touch');
  }

  swipe() {
    console.log('ScreenOnState, swipe...');
    this.screen.notify('swipe');
  }
}

class MobileScreen {
  constructor() {
    // Список состояний нужен для переключений между ними
    // Иначе возможно появление циклических зависимостей внутри состояний
    this.states = {
      PowerOff: PowerOffState,
      ScreenDisabled: ScreenDisabledState,
      ScreenOn: ScreenOnState,
    };
    // Начальное состояние
    // Внутрь передается текущий объект
    // Это нужно для смены состояний
    this.state = new this.states.PowerOff(this);
  }

  notify() {}

  powerOn() {
    // Предыдущее состояние нас не волнует
    // Все данные хранятся в самом экране
    // Объекты-состояния не имеют своих данных
    this.state = new this.states.ScreenDisabled(this);
  }

  touch() {
    this.state.touch();
  }

  swipe() {
    this.state.swipe();
  }
}

const screen = new MobileScreen();
screen.swipe();
screen.touch();

screen.powerOn();
screen.swipe();
screen.touch();
screen.swipe();
