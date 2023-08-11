// var getAverages = function(nums, k) {
  
//   if(k === 0) return nums

//   let start = 0 + k
//   let end = nums.length - k
//   let arr = new Array(nums.length).fill(-1)
  
//   for (let i = start; i < end; i++) {
//     let element = nums[i]
//     let sum = 0
//     let left = i
//     while(left > i-k){
//       sum += nums[left-1]
//       left--
//     }
//     let right = nums.indexOf(element) + k
//     let mid = i
//     while(mid < right){
//       sum+=nums[mid+1]
//       mid++
//     }
//     sum
//     let total = sum + element
//     let avg = Math.floor(total / (k*2+1))
//     arr[i] = avg
//   }
//   return arr
// };


// var getAverages = function(nums, k) {
//   if (k === 0) return nums;

//   let arr = new Array(nums.length).fill(-1);

//   for (let i = k; i < nums.length - k; i++) {
//     let sum = 0;
//     for (let j = i - k; j <= i + k; j++) {
//       sum += nums[j];
//     }
//     let avg = Math.floor(sum / (2 * k + 1));
//     arr[i] = avg;
//   }

//   return arr;
// };

// var getAverages = function(nums, k) {
//   const twoK = 2 * k;
//   const windowSize = twoK + 1;
  
//   const result = [...nums].fill(-1);
//   result

//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//       sum
//       if (i >= twoK) {
//           result[i - k] = Math.floor(sum / windowSize)
//           sum -= nums[i - twoK];
//       }
//   }
//   return result;
// };

var getAverages = function(nums, k) {
    
  const prefixSum = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSum[i] = nums[i];
    } else {
      prefixSum[i] = nums[i] + prefixSum[i - 1];
    }
  }
  console.log(prefixSum) // [7,11,14,23,24,32,37,39,45]
  
  const res = new Array(nums.length).fill(-1);
  for (let i = k ; i <= (nums.length - 1) - k; i++) {
      if (i === k) {
          res[i] = Math.floor(prefixSum[i + k] / (k*2+1));
      } else {
          res[i] = Math.floor((prefixSum[i + k] - prefixSum[i - k - 1]) / (k*2+1));
      }
  }
  return res;
};

console.log(getAverages([1,2,3,4,5], 3));