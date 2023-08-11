// var strStr = function (haystack, needle) {

//   let pointer = []
//   for (let i = 1; i <= haystack.length; i++) {
//     let scndArray = []
//     for (let j = 0; j < i; j++) {
//       const element = haystack[j];
//       scndArray.push(element)
//     }
//     pointer.push([...scndArray])
//   }
//   let res = 0;
//   for (let i = 0; i < pointer.length; i++) {
//     const element = pointer[i];
//     let temp = element.join('')
//     needle
//     temp
//     if(temp === needle){
//       res = Math.min(res, i)
//     } else {
//       res = -1
//     }
//   }
  

//   return res
// };
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      let temp = haystack[i + j]
      temp
      let temp2 = needle[j]
      temp2
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));
