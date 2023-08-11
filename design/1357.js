class Cashier {
  constructor(n, discount, products, prices) {
    this.map = new Map();
    for (let i = 0; i < products.length; i++) {
      this.map.set(products[i], prices[i]);
    }

    this.n = n;
    this.discount = discount;
    this.count = 0;
  }

  getBill(product, amount) {
    this.total = 0;
    this.barang = 0;
    for (let i = 0; i < product.length; i++) {
      let jumlah_barang = amount[i];
      this.barang++;
      this.total += this.map.get(product[i]) * jumlah_barang;
    }

    this.count++;
    if (this.count === this.n) {
      this.count = 0;
      return this.total * ((100 - this.discount) / 100);
    }

    return this.total;
  }
}

// Contoh penggunaan kelas Cashier
const products = ["apple", "banana", "orange"];
const prices = [5, 2, 8];
const cashier = new Cashier(3, 10, products, prices);

console.log(cashier.getBill(["apple", "banana"], [1, 2])); // 5*1 + 4*2 = 9
console.log(cashier.getBill(["orange", "banana"], [3, 2])); // 8*3 + 2*2 = 28 

//pelanggan ke tiga dapat diskon, karena setiap perulangan 3 customer dapat diskon
console.log(cashier.getBill(["orange", "apple"], [3, 2])); // 8*3 + 5*2 = 34 * ((100-10) / 100) = 30.6
