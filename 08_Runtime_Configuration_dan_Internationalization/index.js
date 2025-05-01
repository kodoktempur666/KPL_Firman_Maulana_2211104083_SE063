require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');

const app = express();

// Inisialisasi i18next untuk internationalization
i18next.use(Backend).init({
  lng: 'en', // Bahasa default dari .env
  fallbackLng: 'en', // Fallback jika bahasa tidak ditemukan
});

// Middleware untuk membaca query parameter 'lang' untuk mengubah bahasa
app.use((req, res, next) => {
  const lang = req.query.lang || 'en';
  i18next.changeLanguage(lang, (err) => {
    if (err) console.error('Error changing language:', err);
    next();
  });
});

// Rute untuk halaman utama
app.get('/', (req, res) => {
  const name = req.query.name || 'Guest'; // Nama pengguna dari query parameter
  const welcomeMessage = i18next.t('welcome'); // Terjemahan untuk "welcome"
  const greetingMessage = i18next.t('greeting', { name }); // Terjemahan dengan interpolasi nama
  const farewellMessage = i18next.t('farewell sdsd'); // Terjemahan untuk "farewell"

  res.send(`
    <h1>${welcomeMessage}</h1>
    <p>${greetingMessage}</p>
    <p>${farewellMessage}</p>
  `);
});

// Mulai server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});