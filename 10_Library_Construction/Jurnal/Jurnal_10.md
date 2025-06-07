<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL X**  
**LIBRARY CONSTRUCTION**

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

## A. MEMBUAT LIBRARY MATEMATIKA
Buatlah suatu library bernama (namespace) MatematikaLibraries yang mempunyai beberapa
method sebagai berikut.
- Mencari faktor persekutuan terbesar dari dua buah bilangan:
int FPB(int input1, int input2)
Contoh pemanggilan:
FPB(60, 45)
Output: 15
- Mencari kelipatan persekutuan terkecil dari dua buah bilangan:
int KPK(int input1, int input2)
Contoh pemanggilan:
KPK(12, 8)
Output: 24

- Mendapatkan hasil turunan dari persamaan sederhana:
string Turunan(int[] persamaan)
Contohnya untuk persamaan x3 + 4x2 -12x+9 maka turunannya adalah 3x2 + 8x -12
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Turunan({1, 4, -12, 9})
Output: “3x2 + 8x - 12”

- Mendapatkan hasil integral dari persamaan sederhana:
string Integral(int[] persamaan)
Contohnya untuk persamaan 4x3 + 6x2 – 12x +9 maka hasilnya x4 + 2x3 – 6x2 + 9x + C
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Integral({4, 6, -12, 9})
Output: “x4 + 2x3 – 6x2 + 9x + C”

Dari master/main branch dan class utama, buatlah program/aplikasi web API dari spesifikasi sebagai
berikut ini:
    - API yang dibuat menggunakan data dari kelas Mahasiswa.
Mahasiswa
+ Name : string
+ Nim : string
+ Course : List<string>
+ Year: integer
+ Mahasiswa()
    - API yang dibuat mempunyai lokasi sebagai berikut ‘/api/Mahasiswa, URL domain boleh
dari port mana saja (port bebas). Dengan menggunakan swagger API tersebut dapat
menerima RESTful API dengan metoda sebagai berikut (halaman swagger dapat diakses
pada https://localhost:<PORT>/swagger/index.html):

        - GET /api/Mahasiswa: mengembalikan output berupa list/array dari semua objek
    Mahasiswa
        - GET /api/Mahasiswa/{id}: mengembalikan output berupa objek Mahasiswa untuk
    index “id”
        - POST /api/Mahasiswa: menambahkan objek Mahasiswa baru
        - DELETE /api/Mahasiswa/{id}: menghapus objek Mahasiswa pada index “id”
    - Secara default, program yang dibuat memiliki list Mahasiswa yang berasal dari anggota
kelompok TUBES (minimal 3 data).
    - Impementasi yang dibuat tidak menggunakan database, cukup disimpan sebagai suatu 
variable, dan gunakan “static” di variable tersebut yang menyimpan list/array dari objek-
objek Mahasiswa.
    - Dalam pembuatan program/aplikasi ini, anda dapat mengasumsikan bahwa input dari user selalu benar dan sesuai dengan tipe data yang diharapkan.
---

- matematikaLibraries.js
```js
const MathLib = require('./matematikaLibraries');

console.log("FPB dari 60 dan 45:", MathLib.FPB(60, 45));         
console.log("KPK dari 12 dan 8:", MathLib.KPK(12, 8));           

const koefTurunan = [1, 4, -12, 9]; 
console.log("Turunan:", MathLib.Turunan(koefTurunan));           

const koefIntegral = [1, 4, -12, 9]; 
console.log("Integral:", MathLib.Integral(koefIntegral));        
```
- main.js

```js
const MathLib = require('./matematikaLibraries');

console.log("FPB dari 60 dan 45:", MathLib.FPB(60, 45));         
console.log("KPK dari 12 dan 8:", MathLib.KPK(12, 8));           

const koefTurunan = [1, 4, -12, 9]; 
console.log("Turunan:", MathLib.Turunan(koefTurunan));           

const koefIntegral = [1, 4, -12, 9]; 
console.log("Integral:", MathLib.Integral(koefIntegral));        

```


**Output**

![Image](https://github.com/user-attachments/assets/9972748a-c933-4925-a5cc-d64d31f58d08)

Program ini mengimpor modul MatematikaLibraries yang menyediakan empat fungsi matematika: FPB (Faktor Persekutuan Terbesar), KPK (Kelipatan Persekutuan Terkecil), Turunan, dan Integral. Fungsi FPB menghitung faktor persekutuan terbesar antara dua angka menggunakan algoritma Euclidean. Fungsi KPK menghitung kelipatan persekutuan terkecil menggunakan FPB. Fungsi Turunan menerima koefisien polinomial dan menghitung turunan pertama dari polinomial tersebut, sementara fungsi Integral menghitung integral tak tentu dari polinomial, dengan menambahkan konstanta integrasi (C). Program utama memanggil fungsi-fungsi ini untuk menghitung FPB dan KPK dari angka-angka tertentu serta turunan dan integral dari polinomial dengan koefisien yang diberikan, dan mencetak hasilnya ke konsol.
---