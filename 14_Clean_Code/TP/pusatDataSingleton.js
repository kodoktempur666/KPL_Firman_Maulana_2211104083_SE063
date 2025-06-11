class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      throw new Error('Gunakan getDataSingleton() untuk mendapatkan instance.');
    }

    this.dataTersimpan = []; // Menggunakan camelCase
    PusatDataSingleton._instance = this;
  }

  static getDataSingleton() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton(); // Membuat instance jika belum ada
    }

    return PusatDataSingleton._instance;
  }

  getSemuaData() {
    return this.dataTersimpan;
  }

  printSemuaData() {
    console.log('Data Tersimpan:');
    this.dataTersimpan.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }

  addSebuahData(input) {
    this.dataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.dataTersimpan.length) {
      this.dataTersimpan.splice(index, 1);
    } else {
      console.log('Index tidak valid');
    }
  }
}

module.exports = PusatDataSingleton;