const factorial = (n) => {
  // Basis: jika n adalah 0 atau 1, kembalikan 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Rekursi: hitung faktorial dari n-1 dan kalikan dengan n
  return n * factorial(n - 1);
}

// Contoh penggunaan
console.log(factorial(5)); // Output: 120
