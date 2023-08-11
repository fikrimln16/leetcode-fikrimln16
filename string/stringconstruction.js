function stringConstruction(s) {
   // Write your code here
   let map = new Map()
   let res = 0
   for (let i = 0; i < s.length; i++) {
      const element = s[i];
      element
      map.set(element, (map.get(element) || 0) + 1)
      if(map.get(element) > 1){
         res++
      }
   }
   if(res){
      return res
   }
   return s.length

}

console.log(stringConstruction("abab"));