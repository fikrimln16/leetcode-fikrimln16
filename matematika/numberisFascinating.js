var isFascinating = function(n) {

   //gabungkan jadi satu
   let res = `${n}${n*2}${n*3}`.split('')

   if(res.includes('0')){
      return false
   }
   if(res.length !== 9){
      return false
   }
   if ((new Set(res)).size !== 9) {
      return false
   }

   return true
};

console.log(isFascinating(183));