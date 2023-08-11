var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
};

console.log(isAnagram("rat", "car"))