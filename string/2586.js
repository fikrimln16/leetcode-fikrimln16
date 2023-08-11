var vowelStrings = function (words, left, right) {
   const vocal = ["a", "i", "u", "e", "o"];
   let res = 0;
   
   for (let i = left; i <= right; i++) {
     const element = words[i];
     if (vocal.includes(element[0]) && vocal.includes(element[element.length-1])) {
       res++;
     }   
   }
   
   return res;
};

// console.log(vowelStrings(["are","amy","u"], 0, 2));
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"],1, 4));
