var canConstruct = function(ransomNote, magazine) {
   let magazineMap = new Map()

   for (const element of magazine) {
      magazineMap.set(element, (magazineMap.get(element) || 0) + 1);
    }

   for (const element of ransomNote) {
      if(magazineMap.has(element) && magazineMap.get(element) > 0) {
         magazineMap.set(element, magazineMap.get(element) - 1);
      } else {
         return false;
      }
   }

   return true
};

console.log(canConstruct("bde", "abbed"));