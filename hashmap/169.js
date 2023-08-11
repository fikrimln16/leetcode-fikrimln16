var majorityElement = function (nums) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) > n / 2) return nums[i];
  }
  return -1;
};

console.log(majorityElement([2,2,1,1,1,2,2])); //2