var transpose = function(matrix) {

   let res = []
   for (let i = 0; i < matrix[0].length; i++) {
      let temp = []
      for (let j = 0; j < matrix.length; j++) {
         let a = matrix[j][i]
         temp.push(a)
      }
      res.push(temp)
   }

   return res
};

console.log(transpose([[1,2,3],[4,5,6]]));
// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));