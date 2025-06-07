<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XIII**  
**DESIGN PATTERN IMPLEMENTATION**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**FIRMAN MAULANA (2211104083)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## 1. MENJELASKAN SALAH SATU DESIGN PATTERN
Buka halaman web https://refactoring.guru/design-patterns/catalog kemudian baca design pattern
dengan nama “Observer”, dan jawab pertanyaan berikut ini (dalam Bahasa Indonesia):
- Berikan salah satu contoh kondisi dimana design pattern “Observer” dapat digunakan
- Berikan penjelasan singkat mengenai langkah-langkah dalam mengimplementasikan design pattern
“Observer”
- Berikan kelebihan dan kekurangan dari design pattern “Observer”

---
- pusatDataSingleton.js
```js
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
```

- main.js

```js
const PusatDataSingleton = require('./pusatDataSingleton');

// A. Buat dua variabel data1 dan data2
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// B. Tambah data ke data1
data1.addSebuahData("Firman Maulana - Anggota 1");
data1.addSebuahData("Nama2 - Anggota 2");
data1.addSebuahData("Asisten - Rizqi");

// C. Cetak isi data2
console.log("Cetak data dari data2:");
data2.printSemuaData();

// D. Hapus data asisten pada data2
data2.hapusSebuahData(2); // index ke-2 asisten

// E. Cetak ulang isi data dari data1
console.log("\nCetak ulang dari data1 setelah penghapusan:");
data1.printSemuaData();

// F. Cetak jumlah data dari keduanya
console.log(`\nJumlah elemen data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah elemen data2: ${data2.getSemuaData().length}`);
```

---
**Output**

![Image](https://github.com/user-attachments/assets/e71ae6c8-3d9c-4da7-8279-596ef6976602)

- Program ini mengimplementasikan pola desain Singleton untuk memastikan hanya ada satu instance dari kelas PusatDataSingleton yang mengelola data yang tersimpan. Kelas ini memiliki metode untuk menambah, menghapus, dan menampilkan data, serta untuk mendapatkan instance tunggal melalui getDataSingleton(). Dalam contoh program utama, dua variabel, data1 dan data2, mengambil instance yang sama dari PusatDataSingleton. Data ditambahkan ke data1, dan isi data2 kemudian dicetak. Setelah itu, data yang ada di data2 dihapus, dan hasilnya dicetak ulang di data1, menunjukkan bahwa perubahan pada data2 mempengaruhi data1, karena keduanya merujuk ke instance yang sama. Program juga menampilkan jumlah elemen yang ada di kedua variabel tersebut untuk mengonfirmasi bahwa keduanya tetap saling terhubung.
---