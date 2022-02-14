// abstract: Product
class Transport {
  deliver() {
    throw new Error('Method not implemented');
  }
}

class Truck extends Transport {
  deliver() {
    console.log('deliver cargo by truck');
  }
}

class Ship extends Transport {
  deliver() {
    console.log('deliver cargo by ship');
  }
}

// abstract: Creator
class Logistics {
  static createTrasport() {
    throw new Error('Method not implemented');
  }
}

class RoadLogistics extends Logistics {
  static createTrasport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  static createTrasport() {
    return new Ship();
  }
}

// Usage
const transport1 = RoadLogistics.createTrasport();
transport1.deliver();
const transport2 = SeaLogistics.createTrasport();
transport2.deliver();
