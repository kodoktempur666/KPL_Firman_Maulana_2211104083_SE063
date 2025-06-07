// Subject
class WeatherStation {
  constructor() {
    this.temperature = 0;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.temperature));
  }

  setTemperature(temp) {
    console.log(`Temperatur baru: ${temp}°C`);
    this.temperature = temp;
    this.notify();
  }
}

// Observer
class TemperatureDisplay {
  update(temp) {
    console.log(`Display: Temperatur saat ini adalah ${temp}°C`);
  }
}

class TemperatureLogger {
  update(temp) {
    console.log(`Logger: Menyimpan temperatur ${temp}°C ke log.`);
  }
}

// Main
const weatherStation = new WeatherStation();

const display = new TemperatureDisplay();
const logger = new TemperatureLogger();

weatherStation.subscribe(display);
weatherStation.subscribe(logger);

weatherStation.setTemperature(25);
weatherStation.setTemperature(30);