<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VI**  
**DESIGN BY CONTRACT & DEFENSIVE PROGRAMING**

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

## A. Soal Nomor 1

MENAMBAHKAN KODE AWAL SAYATUBEVIDEO
Buatlah dua file class baru yang berisi detail sebagai berikut:

- Class bernama “SayaTubeUser” dan “SayaTubeVideo”.
- Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:
- Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video. Pada saat
  objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit (bisa coba gunakan class
  Random bawaan bahasa pemrograman yang digunakan) dan nilai “playCount” akan diisi dengan 0.
- Pada class “SayaTubeVideo”, tambahkan sebuah method dengan nama “IncreasePlayCount” yang
  menerima jumlah angka yang akan ditambahkan ke “playCount”.
- Class “SayaTubeVideo” juga mempunyai method “PrintVideoDetails” yang melakukan print baik
  dari id, title dan playCount dengan format bebas.
- Konstruktor kelas “SayaTubeUser” mirip dengan kelas “SayaTubeVideo”, bedanya adalah property
  Username dan list kosong dari uploadedVideos.
- Pada kelas “SayaTubeUser”, terdapat method GetTotalVideoPlayCount() yang mengembalikan
  jumlah playCount dari semua video yang ada di list uploadedVideos. Selain itu, juga terdapat
  method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos.
- Method terakhir di kelas tersebut adalah PrintAllVideoPlaycount() yang melakukan print terhadap
  semua judul video yang ditambahkan dengan format:
  _ “User: <username>”
  _ “Video 1 judul: <judul_video1>” \* “Video 2 judul: <judul_video2>”
  dst.
- Panggil semua method yang dibuat dari kedua kelas pada fungsi/method utama dengan membuat.
  Gunakan nama panggilan praktikan untuk username dan judul video dengan format “Review Film
  <judul_film> oleh <nama_praktikan>”. Tambahkan minimal 10 judul film yang menurut praktikan
  bagus untuk ditonton.

**Input**

- sayaTubeVideo

  ```js
  const crypto = require("crypto");

  class SayaTubeVideo {
    constructor(title) {
      try {
        if (title == null) throw new Error("Judul tidak boleh null.");
        if (typeof title !== "string")
          throw new Error("Judul harus berupa string.");
        if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    increasePlayCount(count, override = false) {
      try {
        if (typeof count !== "number")
          throw new Error("Input harus berupa angka.");
        if (count < 0) throw new Error("Play count tidak boleh negatif.");
        if (!override && count > 25000000)
          throw new Error("Penambahan play count maksimal 25.000.000.");

        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count melebihi batas maksimum integer aman.");
        }

        this.playCount += count;
      } catch (error) {
        console.error(`[ERROR increasePlayCount] ${error.message}`);
      }
    }

    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }

  module.exports = SayaTubeVideo;


  ```

- sayaTubeUser

  ```js
  class SayaTubeUser {
    constructor(username) {
      try {
        if (username == null) throw new Error("Username tidak boleh null.");
        if (typeof username !== "string")
          throw new Error("Username harus berupa string.");
        if (username.length > 100)
          throw new Error("Username maksimal 100 karakter.");

        this.username = username;
        this.uploadedVideos = [];
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    addVideo(video) {
      try {
        if (video == null) throw new Error("Video tidak boleh null.");
        if (typeof video !== "object")
          throw new Error("Video harus berupa object.");
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count video melebihi batas maksimum.");
        }

        this.uploadedVideos.push(video);
      } catch (error) {
        console.error(`[ERROR addVideo] ${error.message}`);
      }
    }

    getTotalVideoPlayCount() {
      let total = 0;
      for (const video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }

    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
        console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
      }
    }
  }

  module.exports = SayaTubeUser;

  ```
- index.js 

  ```js
  const SayaTubeVideo = require('./sayaTubeVideo');
  const SayaTubeUser = require('./sayaTubeUser');

  function main() {
    const namaPraktikan = "Firman";
    const user = new SayaTubeUser(namaPraktikan);

    const judulFilm = [
      "Interstellar",
      "Inception",
      "The Dark Knight",
      "Parasite",
      "Whiplash",
      "The Social Network",
      "Joker",
      "Everything Everywhere All At Once",
      "The Grand Budapest Hotel",
      "Spider-Man: No Way Home"
    ];

    for (const judul of judulFilm) {
      const video = new SayaTubeVideo(`Review Film ${judul} oleh ${namaPraktikan}`);
      video.increasePlayCount(Math.floor(Math.random() * 1000)); // Simulasi play count
      user.addVideo(video);
    }

    console.log("\n===== Detail Semua Video =====");
    user.printAllVideoPlaycount();

    console.log("\n===== Total Semua Play Count =====");
    console.log(`Total play count: ${user.getTotalVideoPlayCount()}`);
  }

  main();



  ```


**Output**
![Image](https://github.com/user-attachments/assets/91b604ab-2b6c-4fac-8e77-cdbd70a2f06b)

--
## B. Soal Nomor 2

MENAMBAHKAN IMPLEMENTASI DESIGN BY CONTRACT
Pada class yang dibuat sebelumnya tambahkan implementasi design by contract dengan:
- Precondition sebagai berikut ini:
  * Judul video memiliki panjang maksimal 200 karakter.
  * Judul video tidak berupa null.
  * Input penambahan play count maksimal 25.000.000 per panggilan method-nya
  * Input play count tidak berupa bilangan negatif.
  * Nama username memiliki panjang maksimal 100 karakter.
  * Nama username tidak berupa null.
  * Video yang ditambahkan tidak berupa null.
  * Video yang ditambahkan punya playCount yang kurang dari bilangan integer maksimum.
- Exception (tambahkan juga blok try-catch sehingga program tidak berhenti):
  * Dengan menggunakan “checked” keyword pada C# atau operator sepadan pada bahasa
pemrograman lain, pastikan jumlah penambahan play count tidak melebihi batas tertinggi
integer (overflow).
- Postcondition sebagai berikut:
  * Jumlah video maksimal yang di-print adalah 8 pada method PrintAllVideoPlaycount()
- Panggil object dari class SayaTubeVideo dan SayaTubeUser yang menguji prekondisi, exception
dan postcondition. (Catatan: untuk exception boleh digunakan for loop sehingga proses overflow
dapat dipercepat).

**Input**

- sayaTubeVideo

  ```js
  const crypto = require("crypto");

  class SayaTubeVideo {
    constructor(title) {
      try {
        if (title == null) throw new Error("Judul tidak boleh null.");
        if (typeof title !== "string")
          throw new Error("Judul harus berupa string.");
        if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    increasePlayCount(count, override = false) {
      try {
        if (typeof count !== "number")
          throw new Error("Input harus berupa angka.");
        if (count < 0) throw new Error("Play count tidak boleh negatif.");
        if (!override && count > 25000000)
          throw new Error("Penambahan play count maksimal 25.000.000.");

        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count melebihi batas maksimum integer aman.");
        }

        this.playCount += count;
      } catch (error) {
        console.error(`[ERROR increasePlayCount] ${error.message}`);
      }
    }

    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }

  module.exports = SayaTubeVideo;
  ```

- sayaTubeUser

  ```js
  class SayaTubeUser {
    constructor(username) {
      try {
        if (username == null) throw new Error("Username tidak boleh null.");
        if (typeof username !== "string")
          throw new Error("Username harus berupa string.");
        if (username.length > 100)
          throw new Error("Username maksimal 100 karakter.");

        this.username = username;
        this.uploadedVideos = [];
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    addVideo(video) {
      try {
        if (video == null) throw new Error("Video tidak boleh null.");
        if (typeof video !== "object")
          throw new Error("Video harus berupa object.");
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count video melebihi batas maksimum.");
        }

        this.uploadedVideos.push(video);
      } catch (error) {
        console.error(`[ERROR addVideo] ${error.message}`);
      }
    }

    getTotalVideoPlayCount() {
      let total = 0;
      for (const video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }

    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
        console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
      }
    }
  }

  module.exports = SayaTubeUser;
  ```

- index

  ```js
  const SayaTubeVideo = require("./sayaTubeVideo");
  const SayaTubeUser = require("./sayaTubeUser");

  const user = new SayaTubeUser("Firman Maulana");

  for (let i = 1; i <= 10; i++) {
    const video = new SayaTubeVideo(`Review Film Ke-${i} oleh Firman Maulana`);
    video.increasePlayCount(25000);
    user.addVideo(video);
  }

  new SayaTubeVideo("A".repeat(201));

  new SayaTubeUser("X".repeat(101));

  user.addVideo(null);

  const failVideo = new SayaTubeVideo("Coba Play Count Besar");
  failVideo.increasePlayCount(999999999);

  const overflowVideo = new SayaTubeVideo("Simulasi Overflow");
  for (let i = 0; i < 100; i++) {
    overflowVideo.increasePlayCount(25000000, true);
  }
  user.addVideo(overflowVideo);

  console.log("\n=== Daftar Video Firman Maulana ===");
  user.printAllVideoPlaycount();

  console.log("\nTotal Semua Play Count:", user.getTotalVideoPlayCount());
  ```

**Output**

![Image](https://github.com/user-attachments/assets/f05a85d4-97f2-47d6-b985-774e2cfafd55)

---
