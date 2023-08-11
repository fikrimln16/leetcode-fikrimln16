/*
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
*/

/*
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
*/

/*
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
*/

/*
Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.
*/

const chunk = (arr, size) => {

  var chunkedArray = [];
  var index = 0;

  while (index < arr.length) {
    const chunk = arr.slice(index, index + size)
    chunkedArray.push(chunk);
    index += size;
  }

  return chunkedArray;
};

console.log(chunk([1, 2, 3, 4, 5], 3));
