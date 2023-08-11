var numberOfBeams = function (bank) {

  //variable untuk menyimpan total device yang tersedia
  let devices = [];

  //metode matriks untuk mengambil setiap value
  for (let i = 0; i < bank.length; i++) {
    const row = bank[i].split("");
    
    //deviceBaris untuk menentukan berapa devices dari setiap baris
    let deviceBaris = 0;
    for (let j = 0; j < row.length; j++) {
      const col = bank[i][j];
      //jika setiap value bernilai 1,
      if (col === "1") {
        //tambah ke deviceBaris
        deviceBaris++;
      }
    }

    console.log(deviceBaris) // 3, 0, 3, 2

    //jika deviceBaris tidak ada, tidak usah dimasukkan ke devices
    if (deviceBaris > 0) {
      devices.push(deviceBaris);
    }
  }


  console.log(devices) // [3,3,2]
  //variable untuk menyimpan laser-lasernya
  let res = 0;
  //melalukan perhitungan Math untuk menghubungkan devices ke devices
  for (let i = 0; i < devices.length - 1; i++) {
    res += devices[i] * devices[i + 1]
  }

  return res;
};

console.log(numberOfBeams(["01110","00000","10101","01010"])); // 15
// 
// const numberOfBeams = function (bank) {
//    let res = 0;
//    let arr = [];

//    for (let i = 0; i < bank.length; i++) {
//      const row = bank[i];
//      let count = row.split("").map(Number).reduce((a, b) => a + b, 0);
//      arr.push(count);
//    }

//    let filter = arr.filter((count) => count > 0);

//    for (let i = 0; i < filter.length - 1; i++) {
//      res += filter[i] * filter[i + 1];
//    }

//    return res;
//  };

