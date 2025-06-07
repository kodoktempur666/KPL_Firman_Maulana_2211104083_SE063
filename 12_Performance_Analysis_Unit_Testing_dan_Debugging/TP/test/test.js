const assert = require('assert');
const { cariTandaBilangan } = require('../renderer');

try {
  assert.strictEqual(cariTandaBilangan(-5), "Negatif");
  assert.strictEqual(cariTandaBilangan(10), "Positif");
  assert.strictEqual(cariTandaBilangan(0), "Nol");

  console.log("✅ Semua unit test berhasil.");
} catch (e) {
  console.error("❌ Test gagal:", e.message);
}