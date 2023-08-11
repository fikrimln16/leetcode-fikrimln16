// var smallerNumbersThanCurrent = function(nums) {
//    let res = []

//    for (let i = 0; i < nums.length; i++) {
//       let count = 0
//       for (let j = 0; j < nums.length; j++) {
//          if(nums[j] < nums[i]) count++
//       }
//       res.push(count)
      
//    }

//    return res
// };

var smallerNumbersThanCurrent = function(nums) {
   const sortedNums = [...nums].sort((a, b) => a - b);
   const countMap = new Map();
   const result = [];

   for (let i = 0; i < sortedNums.length; i++) {
       if (!countMap.has(sortedNums[i])) {
           countMap.set(sortedNums[i], i);
       }
   }

   for (let num of nums) {
       result.push(countMap.get(num));
   }

   return result;
};


console.log(smallerNumbersThanCurrent([6,5,4,8]));