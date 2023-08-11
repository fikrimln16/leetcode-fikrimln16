function counter(iterable) {
  const countMap = new Map();
  for (const element of iterable) {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  }
  let set = new Set([1,2,3,4,4,4])
  console.log(set)
  return countMap;

}

console.log(counter([1, 2, 3, 2, 3]));

const counts = counter([1, 2, 3, 2, 3, 4]);
console.log(counts.get(1)); // Output: 1
console.log(counts.get(2)); // Output: 2
console.log(counts.get(3)); // Output: 2
console.log(counts.get(4)); // Output: 1
console.log(counts.get(5)); // Output: undefined