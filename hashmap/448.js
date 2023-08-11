var findDisappearedNumbers = function(nums) {
   let res = []

   let map = new Set(nums)
   map // Set {4,3,2,7,8,1}

   //cek apakah dari range 1 - total array ada pada set atau tidak
   for (let i = 1; i <= nums.length; i++) {
      //jika tidak ada maka tambah kan index ke arr res
      if(!map.has(i)) res.push(i)
   }
   return res
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));