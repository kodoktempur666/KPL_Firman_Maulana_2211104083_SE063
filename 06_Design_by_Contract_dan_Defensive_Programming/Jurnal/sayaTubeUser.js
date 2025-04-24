class SayaTubeUser {
  constructor(username) {
    try {
      if (username == null) throw new Error("Username tidak boleh null.");
      if (typeof username !== "string")
        throw new Error("Username harus berupa string.");
      if (username.length > 100)
        throw new Error("Username maksimal 100 karakter.");

      this.username = username;
      this.uploadedVideos = [];
    } catch (error) {
      console.error(`[ERROR Constructor] ${error.message}`);
    }
  }

  addVideo(video) {
    try {
      if (video == null) throw new Error("Video tidak boleh null.");
      if (typeof video !== "object")
        throw new Error("Video harus berupa object.");
      if (video.playCount >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count video melebihi batas maksimum.");
      }

      this.uploadedVideos.push(video);
    } catch (error) {
      console.error(`[ERROR addVideo] ${error.message}`);
    }
  }

  getTotalVideoPlayCount() {
    let total = 0;
    for (const video of this.uploadedVideos) {
      total += video.playCount;
    }
    return total;
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
      console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
  }
}

module.exports = SayaTubeUser;
