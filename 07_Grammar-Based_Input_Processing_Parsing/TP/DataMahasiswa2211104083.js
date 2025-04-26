const fs = require("fs");

class DataMahasiswa2211104083 {
  static ReadJSON() {
    const filePath = "./tp7_1_2211104083.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mahasiswa = JSON.parse(jsonData);

    console.log(
      `Nama ${mahasiswa.nama.toLowerCase()} dengan nim ${
        mahasiswa.nim
      } dari fakultas ${mahasiswa.fakultas.toLowerCase()}`
    );
  }
}

module.exports = DataMahasiswa2211104083;