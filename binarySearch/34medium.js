/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {

  //fungsi binary search untuk mencari index pertama nya
  function findFirstIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      //kita menggunakan OR untuk mengecek apakah nums[mid] sama dengan target dan nums[mid-1] lebih kecil dari target
      if (nums[mid] === target && (mid === 0 || nums[mid-1] < target)) {
        return mid;
      }

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  //fungsi binary search untuk mencari index terakhir nya
  function findLastIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      //kita menggunakan OR untuk mengecek apakah nums[mid] sama dengan target dan nums[mid+1] lebih besar dari target
      if (nums[mid] === target && (mid === nums.length - 1 || nums[mid+1] > target)) {
        return mid;
      }

      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  return [findFirstIndex(nums, target), findLastIndex(nums, target)];
}

// function searchRange(nums, target) {

//   //menggunakan metode binarySearch untuk mencari index
//   const findIndex = (nums, target, isLower) => {
//     let left = 0;
//     let right = nums.length - 1;
//     let index = -1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (nums[mid] > target || (isLower && nums[mid] === target)) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }

//       if (nums[mid] === target) {
//         index = mid;
//       }
//     }

//     return index;
//   };

//   const firstIndex = findIndex(nums, target, true);
//   const lastIndex = findIndex(nums, target, false);

//   return [firstIndex, lastIndex];
// }






console.log(searchRange([5,7,7,8,8,8,10], 8))