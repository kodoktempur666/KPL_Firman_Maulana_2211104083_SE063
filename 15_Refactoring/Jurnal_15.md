<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XV**  
**REFACTORING**

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

## PENGEMBANGAN DENGAN SECURE CODING PRACTICES
Buatlah aplikasi desktop dengan fitur:

- Registrasi user dengan input username dan password
- Penyimpanan data user pada file json
- Login user

Dengan mengikuti Secure Coding Practices yang memenuhi faktor-faktor berikut:
- Input Validation (wajib mengimplementasikan salah satu, diizinkan lebih)
    - Validasi range data Range data input harus dibatasi dan ditetapkan. Contoh:
        - Hanya boleh huruf alfabet ASCII
        - Harus mengandung angka
    - Validasi panjang data Panjang atau ukuran data harus dibatasi dan ditetapkan. Contoh:
        - Minimal 8 karakter
        - Maksimal 20 karakter
    - Handling data invalid Data yang tidak valid harus ditolak atau dihandle dengan jelas (jangan dibiarkan menjadi runtime error yang tidak dihandle). Contoh:
        - Jika terdapat aturan minimal 8 karakter input, input di bawah 8 karakter harus ditolak atau dihandle dengan spesifik
        - Jika terdapat aturan hanya boleh huruf alfabet ASCII, input dengan karakter selain alfabet ASCII harus ditolak atau dihandle dengan spesifik
- Password Management (wajib mengimplementasikan salah satu, diizinkan lebih)
    - Password hashing Ketika sistem menyimpan password, password harus dienkripsi atau dihash. Contoh:
        - Sistem mengenkripsi password dengan metode hash SHA256
        - Sistem mengubah password dengan konsisten supaya tidak sama persis dengan inputan user
    - Password rules Ketika sistem harus menerima inputan password, harus ada aturan keamanan untuk password tersebut. Contoh:
        - Password harus mengandung minimal 1 karakter unik (!@#$%^&*)
        - Password tidak boleh mengandung kata dari username
---


- main.js

```js
const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

// Fungsi hashing password
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi input
function isValidUsername(username) {
  const regex = /^[A-Za-z]+$/;
  return username.length >= 4 && username.length <= 20 && regex.test(username);
}

function isValidPassword(password, username) {
  const regexSpecial = /[!@#$%^&*]/;
  return (
    password.length >= 8 &&
    password.length <= 20 &&
    regexSpecial.test(password) &&
    !password.toLowerCase().includes(username.toLowerCase())
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi garis pemisah
function separator() {
  console.log("\n==============================\n");
}

// Warna text
const color = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m"
}

function register() {
  separator();
  console.log(`${color.cyan}📝 MENU REGISTRASI${color.reset}`);
  separator();

  rl.question("📛 Masukkan username: ", (username) => {
    if (!isValidUsername(username)) {
      console.log(`${color.red}❌ Username tidak valid. Harus 4-20 huruf alfabet ASCII.${color.reset}`);
      return rl.close();
    }

    rl.question("🔒 Masukkan password: ", (password) => {
      if (!isValidPassword(password, username)) {
        console.log(`${color.red}❌ Password tidak valid. Panjang 8-20 karakter, mengandung karakter unik (!@#$%^&*), dan tidak boleh mengandung username.${color.reset}`);
        return rl.close();
      }

      const hashed = hashPassword(password);
      const user = { username, password: hashed };

      let users = [];
      if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json"));
      }

      // Cek apakah user sudah terdaftar
      if (users.find(u => u.username === username)) {
        console.log(`${color.red}❌ Username sudah terdaftar.${color.reset}`);
        return rl.close();
      }

      users.push(user);
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
      console.log(`${color.green}✅ Registrasi berhasil.${color.reset}`);
      rl.close();
    });
  });
}

function login() {
  separator();
  console.log(`${color.cyan}🔐 MENU LOGIN${color.reset}`);
  separator();

  rl.question("📛 Masukkan username: ", (username) => {
    rl.question("🔑 Masukkan password: ", (password) => {
      const hashed = hashPassword(password);
      if (!fs.existsSync("users.json")) {
        console.log(`${color.red}❌ Tidak ada user terdaftar.${color.reset}`);
        return rl.close();
      }

      const users = JSON.parse(fs.readFileSync("users.json"));
      const user = users.find(u => u.username === username && u.password === hashed);
      if (user) {
        console.log(`${color.green}✅ Login berhasil! Selamat datang, ${username}.${color.reset}`);
      } else {
        console.log(`${color.red}❌ Username atau password salah.${color.reset}`);
      }
      rl.close();
    });
  });
}

separator();
console.log(`${color.yellow}✨ SELAMAT DATANG DI SISTEM LOGIN ✨${color.reset}`);
separator();

rl.question("Pilih menu:\n1️⃣ Register\n2️⃣ Login\n\nMasukkan pilihan Anda (1/2): ", (choice) => {
  if (choice === "1") {
    register();
  } else if (choice === "2") {
    login();
  } else {
    console.log(`${color.red}❌ Pilihan tidak valid.${color.reset}`);
    rl.close();
  }
});

```

---
**Output**

- Register

![Image](https://github.com/user-attachments/assets/bdbcb0e2-9861-423b-807b-072ef9d507bb)

- Login

![Image](https://github.com/user-attachments/assets/e28d2e44-35dc-42cb-bd0b-c7fad6198e86)

---
- Program ini merupakan aplikasi Command Line Interface (CLI) sederhana berbasis Node.js yang memungkinkan pengguna untuk melakukan registrasi dan login dengan sistem penyimpanan lokal menggunakan file users.json. Program memanfaatkan modul bawaan Node.js seperti fs untuk membaca dan menulis file, readline untuk interaksi input-output di terminal, serta crypto untuk melakukan hashing password dengan algoritma SHA-256 guna menjaga keamanan data password. Pada bagian validasi, program memastikan bahwa username hanya boleh terdiri dari huruf alfabet ASCII dengan panjang 4-20 karakter, sedangkan password harus memiliki panjang 8-20 karakter, mengandung minimal satu karakter spesial (!@#$%^&*), serta tidak boleh memuat username di dalamnya. Saat pengguna memilih menu registrasi, program akan memeriksa validitas input, memeriksa duplikasi username, dan menyimpan data yang valid dalam bentuk array objek ke dalam file users.json. Saat pengguna memilih menu login, program akan mencocokkan username dan hash dari password yang diinput dengan data yang tersimpan. Selain itu, tampilan CLI dibuat lebih interaktif dengan penambahan warna, garis pemisah, serta penggunaan emoji untuk memperjelas status proses. Refactoring kode ini juga meningkatkan keterbacaan, profesionalitas, dan memudahkan pengembangan selanjutnya.
---