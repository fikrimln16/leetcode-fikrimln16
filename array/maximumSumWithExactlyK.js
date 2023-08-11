var maximizeSum = function(nums, k) {
  let end = nums.length-1
  let temp = []
  for (let i = 0; i < k; i++) {
    let arr = []
    const element = nums[end];
    element
    temp
    arr.push(temp + nums[end])
    temp.push([...arr])
    nums[end] = element+1
  }
  return temp
};

console.log(maximizeSum([1,2,3,4,5], 3))
// console.log(maximizeSum([5,5,5], 2))