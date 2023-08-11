const longestPalindrome = function (s) {
  let maxLength = 0;
  let start = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // Untuk panjang palindrome ganjil
    expandAroundCenter(i, i + 1); // Untuk panjang palindrome genap
  }

  return s.slice(start, start + maxLength);
};

console.log(longestPalindrome("adada"));
