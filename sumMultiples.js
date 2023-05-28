var sumOfMultiples = function (n) {
  let ans = []
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0){
      ans.push(i)
    }
    if(i % 5 === 0){
      ans.push(i)
    }
    if(i % 7 === 0){
      ans.push(i)
    } 
  }
  
  let sum = ans.reduce((cur, num) => {
    return cur + num
  }, 0)

  return sum;
};

console.log(sumOfMultiples(7));
