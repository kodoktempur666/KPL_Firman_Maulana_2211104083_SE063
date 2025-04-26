<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**GRAMMAS BASED INPUT PROCESSING PARSING**

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
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN JSON DESERIALIZATION 1
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.

- Download file “jurnal7_1_2211104083.json” dan rename file tersebut dengan mengganti “nim”
  dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
- Ganti isi dari file json tersebut dengan detail yang benar dari praktikan.
- Buatlah sebuah file class baru dengan nama “DataMahasiswa<2211104083_PRAKTIKAN>”.
- Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
  sesuai.
- Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
  format bebas asalkan semua nilai ditampilkan di console/output.

## A. Soal Nomor 2

MENAMBAHKAN JSON DESERIALIZATION 2
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.

- Download file “jurnal7_2_2211104083.json” dan rename file tersebut dengan mengganti “nim”
  dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
- Ubah isi dari file json tersebut dengan daftar anggota kelompok (untuk tubes).
- Buatlah sebuah file class baru dengan nama “TeamMembers<2211104083_PRAKTIKAN>”.
- Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
  sesuai.
- Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
  format:
  “Team member list:” - “<2211104083> (<nama>) (<22> <L>) ” - “<2211104083> (<nama>) (<22> <L>) ”
  dst.

**Input**

- jurnal7_1_2211104083

```json
{
  "nama": "Firman Maulana",
  "nim": "2211104083",
  "fakultas": "Direktorat Kampus Purwokerto",
  "prodi": "Rekayasa Perangkat Lunak",
  "angkatan": 2022
}
```

- DataMahasiswa2211104083

```js
const fs = require("fs");

class DataMahasiswa2211104083 {
  static ReadJSON() {
    const filePath = "./jurnal7_1_2211104083.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mhs = JSON.parse(jsonData);

    console.log("===== DATA MAHASISWA =====");
    console.log(`Nama      : ${mhs.nama}`);
    console.log(`NIM       : ${mhs.nim}`);
    console.log(`Fakultas  : ${mhs.fakultas}`);
    console.log(`Prodi     : ${mhs.prodi}`);
    console.log(`Angkatan  : ${mhs.angkatan}`);
    console.log("===========================");
  }
}

module.exports = DataMahasiswa2211104083;
```

- jurnal7_2_2211104083

```json
{
  "anggota": [
    {
      "nim": "2211104083",
      "nama": "Firman Maulana",
      "angkatan": "22",
      "jenis_kelamin": "L"
    },
    {
      "nim": "2211104088",
      "nama": "Jerry",
      "angkatan": "22",
      "jenis_kelamin": "L"
    },
    {
      "nim": "2211104073",
      "nama": "Lalluna",
      "angkatan": "22",
      "jenis_kelamin": "L"
    }
  ]
}
```

- TeamMembers2211104083

```js
const fs = require("fs");

class TeamMembers2211104083 {
  static ReadJSON() {
    const filePath = "./jurnal7_2_2211104083.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    console.log("Team member list:");
    data.anggota.forEach((anggota) => {
      console.log(
        `- ${anggota.nim} ${anggota.nama} ${anggota.angkatan} ${anggota.jenis_kelamin}`
      );
    });
  }
}

module.exports = TeamMembers2211104083;
```

- index

```js
const DataMahasiswa = require("./DataMahasiswa2211104083");

DataMahasiswa.ReadJSON();

const TeamMembers = require("./TeamMembers2211104083");

TeamMembers.ReadJSON();
```

**Output**

![Image](https://github.com/user-attachments/assets/fbfebe4e-f89a-4b96-bc7f-9727883bf9d2)

---
