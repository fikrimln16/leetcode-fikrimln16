/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = nums;
  this.prefixSum = nums.slice();
  // Rumus prefixSum
  for (let i = 1; i < this.prefixSum.length; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const diff = val - this.arr[index];
  this.arr[index] = val;
  
  for (let i = index; i < this.prefixSum.length; i++) {
    this.prefixSum[i] += diff;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.prefixSum[right];
  }
  return this.prefixSum[right] - this.prefixSum[left - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
