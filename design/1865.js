// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  */
// var FindSumPairs = function (nums1, nums2) {
//   this.arr1 = nums1;
//   this.arr2 = nums2;
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// FindSumPairs.prototype.add = function (index, val) {
//   let temp = this.arr2[index]
//   this.arr2[index] = temp + val
// };

// /**
//  * @param {number} tot
//  * @return {number}
//  */
// FindSumPairs.prototype.count = function (tot) {
//   let count = 0
//   for (let i = 0; i < this.arr1.length; i++) {
//     const element = this.arr1[i];
//     for (let j = 0; j < this.arr2.length; j++) {
//       const arr2 = this.arr2[j];
//       if(element + arr2 === tot){
//         count++
//       }
//     }
//   }
//   return count
// };

// var findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
// console.log(findSumPairs.count(7));


var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.map = new Map();
  this.map2 = new Map();

  nums1.forEach((num1) => {
    this.map.set(num1, (this.map.get(num1) || 0) + 1);
  });
  nums2.forEach((num2) => {
    this.map2.set(num2, (this.map2.get(num2) || 0) + 1);
  });
};

FindSumPairs.prototype.add = function (index, val) {
  var x = this.nums2[index];
  this.map2.set(x, this.map2.get(x) - 1);
  this.nums2[index] += val;
  var newX = x + val;
  this.map2.set(newX, (this.map2.get(newX) || 0) + 1);
};

FindSumPairs.prototype.count = function (tot) {
  var count = 0;
  for (var [key, value] of this.map) {
    var diff = tot - key;
    var value2 = this.map2.get(diff);
    if (value2 !== undefined) {
      count += value * value2;
    }
  }
  return count;
};

FindSumPairs.prototype.print = function () {
  return this.map;
};

FindSumPairs.prototype.print2 = function () {
  return this.map2;
};

var findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
console.log(findSumPairs.count(7));
console.log(findSumPairs.add(3, 2));
console.log(findSumPairs.count(8));

console.log(findSumPairs.print());
console.log(findSumPairs.print2());
