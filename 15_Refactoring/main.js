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
