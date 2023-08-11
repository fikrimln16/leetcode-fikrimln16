var binarySearch = function(nums, target) {
  let start = 0;
  let end = nums.length - 1
  let ans = nums.length
  while(start <= end){
    let mid = Math.floor((start+end) / 2)
    
    if(nums[mid] === target){
      return mid;
    } 

    if ( nums[mid] < target){  
      start = mid + 1
    } 

    if ( nums[mid] > target) {
      ans = mid
      end = mid - 1
    }
  }

  return -1
};

console.log(binarySearch([-1,0,3,5,9,12], 2)); //1