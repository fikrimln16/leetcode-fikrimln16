var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length-1;
  let ans = nums.length

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1
    }
    if (nums[mid] > target) {
      ans = mid
      end = mid - 1
    }
  }

  return ans
};

console.log(searchInsert([1, 3, 5, 6], 3)); // 2
