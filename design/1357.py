class Cashier:
    def __init__(self, n, discount, products, prices):
        self.mapping = {}
        for i in range(len(products)):
            self.mapping[products[i]] = prices[i]

        self.n = n
        self.discount = discount
        self.count = 0

    def get_bill(self, product, amount):
        total = 0
        barang = 0
        for i in range(len(product)):
            jumlah_barang = amount[i]
            barang += 1
            total += self.mapping[product[i]] * jumlah_barang

        self.count += 1
        if self.count == self.n:
            self.count = 0
            return total * (100 - self.discount) / 100

        return total
