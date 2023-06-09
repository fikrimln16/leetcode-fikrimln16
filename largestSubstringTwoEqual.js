/*
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.
*/

/*
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
*/

/*
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
*/

/*
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
*/

var largestSubstring = function(s) {
  let array = s.split('')

  let temp = []
  let res = []
  let max = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] === array[j]){
        temp.push(i, j)
      }
    }
  }

  for (let i = 0; i < temp.length; i++) {
    let element = temp[i]
    let element2 = temp[i+1]
    let sum = element2 - element
    if(sum > max){
      max = sum
    }
  }

  if(temp.length && res.length >= 0){
    return max-1
  } else if (temp.length && res.length === 0){
    return temp.length
  } else {
    return -1
  }

};

console.log(largestSubstring("ccac"))