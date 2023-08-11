var sumOfUnique = function(nums) {
   let map = new Map()
   let res = 0
   nums.forEach((element) => {
      map.set(element, (map.get(element) || 0) + 1)
   })
   map.forEach((key, value) => {
      if(key == 1){
         res += value
      }
   })
   return res
};

console.log(sumOfUnique([1,2,3,2]));
console.log(sumOfUnique([1,1,1,1]));
console.log(sumOfUnique([1,2,3,4]));