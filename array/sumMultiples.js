/*
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
*/

/*
Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
*/
/*
Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.
*/
/*
Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
*/

var sumOfMultiples = function (n) {
  let ans = []
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
      ans.push(i)
    }
  }

  ans // [3,5,6,7,9,10,12,14,15]
  
  let sum = ans.reduce((cur, num) => {
    return cur + num
  }, 0)

  return sum;
};

console.log(sumOfMultiples(15)); //81
