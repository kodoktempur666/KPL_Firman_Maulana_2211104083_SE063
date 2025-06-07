const AljabarLibraries = {
  AkarPersamaanKuadrat: function([a, b, c]) {
    const D = b * b - 4 * a * c;
    if (D < 0) {
      return "Tidak memiliki akar real";
    }

    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return [x1, x2];
  },

  HasilKuadrat: function([a, b]) {
    const a2 = a * a;
    const b2 = b * b;
    const ab2 = 2 * a * b;
    return [a2, ab2, b2]; 
  }
};

module.exports = AljabarLibraries;