const findDuplicates = nums => {
   const map = new Map();
   const res = [];
   
   nums.forEach(num => {
     map.set(num, (map.get(num) || 0) + 1);
     if (map.get(num) === 2) {
       res.push(num);
     }
   });
   
   return res;
 };

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
