// var sumEvenAfterQueries = function(nums, queries) {
//   let res = []
//   for (let i = 0; i < queries.length; i++) {
//     let sum = nums[queries[i][1]] + queries[i][0]
//     nums[queries[i][1]] = sum
//     let even = nums.filter((element) => {
//       return element % 2 == 0
//     })

//     if(even.length === 0){
//       res.push(0)
//     } else{
//       res.push(even.reduce((a, b) => {
//         return a + b
//       }))
//     }
//   }
//   return res
// };
var sumEvenAfterQueries = function(nums, queries) {
  let res = [];
  let evenSum = nums.reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0), 0);

  for (let i = 0; i < queries.length; i++) {
    const val = queries[i][0];
    const index = queries[i][1];
    const prevNum = nums[index];
    const newNum = prevNum + val;

    if (prevNum % 2 === 0) {
      evenSum -= prevNum;
    }
    if (newNum % 2 === 0) {
      evenSum += newNum;
    }

    nums[index] = newNum;
    res.push(evenSum);
  }

  return res;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));
// console.log(sumEvenAfterQueries([1], [[4,0]]));