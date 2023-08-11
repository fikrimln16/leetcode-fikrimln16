var largestLocal = function(grid) {
   
   let lokal = []
   for (let row = 0; row < grid.length - 2; row++) {
      let temp = []
      for (let col = 0; col < grid.length - 2; col++) {
         temp.push(0)
      }
      lokal.push([...temp])
   }

   for (let row = 0; row < grid.length - 2; row++) {
      for (let col = 0; col < grid.length - 2; col++) {
         lokal[row][col] = Math.max(
            grid[row][col], grid[row][col+1], grid[row][col+2],
            grid[row+1][col], grid[row+1][col+1], grid[row+1][col+2],
            grid[row+2][col], grid[row+2][col+1], grid[row+2][col+2]
         )
      }
   }
   
   return lokal

};
console.log(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]));