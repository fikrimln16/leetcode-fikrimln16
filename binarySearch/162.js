function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (
      nums[mid] > (nums[mid - 1] || -Infinity) &&
      nums[mid] > (nums[mid + 1] || -Infinity)
    ) return mid;
    else if (nums[mid - 1] > nums[mid + 1]) right = mid - 1;
    else left = mid + 1;
  }
}
console.log(findPeakElement([1, 2, 3, 1]));
