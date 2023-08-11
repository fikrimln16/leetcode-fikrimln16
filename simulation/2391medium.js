// var garbageCollection = function (garbage, travel) {
//   let prefixSum = [];
//   prefixSum[0] = 0
//   prefixSum[1] = travel[0];
//   for (let i = 2; i <= travel.length; i++) {
//     prefixSum[i] = prefixSum[i - 1] + travel[i-1];
//   }

//   prefixSum

//   let g = 0;
//   let index_g = 0;
//   let p = 0;
//   let index_p = 0;
//   let m = 0;
//   let index_m = 0;

//   for (let i = 0; i < garbage.length; i++) {
//     let element = garbage[i];
//     if (element.includes("G")) {
//       index_g = i;
//       g = g + element.split("").filter(function (element) {
//         return element === "G";
//       }).length;
//     }
//     if (element.includes("P")) {
//       index_p = i ;
//       p = p + element.split("").filter(function (element) {
//         return element === "P";
//       }).length;
//     }
//     if (element.includes("M")) {
//       index_m = i;
//       m = m + element.split("").filter(function (element) {
//         return element === "M";
//       }).length;
//     }
//   }

//   return prefixSum[index_g] + g + prefixSum[index_p] + p + prefixSum[index_m] + m
// };

var garbageCollection = function (garbage, travel) {
  let count = 0;
  let lastindex_g = 0, lastindex_p = 0, lastindex_m = 0;

  // Menghitung jumlah garbage dan mencari index terakhirnya
  for (let i = 0; i < garbage.length; i++) {
    for (let j = 0; j < garbage[i].length; j++) {
      let it = garbage[i][j];
      if (it === 'M') {
        lastindex_m = i;
      } else if (it === 'P') {
        lastindex_p = i;
      } else {
        lastindex_g = i;
      }
      count++;
    }
  }

  let total = count;
  let sum = 0;

  // Menghitung untuk menjumlahkan travelnya
  for (let i = 0; i < travel.length; i++) {
    sum += travel[i];
    if (lastindex_g === i + 1) {
      total += sum;
    }
    if (lastindex_p === i + 1) {
      total += sum;
    }
    if (lastindex_m === i + 1) {
      total += sum;
    }
  }

  return total;
};



console.log(garbageCollection(["G","P","GP","GG"], [2, 4, 3]));
