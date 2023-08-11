/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prefixSum = nums.slice();
  //rumus prefixSum
  for (let i = 1; i < this.prefixSum.length; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
  }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  if (left === 0) {
      return this.prefixSum[right];
  }
  return this.prefixSum[right] - this.prefixSum[left - 1];
};

var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
