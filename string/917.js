// var reverseOnlyLetters = function(s) {
//    let reverse = ''
//    for(let i = s.length - 1; i >= 0; i--){
//       if(s[i] === "-") continue
//       reverse += s[i]
//    }

//    let res = ''
//    let index = 0
//    for (let i = 0; i < s.length; i++) {
//       if(s[i] === "-"){
//          res += '-'
//       } else {
//          res += reverse[index]
//          index++
//       }
//    }

//    res

//    return res
// };

var reverseOnlyLetters = function(s) {
   const isLetter = (char) => /[a-zA-Z]/.test(char);

   // Ubah string menjadi array karakter
   const sArray = s.split('');
   
   let left = 0, right = s.length - 1;

   while (left < right) {
      if (!isLetter(sArray[left])) {
         left++;
      } else if (!isLetter(sArray[right])) {
         right--;
      } else {
         // Tukar huruf jika keduanya adalah huruf
         [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
         left++;
         right--;
      }
   }

   // Gabungkan kembali array menjadi string
   return sArray.join('');
};


console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));