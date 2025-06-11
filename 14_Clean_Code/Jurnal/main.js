const SayaTubeUser = require('./sayaTubeUser');
const SayaTubeVideo = require('./sayaTubeVideo');

const namaPraktikan = "Firman Maulana";

const filmList = [
  "Si Juki The Movie Panitia Hari Akhir",
  "Si Juki The Movie: Harta Pulau Monyet",
  "Habibie & Ainun",
  "Rudy Habibie",
  "Habibie & Ainun 3",
  "Doraemon Stand By Me",
  "Avengers: Endgame",
  "Spider-Man: No Way Home",
  "The Batman",
  "Minions 2"
];

try {
  const user = new SayaTubeUser(namaPraktikan);

  // Tambahkan 10 video
  filmList.forEach((film) => {
    const title = `Review Film ${film} oleh ${namaPraktikan}`;
    const video = new SayaTubeVideo(title);

    video.increasePlayCount(Math.floor(Math.random() * 25000000));
    user.addVideo(video);
  });

  console.log("\nDaftar Video (Maks 8):");
  user.printAllVideoPlayCount();

  // Uji overflow
  console.log("\nTesting Overflow:");
  const stressVideo = new SayaTubeVideo("Stress Test");
  for (let i = 0; i < 100; i++) {
    stressVideo.increasePlayCount(25000000);
  }

  // Uji precondition gagal
  console.log("\nTesting Precondition:");
  try {
    new SayaTubeVideo("a".repeat(201));
  } catch (e) {
    console.log(e.message);
  }

  try {
    user.addVideo(null);
  } catch (e) {
    console.log(e.message);
  }

} catch (error) {
  console.error(`[System Error] ${error.message}`);
}