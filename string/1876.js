var countGoodSubstrings = function (s) {
  let count = 0;

  for (let l = 0; l < s.length - 2; l++) {
    const window = `${s[l]}${s[l + 1]}${s[l + 2]}`;
    const temp = new Set(window);
    if (temp.size === 3) count++;
  }
  return count;
};

// var countGoodSubstrings = function (s) {
//   return Array.from({ length: s.length - 2 }, (_, l) => new Set(`${s[l]}${s[l + 1]}${s[l + 2]}`).size === 3).filter(Boolean).length;
// };

console.log(countGoodSubstrings("aababcabc"));
