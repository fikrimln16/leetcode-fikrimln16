/*
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
*/

/*
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
*/

/*
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let results = [];
  let i = 0;
  arr.forEach((element) => {
    let result = fn(element, i);
    results.push(result);
    i++;
  });
  return results;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
console.log(map(arr, fn));
