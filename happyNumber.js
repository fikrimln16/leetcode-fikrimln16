/*
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/*
Input: n = 2
Output: false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {

  function getNext(n) {
    let totalSum = 0;
    while (n > 0) {
      let d = n % 10;
      n = Math.floor(n / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  return n === 1;
};

console.log(isHappy(2)); //false
