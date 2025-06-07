function cariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  else if (a > 0) return "Positif";
  else return "Nol";
}

window.cekTanda = function() {
  const input = parseInt(document.getElementById("inputNumber").value);
  const hasil = cariTandaBilangan(input);
  document.getElementById("hasilOutput").innerText = `Hasil: ${hasil}`;
};

module.exports = { cariTandaBilangan }; // Agar bisa diakses di unit test