// var equalPairs = function (grid) {
//   let count = 0;
//   const kolom = [];

//   for (let row = 0; row < grid.length; row++) {
//     let temp = [];
//     for (let col = 0; col < grid.length; col++) {
//       temp.push(grid[col][row]);
//     }
//     kolom.push([...temp]);
//   }

//   for (let i = 0; i < grid.length; i++) {
//     const baris = grid[i];
//     for (let j = 0; j < kolom.length; j++) {
//       const row = kolom[j];
//       if (JSON.stringify(row) === JSON.stringify(baris)) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

var equalPairs = function (grid) {
  
  const rowMap = new Map();
  //membuat array untuk setiap baris dari matriks(grid)
  for (let row = 0; row < grid.length; row++) {
    const currentRow = grid[row];
    console.log(currentRow) // [3,2,1], [1,7,6], [2,7,7]
    
    const rowString = currentRow.join(',');
    console.log(rowString) // 3,2,1 1,7,6 2,7,7
    
    //melakukan counter pada rowMap untuk menghitung key dan value dari array baris
    rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1);
  }
  console.log(rowMap) // Map { '3,2,1' => 1, '1,7,6' => 1, '2,7,7' => 1 }

  let count = 0;
  for (let col = 0; col < grid.length; col++) {
    //membuat array sementara untuk menyimpan array kolom dari matriks
    let temp = []; 
    for (let row = 0; row < grid.length; row++) {
      temp.push(grid[row][col]);
    }
    console.log(temp) //[3,1,2], [2,7,7], [1,6,7]
    
    //gabungkan dari array kolom tersebut dengan menggunakan join agar bisa dibandingkan
    const colString = temp.join(',');
    console.log(colString) // 3,1,2 2,7,7 1,6,7


    //membandingkan jika colString sudah ada di map atau belum
    if (rowMap.has(colString)) {
      //jika sudah kita tambahkan count dengan value dari key yang sudah ditemukan
      count += rowMap.get(colString);
    }
  }

  return count;
};

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // 3

let a = [1,2,3]
let b = [1,2,3]
console.log(JSON.stringify(a)==JSON.stringify(b))
