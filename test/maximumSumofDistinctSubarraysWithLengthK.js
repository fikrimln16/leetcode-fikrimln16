/*
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

/*
Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
*/

/*
Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
*/

var maximumSubarraySum = (nums, k) => {
  let subArray = [];
  let max = 0;
  let temp = k;
  let slicedArray = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    temp;
    for (let j = i; j <= nums.length; j++) {
      subArray.push(nums[j]);
    }
    var sliced = subArray.slice(i, temp);
    slicedArray[i] = sliced;
    temp = temp + 1;
  }

  console.log(slicedArray.length);

  for (let i = 0; i < slicedArray.length; i++) {
    let allUnique = slicedArray[i].every(function (element, index) {
      return slicedArray[i].indexOf(element) === index;
    });
    if (allUnique) {
      //hitung jumlah
      let res = slicedArray[i].reduce((curr, num) => {
        return curr + num;
      });
      if (res === null || res > max) {
        max = res;
      }
    } else {
      max = max + 0;
    }
  }

  if (k === 1) {
    let maxValue = Math.max(...nums);
    return maxValue;
  }
  return max;
};

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3));
