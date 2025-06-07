const assert = require('assert');
const { CariNilaiPangkat } = require('../logic');

// Branch coverage: semua kondisi
try {
  assert.strictEqual(CariNilaiPangkat(2, 3), 8);
  assert.strictEqual(CariNilaiPangkat(5, 0), 1);
  assert.strictEqual(CariNilaiPangkat(4, -2), -1);
  assert.strictEqual(CariNilaiPangkat(101, 2), -2);
  assert.strictEqual(CariNilaiPangkat(2, 11), -2);
  assert.strictEqual(CariNilaiPangkat(9, 30), -3);

  console.log("✅ Semua unit test berhasil.");
} catch (error) {
  console.error("❌ Test gagal:", error.message);
}