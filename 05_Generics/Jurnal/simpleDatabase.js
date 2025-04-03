class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }
  
    AddNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date());
    }
  
    PrintAllData() {
      this.storedData.forEach((data, index) => {
        console.log(
          `Data ${
            index + 1
          } berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[
            index
          ].toUTCString()}`
        );
      });
    }
  }
  
  function main() {
    const db = new SimpleDataBase();
    
    db.AddNewData(23);
    db.AddNewData(19);
    db.AddNewData(24);
  
    db.PrintAllData();
  }
  
  main();