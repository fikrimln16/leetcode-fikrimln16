var arrayStringsAreEqual = function(word1, word2) {
   
   let kata1 = word1.join('')
   let kata2 = word2.join('')
   if(kata1 === kata2){
      return true
   }

   return false
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));