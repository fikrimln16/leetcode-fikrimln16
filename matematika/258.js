const addDigits = (num) => {
   let result = Infinity;

   if (num === 0) return 0;

   while (true) {
     if (result < 10) return result;
     digVal = (num % 10) + Math.floor(num / 10); 
     result = digVal;
     result
     num = digVal;
   }
 };

// const addDigits = (num) => {
//   if (num === 0) {
//     return 0;
//   }
  
//   while (num >= 10) {
//     let digitSum = 0;
    
//     while (num > 0) {
//       let temp = num % 10
//       temp
//       digitSum += temp;
//       digitSum
//       num = Math.floor(num / 10);
//     }
    
//     num = digitSum;
//   }
  
//   return num;
// };


console.log(addDigits(3823));