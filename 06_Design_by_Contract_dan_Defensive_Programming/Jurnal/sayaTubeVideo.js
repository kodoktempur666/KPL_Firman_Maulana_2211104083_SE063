const crypto = require("crypto");

class SayaTubeVideo {
  constructor(title) {
    try {
      if (title == null) throw new Error("Judul tidak boleh null.");
      if (typeof title !== "string")
        throw new Error("Judul harus berupa string.");
      if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

      this.id = crypto.randomInt(10000, 99999);
      this.title = title;
      this.playCount = 0;
    } catch (error) {
      console.error(`[ERROR Constructor] ${error.message}`);
    }
  }

  increasePlayCount(count, override = false) {
    try {
      if (typeof count !== "number")
        throw new Error("Input harus berupa angka.");
      if (count < 0) throw new Error("Play count tidak boleh negatif.");
      if (!override && count > 25000000)
        throw new Error("Penambahan play count maksimal 25.000.000.");

      if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count melebihi batas maksimum integer aman.");
      }

      this.playCount += count;
    } catch (error) {
      console.error(`[ERROR increasePlayCount] ${error.message}`);
    }
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

module.exports = SayaTubeVideo;
