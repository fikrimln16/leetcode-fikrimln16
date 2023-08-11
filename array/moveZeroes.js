var moveZeroes = function (nums) {
  let i = 1;
  // for (let index = 0; index < nums.length; index++) {
  //   if(nums[index] !== 0){
  //     nums[index] = nums[index]
  //   } else {
  //     i++
  //   }
  // }

  let arr = []
  nums.forEach((element, index) => {
    if (nums[index] === 0) {
      i++;
    } 
    if(nums[index] !== 0) {
      arr[index] = element;
    }
  });

  arr



  
  nums
  i
  while(i < nums.length){
    nums[i] = 0;
    i++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
