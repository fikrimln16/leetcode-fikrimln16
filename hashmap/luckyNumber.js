/*
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
*/

/*
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
*/

/*
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/

var findLucky = (arr) => {
  const frequency = {};

  // Menghitung frekuensi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  frequency;

  // Mencari angka beruntung (lucky number)
  let luckyNumber = -1;
  for (const key in frequency) {
    if (key == frequency[key]) {
      luckyNumber = Math.max(luckyNumber, key);
    }
  }

  return luckyNumber;
};

console.log(findLucky([2, 2, 3, 3]));
