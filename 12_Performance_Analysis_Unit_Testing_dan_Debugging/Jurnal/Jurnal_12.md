<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XII**  
**PERFORMANCE ANALYSIS, UNIT TESTING, DAN DEBUGGING**

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

## A. MEMBUAT GUI SEDERHANA DAN
Pada project yang telah dibuat sebelumnya:
- Buatlah suatu Form atau tampilan GUI sederhana dengan dua buah textbox, satu button dan
satu label untuk menampilkan output.
- Tambahkan satu method dengan nama “CariNilaiPangkat(int a, int b)” yang menerima dua input
dan mengembalikan nilai berupa hasil pangkat ab dengan melakukan iterasi (tanpa
menggunakan library atau fungsi bawaan).
- Pada method tersebut terdapat aturan sebagai berikut (berbeda dengan aturan pangkat
normal):
    - Apabila input b adalah 0 maka nilai return selalu 1 (walapuun nilai a adalah 0)
    - Apabila input b adalah bilangan negatif, maka nilai return adalah -1
    - Apabila input b lebih dari 10 atau input a lebih dari 100 maka nilai return adalah -2
    - Apabila hasil pangkat melebihi batas maksimal bilangan positif integer (misal dengan
checked pada C#) maka nilai return adalah -3
- Pada tampilan GUI, pada saat tombol ditekan, maka label output akan menampilkan hasil
pangkat dari pemanggilan fungsi “CariNilaiPangkat” dari dua input textbox.
---

- logic.js
```js
function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;

    // Cek overflow untuk 32-bit signed int
    if (result > 2147483647) return -3;
  }

  return result;
}

module.exports = { CariNilaiPangkat };       

```
- test/test.js

```js
const assert = require('assert');
const { CariNilaiPangkat } = require('../logic');

// Branch coverage: semua kondisi
try {
  assert.strictEqual(CariNilaiPangkat(2, 3), 8);
  assert.strictEqual(CariNilaiPangkat(5, 0), 1);
  assert.strictEqual(CariNilaiPangkat(4, -2), -1);
  assert.strictEqual(CariNilaiPangkat(101, 2), -2);
  assert.strictEqual(CariNilaiPangkat(2, 11), -2);
  assert.strictEqual(CariNilaiPangkat(9, 30), -3);

  console.log("✅ Semua unit test berhasil.");
} catch (error) {
  console.error("❌ Test gagal:", error.message);
}

```
- renderer.js

```js
const { CariNilaiPangkat } = require('./logic');

window.proses = function () {
  const a = parseInt(document.getElementById("angkaA").value);
  const b = parseInt(document.getElementById("angkaB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("output").innerText = `Hasil: ${hasil}`;
};

```

- main.js

```js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

- index.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Modul 12</title>
</head>
<body>
  <h2>Masukkan Angka A:</h2>
  <input type="number" id="angkaA" />
  <h2>Masukkan Angka B:</h2>
  <input type="number" id="angkaB" />
  <button onclick="proses()">Hitung Pangkat</button>
  <p id="output">Hasil: </p>

  <script src="renderer.js"></script>
</body>
</html>
```

**Output**

![Image](https://github.com/user-attachments/assets/6a668a30-f37c-4f3d-8d97-507f49d5b204)
---
![Image](https://github.com/user-attachments/assets/b4dbbc61-4b8a-4a4b-8271-fc120cd66c5e)
---
![Image](https://github.com/user-attachments/assets/14e27fe8-3f97-4805-b5aa-421c0335d680)

- Fungsi CariNilaiPangkat adalah fungsi logika yang digunakan untuk menghitung pangkat dari dua bilangan bulat dengan aturan khusus, seperti mengembalikan 1 jika pangkat bernilai nol, -1 jika pangkat negatif, -2 jika input melebihi batas yang ditentukan, dan -3 jika hasil perhitungan melebihi batas maksimum bilangan integer 32-bit. Fungsi ini diimplementasikan menggunakan iterasi tanpa menggunakan pustaka bawaan dan dipisahkan dalam file logic.js agar dapat digunakan baik dalam aplikasi GUI berbasis Electron maupun dalam pengujian unit test menggunakan Node.js. Pemisahan ini penting karena kode untuk GUI mengandung elemen seperti window yang tidak dikenali di lingkungan Node.js. Dengan pemisahan logika ini, fungsi dapat diuji secara menyeluruh melalui berbagai skenario pengujian untuk memastikan bahwa semua cabang logika berfungsi dengan baik, sekaligus memungkinkan integrasi dengan tampilan antarmuka pengguna.
---