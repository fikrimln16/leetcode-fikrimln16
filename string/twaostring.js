function twoStrings(s1, s2) {
   // Create a Set from s2 characters
   const charSet = new Set(s2);
    
   // Iterate through s1 characters
   for (let i = 0; i < s1.length; i++) {
       const char = s1[i];
       if (charSet.has(char)) {
           return "YES";
       }
   }
   
   return "NO";

}

console.log(twoStrings("zzz", "world"));