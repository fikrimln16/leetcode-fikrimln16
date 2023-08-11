var deleteGreatestValue = function (grid) {
  let res = 0

  //sorting sub array, karena kita ingin mengambil yang terbesar
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a);
  }

  //lakukan perulangan dengan jumlah isi dari sub array
  let total_row = grid[0].length
  for (let i = 0; i < total_row; i++) {
    let max = -Infinity;
    // get max of each column
    for (let j = 0; j < grid.length; j++) {
      //bandingkan sub array sebelumnya dan sub array selanjutnya
      max = Math.max(max, grid[j][i]);
    }

    //tambah res dengan nilai maksnya, lalu lanjutkan ke sub array selanjutnya
    res += max;
  }

  return res;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);
// console.log(deleteGreatestValue([[9,2,3], [1,2,3]]));
// console.log(deleteGreatestValue([[12]]));
// console.log(
//   deleteGreatestValue([
//     [35, 52, 74, 92, 25],
//     [65, 77, 1, 73, 32],
//     [43, 68, 8, 100, 84],
//     [80, 14, 88, 42, 53],
//     [98, 69, 64, 40, 60],
//   ])
// );
