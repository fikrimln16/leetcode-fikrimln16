var sortPeople = function(names, heights) {
   let map = new Map()
   for (let i = 0; i < names.length; i++) {
      map.set(heights[i], names[i])
   }
   return res = Array.from(map.entries()).sort((a,b) => b[0] - a[0]).map(element => element[1])
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]));
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150]));