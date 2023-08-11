var climbStairs = function(n) {
  if(n === 0) return [];
  if(n < 0) return null;
  let pengurangan = [1,2]
  var total = 0;

  for(num of pengurangan){
    const remainder = n - num;
    const combination = climbStairs(remainder);
    if (combination !== null) {
      total++
      return [...combination, num];
    }
  }

  return total
};

console.log(climbStairs(10));