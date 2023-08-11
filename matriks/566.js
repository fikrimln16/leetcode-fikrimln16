var matrixReshape = function(mat, r, c) {
   
   let lokal = []
   for (let row = 0; row < r; row++) {
      let temp = []
      for (let col = 0; col < c; col++) {
        temp.push(0)
      }      
      lokal.push(temp)
   }

   lokal

   for (let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
         lokal[row] = mat[row][col]         
      }
      
   }

   lokal
};

console.log(matrixReshape([[1,2],[3,4]], 2, 4));