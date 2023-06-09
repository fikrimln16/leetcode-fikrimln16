/*
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
*/

/*
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
*/

/*
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
*/

var largestOddNumber = function(num) {
  num = num.split("");
  for(let i = num.length - 1; i >= 0; i--){
      if(num[i] % 2 == 0){
          num.pop();
      } else {
          break;
      }
  }
  return num.join("");
};

console.log(largestOddNumber("52")) // 5
console.log(largestOddNumber("4206")) // ''
console.log(largestOddNumber("35427")) // 35427
console.log(largestOddNumber("10133890")) //1013389