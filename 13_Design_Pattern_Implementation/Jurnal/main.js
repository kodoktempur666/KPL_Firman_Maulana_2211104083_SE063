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