<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**FIRMAN MAULANA(2211104083)**  
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

MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN

Dari project yang sudah dibuat sebelumnya:
- Buatlah sebuah class bernama “KodeBuah”.
- Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah” yang mengembalikan kode buah dari tabel yang diberikan di bawah ini.
- Setelah method ditambahkan, panggil method tersebut pada class utama/main.

**Input**

# kodeBuah

```js
class KodeBuah {
    constructor() {
      this.kodeBuahTable = {
        Apel: "A00",
        Aprikot: "B00",
        Alpukat: "C00",
        Pisang: "D00",
        Paprika: "E00",
        Blackberry: "F00",
        Ceri: "H00",
        Kelapa: "I00",
        Jagung: "J00",
        Kurma: "K00",
        Durian: "L00",
        Anggur: "M00",
        Melon: "N00",
        Semangka: "O00",
      };
    }
  
    getKodeBuah(buah) {
      return this.kodeBuahTable[buah] || "Buah tidak ditemukan";
    }
  }

const buah = new KodeBuah();
console.log(buah.getKodeBuah("Apel"));
console.log(buah.getKodeBuah("Aprikot"));
console.log(buah.getKodeBuah("Jeruk"))
```
**Output**

![image](https://github.com/user-attachments/assets/e77de143-ad79-4b0c-9d98-4b3c0779fec1)

---

## A. Soal Nomor 2

MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION
Pada folder project yang sama:
- Buatlah sebuah class bernama “PosisiKarakterGame”
- Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan teknik state-based construction (asumsikan state awal adalah berdiri):
- Berikan implementasi tambahkan berdasarkan hasil mod dari NIM

1. NIM % 3 == 0:

    - Pada saat TombolS ditekan, maka akan ada output “tombol arah bawah ditekan”
    - Pada saat TombolW ditekan, maka akan ada output “tombola rah atas ditekan”

2. NIM % 3 == 1:

    - Pada saat state berubah ke “Berdiri”, akan ada output “posisi standby”
    - Pada saat state berubah ke “Tengkurap”, akan ada output “posisi istirahat”

3. NIM % 3 == 2:

    - Pada saat state berubah dari “Terbang” ke “Jongkok”, ada output “posisi landing”
    - Pada saat state berubah dari “Berdiri” ke “Terbang”, ada output “posisi take off”

- Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di class utama atau
method main

1. Pastikan semua perubahan state disimulasikan
2. Pastikan semua ouput yang ada di bagian C dapat dihasilkan pada saat run

**Input**

- posisiKarakterGame

```js
class PosisiKarakterGame {
    constructor(NIM) {
      this.NIM = NIM;
      this.state = "Berdiri";
    }
  
    changeState(newState) {
      this.state = newState;
    }
  
    simulateKeyPress(key) {
      if (this.NIM % 3 === 0) {
        if (key === "S") {
          console.log("Tombol arah bawah ditekan");
        } else if (key === "W") {
          console.log("Tombol arah atas ditekan");
        }
      } else if (this.NIM % 3 === 1) {
        if (this.state === "Berdiri") {
          console.log("Posisi standby");
        } else if (this.state === "Tengkurap") {
          console.log("Posisi istirahat");
        }
      } else if (this.NIM % 3 === 2) {
        if (this.state === "Terbang") {
          console.log("Posisi take off");
        } else if (this.state === "Jongkok") {
          console.log("Posisi landing");
        }
      }
    }
  
    getState() {
      return this.state;
    }
  }
  
const game = new PosisiKarakterGame(2211104083)
game.simulateKeyPress("W")
console.log("posisi saat ini " + game.getState())
game.simulateKeyPress("S")
```


**Output**

![image](https://github.com/user-attachments/assets/426c8b7f-7c07-4274-a1a1-56f110e79043)


---
