class PosisiKarakterGame {
    constructor(NIM) {
      this.NIM = NIM;
      this.state = "Berdiri";
    }
  
    changeState(newState) {
      this.state = newState;
    }
  
    simulateKeyPress(key) {
      if (this.NIM % 3 === 0) {
        if (key === "S") {
          console.log("Tombol arah bawah ditekan");
        } else if (key === "W") {
          console.log("Tombol arah atas ditekan");
        }
      } else if (this.NIM % 3 === 1) {
        if (this.state === "Berdiri") {
          console.log("Posisi standby");
        } else if (this.state === "Tengkurap") {
          console.log("Posisi istirahat");
        }
      } else if (this.NIM % 3 === 2) {
        if (this.state === "Terbang") {
          console.log("Posisi take off");
        } else if (this.state === "Jongkok") {
          console.log("Posisi landing");
        }
      }
    }
  
    getState() {
      return this.state;
    }
  }
  
const game = new PosisiKarakterGame(2211104083)
game.simulateKeyPress("W")
console.log("posisi saat ini " + game.getState())
game.simulateKeyPress("S")