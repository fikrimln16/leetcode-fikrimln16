var targetIndices = function(nums, target) {
  let sorted = nums.sort((a,b) => a-b)
  let indexs = []
  sorted.map((element, index) => {
    if(element === target){
      indexs.push(index)
    }
  })
  
  return indexs
};

console.log(targetIndices([1,2,5,2,3], 5)); // [4]