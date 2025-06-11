<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XIV**  
**CLEAN CODE**

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

## 1. REFACTORING DENGAN STANDAR CODE
Dengan mengikuti standard code yang digunakan (misal C# dengan standar dari .NET), pastikan kode yang
dikumpulkan memenuhi faktor-faktor berikut:
- Naming convention
    - Variable / Property / Attribute
    - Method / Function / Procedure
- White space dan indentation
- Variable / attribute declarations
- Comments

---
- sayaTubeUser.js
```js
// Subject
const SayaTubeVideo = require('./SayaTubeVideo');

class SayaTubeUser {
  constructor(username) {
    if (username === null) throw new Error("Username tidak boleh null");
    if (username.length > 100) throw new Error("Username maksimal 100 karakter");

    this.id = this.#generateRandomId();
    this.username = username;
    this.uploadedVideos = [];
  }

  // Generate ID acak untuk user
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan video dengan validasi
  addVideo(video) {
    try {
      if (video === null) throw new Error("Video tidak boleh null");
      if (!(video instanceof SayaTubeVideo)) throw new Error("Tipe video tidak valid");
      if (video.playCount >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count video mencapai batas maksimal");
      }

      if (this.uploadedVideos.length >= 10) {
        throw new Error("Maksimal 10 video per user");
      }

      this.uploadedVideos.push(video);
    } catch (error) {
      console.error(`[User Error] ${error.message}`);
    }
  }

  // Hitung total play count semua video
  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount, 0
    );
  }

  // Cetak judul maksimal 8 video
  printAllVideoPlayCount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.slice(0, 8).forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;
```
- sayaTubeVideo.js
```js
class SayaTubeVideo {
  constructor(title) {
    if (title === null) throw new Error("Judul video tidak boleh null");
    if (title.length > 200) throw new Error("Judul video maksimal 200 karakter");

    this.id = this.#generateRandomId();
    this.title = title;
    this.playCount = 0;
  }

  // Generate ID acak untuk video
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan jumlah play dengan validasi
  increasePlayCount(amount) {
    try {
      if (amount < 0) throw new Error("Play count tidak boleh negatif");
      if (amount > 25000000) throw new Error("Maksimal penambahan 25.000.000 per panggilan");

      if (this.playCount + amount > Number.MAX_SAFE_INTEGER) {
        throw new Error("Overflow play count");
      }

      this.playCount += amount;
    } catch (error) {
      console.error(`[Video Error] ${error.message}`);
    }
  }

  // Cetak detail video
  printVideoDetails() {
    console.log(`Video Details:
ID: ${this.id}
Title: ${this.title}
Play Count: ${this.playCount.toLocaleString()}\n`);
  }
}

module.exports = SayaTubeVideo;
```
- main.js

```js
const SayaTubeUser = require('./sayaTubeUser');
const SayaTubeVideo = require('./sayaTubeVideo');

const namaPraktikan = "rosyid";

const filmList = [
  "Si Juki The Movie Panitia Hari Akhir",
  "Si Juki The Movie: Harta Pulau Monyet",
  "Habibie & Ainun",
  "Rudy Habibie",
  "Habibie & Ainun 3",
  "Doraemon Stand By Me",
  "Avengers: Endgame",
  "Spider-Man: No Way Home",
  "The Batman",
  "Minions 2"
];

try {
  const user = new SayaTubeUser(namaPraktikan);

  // Tambahkan 10 video
  filmList.forEach((film) => {
    const title = `Review Film ${film} oleh ${namaPraktikan}`;
    const video = new SayaTubeVideo(title);

    video.increasePlayCount(Math.floor(Math.random() * 25000000));
    user.addVideo(video);
  });

  console.log("\nDaftar Video (Maks 8):");
  user.printAllVideoPlayCount();

  // Uji overflow
  console.log("\nTesting Overflow:");
  const stressVideo = new SayaTubeVideo("Stress Test");
  for (let i = 0; i < 100; i++) {
    stressVideo.increasePlayCount(25000000);
  }

  // Uji precondition gagal
  console.log("\nTesting Precondition:");
  try {
    new SayaTubeVideo("a".repeat(201));
  } catch (e) {
    console.log(e.message);
  }

  try {
    user.addVideo(null);
  } catch (e) {
    console.log(e.message);
  }

} catch (error) {
  console.error(`[System Error] ${error.message}`);
}
```
---
**Output**

![Image](https://github.com/user-attachments/assets/dc2a784e-c827-4c59-b008-f504bb9104e7)

- Kode ini merupakan hasil refactoring dari Tugas Jurnal Modul 6, yang sebelumnya menggabungkan kelas SayaTubeVideo dan SayaTubeUser dalam satu file dengan struktur penulisan yang belum sepenuhnya mengikuti standar kode yang baik. Pada proses refactoring ini, kode telah dipisahkan ke dalam beberapa file terstruktur (SayaTubeVideo.js, SayaTubeUser.js, dan main.js) dan disesuaikan dengan praktik penulisan JavaScript modern, seperti penggunaan naming convention camelCase, indentasi yang konsisten, serta penambahan komentar untuk menjelaskan fungsi-fungsi utama dalam program. Selain itu, refactoring ini meningkatkan keterbacaan dan kemudahan pemeliharaan kode tanpa mengubah fungsionalitas utama, seperti validasi input, penanganan exception, dan pembatasan jumlah video yang dapat ditambahkan. Dengan struktur yang lebih terorganisir ini, program menjadi lebih profesional, modular, dan selaras dengan prinsip clean code.
---