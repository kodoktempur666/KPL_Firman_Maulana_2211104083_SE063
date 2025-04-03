class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
      let result = 0;
  
      result = Number(a) + Number(b) + Number(c);
  
      return result;
    }
  }
  
  function main() {
    const nim = 2211104083;
  
    const firstTwoDigits = parseInt(nim.toString().slice(0, 2));
    const secondTwoDigits = parseInt(nim.toString().slice(2, 4));
    const thirdTwoDigits = parseInt(nim.toString().slice(4, 6));
  
    let result;
  
    const lastDigit = nim % 10;
    if (lastDigit === 1 || lastDigit === 2) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
      result = result.toFixed(2);
    } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    } else if (lastDigit === 9 || lastDigit === 0) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    }
  
    console.log(`Hasil penjumlahan: ${result}`);
  }
  
  main();