let mysql = require("mysql");

// Konfigurasi koneksi database
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "longcommonsubsequence",
});

// Menghitung jumlah makanan dalam setiap kategori menggunakan HashMap
function countFoodsByCategory(data, k) {
  const counter = new Map();

  //counter
  for (const row of data) {
    counter.set(row.category, (counter.get(row.category) || 0) + 1)
  }

  // Menampilkan counter sesuai kondisi k
  for (const [category, count] of counter) {
    if(count>k){
      console.log(`Category: ${category}, Count: ${count}`);
    }
  }
}

// Mengambil data dari database dan melakukan penghitungan
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  const query = "SELECT category FROM foods";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }

    if(!countFoodsByCategory(results, 0))console.log(-1);

    // Menutup koneksi database setelah selesai
    connection.end();
  });
});
