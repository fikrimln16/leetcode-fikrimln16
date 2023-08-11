// var findPairs = function (nums, k) {
//   let set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const diff = nums[j];
//       if (diff === element + k || diff === element - k) {
//         const smaller = Math.min(element, diff);
//         const larger = Math.max(element, diff);
//         set.add(`${smaller}, ${larger}`);
//       }
//     }
//   }

//   return set.size;
// };

var findPairs = function (nums, k) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const diff = nums[j];
      if (diff === element + k || diff === element - k) {
        const smaller = Math.min(element, diff);
        const larger = Math.max(element, diff);
        set.add(`${smaller}, ${larger}`);
      }
    }
  }

  return set.size;
};



console.log(findPairs([3,1,4,1,5], 2))