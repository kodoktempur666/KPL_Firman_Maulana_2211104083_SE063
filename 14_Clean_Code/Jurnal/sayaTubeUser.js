const SayaTubeVideo = require('./sayaTubeVideo');

class SayaTubeUser {
  constructor(username) {
    if (username === null) throw new Error("Username tidak boleh null");
    if (username.length > 100) throw new Error("Username maksimal 100 karakter");

    this.id = this.#generateRandomId();
    this.username = username;
    this.uploadedVideos = [];
  }

  // Generate ID acak untuk user
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan video dengan validasi
  addVideo(video) {
    try {
      if (video === null) throw new Error("Video tidak boleh null");
      if (!(video instanceof SayaTubeVideo)) throw new Error("Tipe video tidak valid");
      if (video.playCount >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count video mencapai batas maksimal");
      }

      if (this.uploadedVideos.length >= 10) {
        throw new Error("Maksimal 10 video per user");
      }

      this.uploadedVideos.push(video);
    } catch (error) {
      console.error(`[User Error] ${error.message}`);
    }
  }

  // Hitung total play count semua video
  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount, 0
    );
  }

  // Cetak judul maksimal 8 video
  printAllVideoPlayCount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.slice(0, 8).forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;