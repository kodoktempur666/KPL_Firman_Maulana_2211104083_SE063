const SayaTubeVideo = require('./sayaTubeVideo');
const SayaTubeUser = require('./sayaTubeUser');

function main() {
  const namaPraktikan = "Firman";
  const user = new SayaTubeUser(namaPraktikan);

  const judulFilm = [
    "Interstellar",
    "Inception",
    "The Dark Knight",
    "Parasite",
    "Whiplash",
    "The Social Network",
    "Joker",
    "Everything Everywhere All At Once",
    "The Grand Budapest Hotel",
    "Spider-Man: No Way Home"
  ];

  for (const judul of judulFilm) {
    const video = new SayaTubeVideo(`Review Film ${judul} oleh ${namaPraktikan}`);
    video.increasePlayCount(Math.floor(Math.random() * 1000)); // Simulasi play count
    user.addVideo(video);
  }

  console.log("\n===== Detail Semua Video =====");
  user.printAllVideoPlaycount();

  console.log("\n===== Total Semua Play Count =====");
  console.log(`Total play count: ${user.getTotalVideoPlayCount()}`);
}

main();
