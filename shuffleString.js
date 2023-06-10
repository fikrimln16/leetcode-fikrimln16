/*
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
*/

/*
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

/*
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
*/

var restoreString = function (s, indices) {
  var str = new Array(indices.length);     
  
  for (let index = 0; index < indices.length; index++) {
    str[indices[index]] = s[index];
  }

  return str.join('')
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); //leetcode

