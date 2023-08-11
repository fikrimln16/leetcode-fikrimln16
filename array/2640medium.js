var findPrefixScore = function (nums) {
  // let temp = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let max = nums[i];
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] > max) {
  //       max = nums[j];
  //     }
  //   }
  //   temp.push(nums[i] + max);
  // }
  // let res = [];

  // for (let i = 1; i <= temp.length; i++) {
  //   const element = temp.slice(0, i)
  //   res.push(element.reduce((a,b) => a + b))
  // }

  // return res;
  let res = [];
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    sum += nums[i] + max;
    res.push(sum);
  }

  return res;

};

console.log(findPrefixScore([2,3,7,5,10]));
