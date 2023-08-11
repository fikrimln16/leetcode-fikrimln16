// var numOfSubarrays = function(arr, k, threshold) {
//    let res = 0
//    let totalmove = arr.length - k
//    for (let i = 0; i < totalmove+1; i++) {
//       let tempArr = 0
//       for (let j = i; j < k+i; j++) {
//          tempArr+=arr[j];
//       }
//       if(tempArr / k >= threshold){
//          res++
//       }

//    }
//    return res
// };
var numOfSubarrays = function (arr, k, threshold) {
  let res = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum / k >= threshold) {
    res++;
  }

  for (let i = k; i < arr.length; i++) {
    let nextWindow = arr[i];
    let prevWindow = arr[i - k];
    windowSum += nextWindow - prevWindow;
    if (windowSum / k >= threshold) {
      res++;
    }
  }

  return res;
};

console.log(numOfSubarrays([2, 4, 6, 8, 10], 2, 8)); //3

let x = 5
console.log(x)
x = "berubah"
console.log(x)
