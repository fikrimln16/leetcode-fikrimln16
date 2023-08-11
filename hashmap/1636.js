var frequencySort = function (nums) {
  let map = new Map();
  nums.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1);
  });

  let arr = Array.from(map.entries()).sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  return arr.flatMap(([key, value]) => Array(value).fill(key));
};

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
