var frequencySort = function(s) {
   let map = new Map()
   let res = []
   for (let i = 0; i < s.length; i++) {
      const element = s[i];
      map.set(element, (map.get(element) || 0) + 1)
   }

   //sorting map berdasarkan value 
   const result = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
   
   for (let i = 0; i < result.length; i++) {
      const element = result[i];
      let temp = element[1]
      temp
      for (let j = 0; j < temp; j++) {
         res.push(element[0])
      }
   }

   return res.join("")
};

console.log(frequencySort("tree"));