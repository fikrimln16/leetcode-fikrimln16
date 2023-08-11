var setZeroes = function (matrix) {
  
  //mencari index yang bervalue 0
  let found = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        let foundAt = [row, col];
        found.push(foundAt);
      }
    }
  }
  console.log(found) // [ [ 0, 0 ], [ 0, 3 ] ]


  //replace 0 sesuai baris dan kolom yang sudah didapatkan
  for (let i = 0; i < found.length; i++) {
    const [row, col] = found[i];

    console.log(row) // 0, 0
    console.log(col) // 0, 3

    //replace dari setiap baris
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }

    //replace dari setiap kolom
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
); // [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]
