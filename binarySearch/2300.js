var successfulPairs = function (spells, potions, success) {
  let res = [];

  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (spells[i] * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res.push(potions.length - 1 - right);
  }

  return res;
};

// console.log(successfulPairs([5,1,3], [1,2,3,4,5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
