function isPalindrome(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) {
    return false;
  }

  let reversedNum = 0;
  let originalNum = num;
  while (num > 0) {
    num
    reversedNum = (reversedNum * 10) + (num % 10);
    reversedNum
    num = Math.floor(num / 10);
    num
  }
  return originalNum === reversedNum;
}

console.log(isPalindrome(123));