var differenceOfSum = function(nums) {
   
   let a = 0
   let b = 0
   for (let i = 0; i < nums.length; i++) {
      a += nums[i]
      const element = String(nums[i]).split('');
      for (let j = 0; j < element.length; j++) {
         b+=parseInt(element[j]);
      }
   }
   return a - b
};

console.log(differenceOfSum([1,15,6,3]));