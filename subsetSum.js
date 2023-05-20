const bestSum = (targetSum, numbers) => { 

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for ( let num of numbers){
    targetSum
    num      
    const remainder = targetSum - num;
    remainder
    const remainderCombination = bestSum(remainder, numbers);
    remainderCombination
    if ( remainderCombination !== null){
      const combination = [...remainderCombination, num];
      combination
      if (shortestCombination === null || combination.length < shortestCombination.length){
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}

console.log(bestSum(8, [3,5]))
