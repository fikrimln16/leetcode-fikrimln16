const fibGenerator = (nums, memo = {}) => {
  if (nums in memo) {
    return memo[nums];
  } 

  if (nums === 1) {
    memo[1] = [1];
    return memo[1];
  }

  if (nums === 2) {
    memo[2] = [1, 1];
    return memo[2];
  }

  const fibArr = fibGenerator(nums - 1, memo);
  const nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
  fibArr.push(nextNum);

  memo[nums] = fibArr; 
  return fibArr;
};

console.log(fibGenerator(4));
