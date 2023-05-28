/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/*
Input: nums = [2,2,1]
Output: 1
*/

/*
Input: nums = [4,1,2,1,2]
Output: 4
*/

/*
Input: nums = [1]
Output: 1
*/

var singleNumber = function (nums) {
  let map = new Map();

  nums.forEach((element, index) => {
    if (map.has(element) === false) {
      let temp = 0;
      map.set(element, temp + 1);
    } else {
      let temp = map.get(element);
      map.set(element, temp + 1);
    }
  });

  map // { 4 => 1, 1 => 2, 2 => 2}
  let res = 0;
  map.forEach((kunci, nilai) => {
    if (kunci === 1) {
      res = nilai;
    }
  });

  return res;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
