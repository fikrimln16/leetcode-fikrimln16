var waysToSplitArray = function(nums) {
   
   let prefixSum = []
   prefixSum[0] = nums[0]
   for (let i = 1; i < nums.length; i++) {
      prefixSum[i] = prefixSum[i-1] + nums[i]
   }


   console.log(prefixSum) // [ 2, 5, 6, 6 ]

   let count = 0
   for (let i = 0; i < nums.length - 1; i++) {
      const left = prefixSum[i];
      console.log(left) // 2 , 5 , 6

      const right = prefixSum[nums.length - 1] - prefixSum[i+1-1]
      console.log(right) // 4 , 1 , 0

      if(left>=right) count++
   }

   return count

};

console.log(waysToSplitArray([2,3,1,0])); // 2