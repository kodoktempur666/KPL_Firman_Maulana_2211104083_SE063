function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;

    // Cek overflow untuk 32-bit signed int
    if (result > 2147483647) return -3;
  }

  return result;
}

module.exports = { CariNilaiPangkat };