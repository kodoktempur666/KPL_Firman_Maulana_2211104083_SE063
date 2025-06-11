const PusatDataSingleton = require('./pusatDataSingleton');

// Buat dua variabel dari singleton
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// Tambahkan data menggunakan data1
data1.addSebuahData('Firman Maulana - Anggota 1');
data1.addSebuahData('Nama2 - Anggota 2');
data1.addSebuahData('Asisten - Evan');

// Tampilkan semua data via data2
console.log('Cetak data dari data2:');
data2.printSemuaData();

// Hapus nama asisten dari data2
data2.hapusSebuahData(2); // Hapus index ke-2

// Tampilkan ulang via data1
console.log('\nCetak ulang data1 setelah penghapusan:');
data1.printSemuaData();

// Cetak jumlah elemen
console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);