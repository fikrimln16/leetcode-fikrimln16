const combinationSum = (targetSum, numbers) => {
  if (targetSum === 0) return [[]];
  if (targetSum < 0) return null;

  let results = [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const combinations = combinationSum(remainder, numbers);

    if (combinations !== null) {
      for (let combination of combinations) {
        const chance = [num, ...combination];
        results.push(chance);
      }
    }
  }

  return results;
}

console.log(combinationSum(7, [2, 3, 6, 7]));
