var largestLocal = function(grid) {
   
   //buat array lokal untuk menampung jawaban
   let lokal = []
   for (let row = 0; row < grid.length - 2; row++) {
      let temp = []
      for (let col = 0; col < grid.length - 2; col++) {
         temp.push(0)
      }
      lokal.push([...temp])
   }

   console.log(lokal) // [[0,0],[0,0]]

    //mencari nilai maksimal dari array 3x3 nya
   for (let row = 0; row < grid.length - 2; row++) {
      for (let col = 0; col < grid.length - 2; col++) {
          //lalu timpa pada array lokal tadi
         lokal[row][col] = Math.max(
            grid[row][col], grid[row][col+1], grid[row][col+2],
            grid[row+1][col], grid[row+1][col+1], grid[row+1][col+2],
            grid[row+2][col], grid[row+2][col+1], grid[row+2][col+2]
         ) // 9, 9, 8, 6
      }
   }
   
   return lokal // [ [ 9, 9 ], [ 8, 6 ] ]

};

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))