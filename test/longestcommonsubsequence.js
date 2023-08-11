let mysql = require("mysql");

// Konfigurasi koneksi database
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "longcommonsubsequence",
});

function longestCommonSubsequence(str1, str2) {
  let table = new Array(str1.length + 1).fill(0);
  for (let i = 1; i <= str1.length; i++) {
    table[i] = new Array(str2.length + 1).fill(0);
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }

  let lcs = "";
  let i = str1.length;
  let j = str2.length;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs += str1[i - 1];
      i--;
      j--;
    } else if (table[i - 1][j] > table[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Mengambil data dari database dan mencari LCS untuk setiap baris data
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  let query = "SELECT id, string1, string2 FROM data";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }
    let arr = []
    let index = 0
    for (let row of results) {
      let string1 = row.string1;
      let string2 = row.string2;
      console.log("index : ", index, longestCommonSubsequence(string1, string2))
      index++
      // arr.push(...longestCommonSubsequence(string1, string2));
    }

    console.log(arr.filter((element) => element != undefined))
    // Menutup koneksi database setelah selesai
    connection.end();
  });
});
