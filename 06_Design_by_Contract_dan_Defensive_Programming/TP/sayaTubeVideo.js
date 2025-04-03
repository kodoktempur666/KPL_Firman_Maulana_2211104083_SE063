class SayaTubeVideo {
    constructor(title) {
      if (!title || typeof title !== "string" || title.length > 100) {
        throw new Error("Judul harus berupa string dan maksimal 100 karakter!");
      }
  
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    IncreasePlayCount(count) {
      try {
        if (typeof count !== "number" || count <= 0 || count > 10000000) {
          throw new Error("Jumlah play count harus antara 1 hingga 10.000.000!");
        }
  
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Terjadi overflow pada play count!");
        }
  
        this.playCount += count;
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
  
    PrintVideoDetails() {
      console.log(`Video ID    : ${this.id}`);
      console.log(`Judul       : ${this.title}`);
      console.log(`Play Count  : ${this.playCount}`);
    }
  }
  
  try {
    const video1 = new SayaTubeVideo(
      "Tutorial Design By Contract – [KT666]"
    );
  
    video1.IncreasePlayCount(5000000);
    video1.PrintVideoDetails();
  
    video1.IncreasePlayCount(15000000);
  
    for (let i = 0; i < 20; i++) {
      video1.IncreasePlayCount(10000000);
    }
  
    video1.PrintVideoDetails();
  } catch (error) {
    console.error(`Error utama: ${error.message}`);
  }
  
  try {
    new SayaTubeVideo("A".repeat(101));
  } catch (error) {
    console.error(`Error pada judul: ${error.message}`);
  }