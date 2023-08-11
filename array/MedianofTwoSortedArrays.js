var findMedianSortedArrays = function(nums1, nums2) {
   let merged = [...nums1, ...nums2].sort((a, b) => a - b);
   merged.sort((a, b) => a-b)
   let total = merged.length

   if(total % 2 === 0){
      let mid = total / 2;
      return med = (merged[mid] + merged[mid-1]) / 2
   } else {
      return merged[Math.floor(total/2)]
   }
};

console.log(findMedianSortedArrays([1,3], [2]));