var leftRightDifference = function(nums) {
   
   let leftPrefixSum = []
   leftPrefixSum[0] = 0
   for (let i = 1; i < nums.length; i++) {
      leftPrefixSum[i] = leftPrefixSum[i-1] + nums[i-1]
   }

   let rightPrefixSum = []
   rightPrefixSum[nums.length - 1] = 0
   for (let i = nums.length - 1; i > 0; i--) {
      rightPrefixSum[i-1] = nums[i] + rightPrefixSum[i]
   }

   let res = []
   for (let i = 0; i < nums.length; i++) {
      res.push(Math.abs(leftPrefixSum[i] - rightPrefixSum[i]))
      
   }
   
   return res
};

console.log(leftRightDifference([1]));