class SayaTubeVideo {
  constructor(title) {
    if (title === null) throw new Error("Judul video tidak boleh null");
    if (title.length > 200) throw new Error("Judul video maksimal 200 karakter");

    this.id = this.#generateRandomId();
    this.title = title;
    this.playCount = 0;
  }

  // Generate ID acak untuk video
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan jumlah play dengan validasi
  increasePlayCount(amount) {
    try {
      if (amount < 0) throw new Error("Play count tidak boleh negatif");
      if (amount > 25000000) throw new Error("Maksimal penambahan 25.000.000 per panggilan");

      if (this.playCount + amount > Number.MAX_SAFE_INTEGER) {
        throw new Error("Overflow play count");
      }

      this.playCount += amount;
    } catch (error) {
      console.error(`[Video Error] ${error.message}`);
    }
  }

  // Cetak detail video
  printVideoDetails() {
    console.log(`Video Details:
ID: ${this.id}
Title: ${this.title}
Play Count: ${this.playCount.toLocaleString()}\n`);
  }
}

module.exports = SayaTubeVideo;