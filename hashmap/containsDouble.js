/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map()

  nums.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1)
  })
  map

  for(const value of map.values()){
    if(value>1)return true
  }

  return false
};

console.log(containsDuplicate([1, 2, 3, 4, 1]));
