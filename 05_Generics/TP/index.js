class HaloGeneric {
    SapaUser(user) {
      console.log(`Hai ${user}`);
    }
  }
  
  class DataGeneric { 
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
  }
  
  const halo = new HaloGeneric();
  halo.SapaUser("FIRMAN");
  
  const nim = new DataGeneric("2211104083");
  nim.PrintData();