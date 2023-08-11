const customSortString = (order, s) => {
  let orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  let chars = s.split("");

  chars.sort((a, b) => (orderMap.get(a) || 0) - (orderMap.get(b) || 0));

  let sortedString = chars.join("");

  return sortedString;
};

console.log(customSortString("cbadaaa", "abcdaa"));
