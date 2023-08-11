var maximumBeauty = function(items, queries) {
   //karena kita ingin menggunakan binarySearch maka kita sorting price dulu
   items.sort((a, b) => a[0] - b[0]);
   
   let max = items[0][1];
   for (let i = 0; i < items.length; i++) {
      max = Math.max(max, items[i][1]);
      items[i][1] = max;
   }
   
   //metode binarySearch
   const binarySearch = (arr, target) => {
      let left = 0;
      let right = arr.length - 1;
      let result = 0;
      while (left <= right) {
         let mid = Math.floor((left + right) / 2);
         if (arr[mid][0] <= target) {
            result = arr[mid][1];
            left = mid + 1;
         } else {
            right = mid - 1;
         }
      }
      return result;
   };

   const ans = [];
   queries.forEach(element => ans.push(binarySearch(items, element)))
   
   return ans;
};


console.log(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6]));
// console.log(maximumBeauty([[1,2],[1,2],[1,3],[1,4]], [1]));
// console.log(maximumBeauty([[10,1000]], [5]));