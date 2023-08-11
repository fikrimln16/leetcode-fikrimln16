var averageValue = (nums) => {
  let total = 0;
  let even = Math.floor(nums.filter((element) => {
    if (element % 3 === 0 && element % 2 === 0) {
      total++;
      return element % 3 === 0 && element % 2 === 0;
    }
  }).reduce((cur, number) => {
    return cur + number
  }, 0) / total);


  if (total === 0) {
    return 0;
  } else {
    return even;
  }
};

console.log(
  averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51])
);
