var setZeroes = function(matrix) {
   
   let map = new Map()

   for (let row = 0; row < matrix.length; row++) {
      const element = matrix[row];
      for (let col = 0; col < element.length; col++) {
         const element = matrix[row][col];
         element
         if(element === 0){
            matrix[row][col] = 0
         }
         matrix[row][col] = 0
      }
      
   }
   map


   return matrix
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));