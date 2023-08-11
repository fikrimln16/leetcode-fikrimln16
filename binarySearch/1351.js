function binarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

var countNegatives = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    let index =  binarySearch(grid[i]);
    index
    let total = grid[i].length
    total;
    res += total - index
  }

  return res;
};

console.log(
  countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
);
