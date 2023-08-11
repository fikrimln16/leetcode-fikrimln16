var isToeplitzMatrix = function (matrix) {
  if (matrix.length === 1 || matrix[0].length === 1) return true;

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[0].length - 1; col++) {
      if (matrix[row][col] !== matrix[row + 1][col + 1]) {
        return false;
      }
    }
  }

  return true;
};

console.log(
  isToeplitzMatrix([
    [11, 74, 0, 93],
    [40, 11, 74, 7],
  ])
);
