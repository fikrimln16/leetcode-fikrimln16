var repeatedNTimes = function(nums) {
  let map = new Map()
  for(num of nums){
    map.set(num, (map.get(num) || 0) + 1)
    if(map.get(num) === nums.length / 2) return num
  }
};

console.log(repeatedNTimes([1,2,3,3]));