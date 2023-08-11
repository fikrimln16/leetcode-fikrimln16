let mysql = require("mysql");

// Konfigurasi koneksi database
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "longcommonsubsequence",
});

// Menghitung total penjualan berdasarkan kategori dan nama menggunakan reduce
function calculateTotalSalesByCategory(data) {
  const totalSales = data.reduce((accumulator, item) => {
    const { kategori, user, jumlah, harga } = item;
    if (!accumulator[kategori]) {
      accumulator[kategori] = {};
    }
    if (!accumulator[kategori][user]) {
      accumulator[kategori][user] = {
        totalJumlah: 0,
        totalHarga: 0,
      };
    }
    accumulator[kategori][user].totalJumlah += jumlah;
    accumulator[kategori][user].totalHarga += jumlah * harga;
    return accumulator;
  }, {});

  // Menampilkan hasil perhitungan
  for (const kategori in totalSales) {
    console.log(`Kategori: ${kategori}`);
    for (const user in totalSales[kategori]) {
      console.log(`User: ${user}`);
      console.log(`Total Jumlah: ${totalSales[kategori][user].totalJumlah}`);
      console.log(`Total Harga: ${totalSales[kategori][user].totalHarga}`);
      console.log("-----------------------------");
    }
  }
}

// Mengambil data dari database dan melakukan perhitungan
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  const query =
    "SELECT produk, kategori, jumlah, harga, nama FROM penjualan_data";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }

    calculateTotalSalesByCategory(results);

    // Menutup koneksi database setelah selesai
    connection.end();
  });
});
