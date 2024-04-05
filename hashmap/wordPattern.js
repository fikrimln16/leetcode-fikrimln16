var wordPattern = function(pattern, s) {
   let map1 = new Map();
   let map2 = new Map();

   let split_pattern = pattern.split("");
   let split_s = s.split(" ");

   if (split_pattern.length !== split_s.length) {
      return false;
   }


   for (let i = 0; i < split_pattern.length; i++) {
      const char = split_pattern[i];
      const word = split_s[i];

      if (map1.has(char)) {
         if (map1.get(char) !== word) {
            return false;
         }
      } else {
         map1.set(char, word);
      }

      if (map2.has(word)) {
         if (map2.get(word) !== char) {
            return false;
         }
      } else {
         map2.set(word, char);
      }
   }

   map1
   map2

   return true;
};

console.log(wordPattern("abbba", "dog cat cat dog cat")); // Output: false
