/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/*
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

/*
Input: s = "God Ding"
Output: "doG gniD"
*/

var reverseWords = function(s) {
  let split = s.split(' ')
  let res = []

  split.forEach((element, index) => {
    let reverseKata = element.split('')
    for (let i = reverseKata.length-1; i >= 0; i--) {
      res.push(reverseKata[i]);
    }
    index === split.length - 1 ? res.push() : res.push(' ');
  })
  return res.join('')
};

console.log(reverseWords("God Ding")); //doG gniD
console.log(reverseWords("Let's take LeetCode contest")); //s'teL ekat edoCteeL tsetnoc