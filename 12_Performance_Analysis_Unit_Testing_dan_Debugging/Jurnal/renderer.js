const { CariNilaiPangkat } = require('./logic');

window.proses = function () {
  const a = parseInt(document.getElementById("angkaA").value);
  const b = parseInt(document.getElementById("angkaB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("output").innerText = `Hasil: ${hasil}`;
};