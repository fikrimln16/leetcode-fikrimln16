var maxSum = function(grid) {
   let max = 0

   for (let row = 0; row < grid.length-2; row++) {
      for (let col = 0; col < grid[0].length-2; col++) {
         max = Math.max(max, 
         grid[row][col] + grid[row][col+1] + grid[row][col+2] + 
         grid[row+1][col+1] + 
         grid[row+2][col] + grid[row+2][col+1] + grid[row+2][col+2]
         )
      }      
   }

   return max
};

console.log(maxSum([[1,2,3],[4,5,6],[7,8,9]]));