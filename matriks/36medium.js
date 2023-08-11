var isValidSudoku = function (board) {
   let set = new Set(); // Membuat set kosong untuk menyimpan kunci (key) unik

   for (let baris = 0; baris < 9; baris++) {
      for (let kolom = 0; kolom < 9; kolom++) {
         let nilaiSel = board[baris][kolom]; // Nilai dari sel (cell) saat ini

         if (nilaiSel !== '.') { // Jika nilai sel bukan '.'
            let kunciBaris = `baris${baris}${nilaiSel}`; // Kunci unik untuk baris
            let kunciKolom = `kolom${kolom}${nilaiSel}`; // Kunci unik untuk kolom
            let kunciKotak = `kotak${Math.floor(baris / 3)}${Math.floor(kolom / 3)}${nilaiSel}`; // Kunci unik untuk kotak

            if (set.has(kunciBaris) || set.has(kunciKolom) || set.has(kunciKotak)) {
               return false; // Jika kunci sudah ada di dalam set, Sudoku tidak valid
            }

            set.add(kunciBaris); // Menambahkan kunci baris ke dalam set
            set.add(kunciKolom); // Menambahkan kunci kolom ke dalam set
            set.add(kunciKotak); // Menambahkan kunci kotak ke dalam set
         }
      }
   }

   return true; // Jika semua sel memenuhi aturan Sudoku, Sudoku valid
};




console.log(
  isValidSudoku([["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]])
);
