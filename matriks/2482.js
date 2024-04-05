var diff = (row, col, grid) => {
  let zeroRow = 0;
  let onesRow = 0;
  for (let i = 0; i < grid[row].length; i++) {
    const element = grid[row][i];
    if (element === 0) {
      zeroRow++;
    } else {
      onesRow++;
    }
  }

  let zeroCol = 0;
  let onesCol = 0;
  for (let i = 0; i < grid.length; i++) {
    const element = grid[i][col];
    if (element === 0) {
      zeroCol++;
    } else {
      onesCol++;
    }
  }

  return onesRow + onesCol - zeroRow - zeroCol;
};

var onesMinusZeros = function (grid) {
  let result = [];

  for (let row = 0; row < grid.length; row++) {
    let temp = [];
    for (let col = 0; col < grid[row].length; col++) {
      temp.push(diff(row, col, grid));
    }
    result.push([...temp]);
  }

  return result;
};

console.log(
  onesMinusZeros([
    [1, 1, 1],
    [1, 1, 1],
  ])
);
