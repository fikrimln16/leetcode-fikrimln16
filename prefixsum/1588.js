function findSubarrays(arr) {
  const subarrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1);
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

// var sumOddLengthSubarrays = function (arr) {
//   return findSubarrays(arr)
//     .map((element) => {
//       if (element.length % 2 !== 0) {
//         return element;
//       }
//     })
//     .filter((element) => element != undefined)
//     .reduce((accumulator, currentArray) => {
//       return (
//         accumulator +
//         currentArray.reduce((subAccumulator, currentValue) => {
//           return subAccumulator + currentValue;
//         }, 0)
//       );
//     }, 0);
// };

var sumOddLengthSubarrays = function(arr) {
  const n = arr.length;
  let res = 0;
  
  if (n === 1) return arr[0];
  
  //Membuat prefix res dari setiap arr
  for (let i = 1; i < n; i++)
      arr[i] += arr[i-1];
  
  console.log(arr) // [ 1, 3, 6, 10, 15, 21, 28 ]

  let totalWindow = Math.ceil(n/2);
  /**karena kita hanya mengambil subarray size ganjil saja
    maka kita bulatkan ke atas, contoh kita punya array size 7,
    maka kemungkinan subarray size ganjil sebanyak 7/2 = 3.5 = 4
    0. [1], [2], [3], [4], [5], [6], [7]     ~ size 1
    1. [1,2,3], [2,3,4], [3,4,5] , ...       ~ size 3
    2. [1,2,3,4,5], [2,3,4,5,6], [3,4,5,6,7] ~ size 5
    3. [1,2,3,4,5,6,7]                       ~ size 7
  */

  console.log(arr) // [ 1, 3, 6, 10, 15, 21, 28 ]
  //Algoritma sliding window sebanyak totalWindow 
  for (let i = 0; i < totalWindow; i++) {
    let windowStart = i * 2; // Batas awal jendela
    let windowEnd = n; // Batas akhir jendela

    for (let j = windowStart; j < windowEnd; j++) {
      if (j - (i * 2) - 1 < 0) {
        // Jumlahkan elemen pada posisi j ke res
        res += arr[j]; 
      } else {
        // Jumlahkan selisih elemen pada posisi j dan jendela sebelumnya ke res
        res += arr[j] - arr[j - (i * 2) - 1]; 
      }    
    }
    res
  }

  return res;
};    

// var sumOddLengthSubarrays = function(arr) {
//   let sum = 0, N = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//       let total = i * (N-i) + (N-i);
//       total
//       sum += Math.ceil(total / 2) * arr[i];
//       sum
//   }
//   return sum;
//   // T.C: O(N)
//   // S.C: O(1)
// };

console.log(sumOddLengthSubarrays([1,2,3,4,5,6,7])); //176

// console.log(sumOddLengthSubarrays([1,2,3,4,5,6,7])); //176
