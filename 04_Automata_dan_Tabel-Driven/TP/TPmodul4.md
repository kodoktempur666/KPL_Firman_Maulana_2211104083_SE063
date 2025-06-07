<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

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

# TUGAS PENDAHULUAN

## A. Soal Nomor 1

MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN
Dari project yang sudah dibuat sebelumnya:
- Buatlah sebuah class bernama “KodePos”.
- Pada class tersebut, tambahkan sebuah method dengan nama “getKodePos” yang
mengembalikan kode pos dari tabel yang tertera di bawah ini.
- Setelah method ditambahkan, panggil method tersebut pada class utama/main.

**Input**

## kodePos

```js
class KodePos {
    constructor() {
      this.kodePosTable = {
        Batununggal: "40266",
        Kujangsari: "40287",
        Mengger: "40267",
        Wates: "40256",
        Cijaura: "40287",
        Jatisari: "40286",
        Margasari: "40286",
        Sekejati: "40286",
        Kebonwaru: "40272",
        Maleer: "40274",
        Samoja: "40273",
      };
    }
  
    getKodePos(kelurahan) {
      return this.kodePosTable[kelurahan] || "Kelurahan tidak ditemukan";
    }
  }
  
const kodePos = new KodePos();
console.log(kodePos.getKodePos("Kujangsari"));
console.log(kodePos.getKodePos("Batununggal"));
console.log(kodePos.getKodePos("Mengger"));
console.log(kodePos.getKodePos("Pemalang"));

```
**Output**

![image](https://github.com/user-attachments/assets/1f9d24ea-e46d-4b58-8825-74f3d8388d49)


---


## A. Soal Nomor 2

MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION
Pada folder project yang sama:
- Buatlah sebuah class bernama “DoorMachine”
- Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan
teknik state-based construction (asumsikan state awal adalah terkunci):
- Pada saat state masuk ke “Terkunci” akan menampilkan output di console dengan
pesan “Pintu terkunci”
- Pada saat state masuk ke “Terbuka” akan menampilkan output di console dengan
pesan “Pintu tidak terkunci”
- Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di
class utama atau method main.

**Input**

## doorMachine

```js
class DoorMachine {
    constructor() {
      this.states = {
        Terkunci: "Pintu terkunci",
        Terbuka: "Pintu tidak terkunci",
      };
      this.currentState = this.states.Terkunci;
    }
  
    openDoor() {
      console.log(this.currentState);
    }
  
    changeState(newState) {
      this.currentState = this.states[newState] || this.states.Terkunci;
    }
  }
  
const doorMachine = new DoorMachine();
doorMachine.openDoor(); 
doorMachine.changeState("Terbuka");
doorMachine.openDoor();
```

**Output**

![image](https://github.com/user-attachments/assets/505c6751-ea09-4b33-888a-063cd82f1a88)



---
