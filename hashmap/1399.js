var countLargestGroup = function(n) {
    
   let map = new Map()

   for (let i = 1; i <= n; i++) {
      let math = i%10
      math 
      let temp = [math]
      map.set(i, temp)      
   }

   map

};

console.log(countLargestGroup(13));