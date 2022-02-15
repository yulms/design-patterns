/*
Три типа полиформизма:

1. Параметрический полиморфизм
Вызов ОДНОГО и того же кода для ВСЕХ допустимых типов (полиморфных) аргументов.
Благодаря динамической типизации в js представлен из коробки.
const numbers1 = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
append(numbers1, numbers2); // (3, 4, 5, 8, 2, 9)
const strings1 = l('cat', 'dog');
const strings2 = l('table', 'milk', 'phone');
append(strings1, strings2); // (cat, dog, table, milk, phone)
Поскольку мы работаем в динамическом языке нам без разницы с какими типами работать.

2. Ad-hoc полиморфизм
1 + 1; // 2
'cat' + 'dog'; // catdog
В зависимости от типов аргументов применяется разная реализация какой-то операции.

3. Полиморфизм подтипов
Позволяет вызывать РАЗНЫЙ код для РАЗНЫХ иерархий типов.
пример ниже
*/

// abstract
class Cache {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    if (proto.constructor === Cache) {
      throw new Error('Abstract class should not be instanciated');
    }
    this.elementsCount = 0;
  }

  read(key) {
    throw new Error(`Method is not implemented: read(${key})`);
  }

  add(key, value) {
    throw new Error(`Method is not implemented: add(${key}, ${value})`);
  }
}

class MapCache extends Cache {
  constructor() {
    super();
    this.data = new Map();
  }

  read(key) {
    return this.data.get(key);
  }

  add(key, value) {
    this.data.set(key, value);
    this.elementsCount = this.data.size;
    console.log(`Element is added to Map, current elements: ${this.elementsCount}`);
  }
}

class ObjectCache extends Cache {
  constructor() {
    super();
    this.data = {};
  }

  read(key) {
    return this.data[key];
  }

  add(key, value) {
    this.data[key] = value;
    this.elementsCount = Object.keys(this.data).length;
    console.log(`Element is added to Object, current elements: ${this.elementsCount}`);
  }
}

const mapCache = new MapCache();
mapCache.add('key1', 'val1');
mapCache.add('key2', 'val2');

const objectCache = new ObjectCache();
objectCache.add('key1', 'val1');
objectCache.add('key2', 'val2');
objectCache.add('key3', 'val3');
