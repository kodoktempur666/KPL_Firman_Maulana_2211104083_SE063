class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      throw new Error("Gunakan getDataSingleton() untuk mendapatkan instance.");
    }
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static getDataSingleton() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  getSemuaData() {
    return this.DataTersimpan;
  }

  printSemuaData() {
    console.log("Data Tersimpan:");
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }

  addSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid");
    }
  }
}

module.exports = PusatDataSingleton;