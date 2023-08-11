// var checkArithmeticSubarrays = function (nums, l, r) {

//   let res = []

//   for (let i = 0; i < r.length; i++) {
//     let temp = nums.slice(l[i], r[i]+1)
//     temp
//     let sorted = temp.sort((a,b) => a-b)
//     sorted
//     let op = sorted[1] - sorted[0]
//     op
//     for (let j = 0; i < sorted.length - 1; i++) {
//       if(sorted[j] + op !== sorted[j+1]){
//         res.push(false)
//         break
//       }
//     }
    
//     res.push(true)
    
//   }

//   return res
// };


var checkArithmeticSubarrays = function(nums, l, r) {
  let res = [];

  for (let i = 0; i < l.length; i++) {
    let temp = nums.slice(l[i], r[i] + 1);
    let sorted = temp.slice().sort((a, b) => a - b);
    let op = sorted[1] - sorted[0];
    let isArithmetic = true;

    for (let j = 0; j < sorted.length - 1; j++) {
      if (sorted[j] + op !== sorted[j + 1]) {
        isArithmetic = false;
        break;
      }
    }

    res.push(isArithmetic);
  }

  return res;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));


console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]));
