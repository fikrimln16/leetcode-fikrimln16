var relativeSortArray = function (arr1, arr2) {
  let res = [];
  let sisa = [];

  let map = new Map();
  arr2.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 0);
    }
  });

  arr1.forEach((element) => {
    if (!map.has(element)) {
      sisa.push(element);
    } else {
      map.set(element, map.get(element) + 1);
    }
  });

  map.forEach((element, index) => {
    for (let i = 0; i < element; i++) {
      res.push(index);
    }
  });

  return res.concat(sisa.sort((a, b) => a - b));
};

// console.log(
//   relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
// );
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
