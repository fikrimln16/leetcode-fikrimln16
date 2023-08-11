var pivotInteger = function(n) {
   if(n == 1) return 1
   let arr = []

   //melalukan rumus prefix sum
   let prefixSum = []
   let temp = 0
   for (let i = 0; i < n; i++) {
      prefixSum[i] = temp + i+1
      temp = prefixSum[i]
      arr[i] = i+1
   }

   console.log(arr) // [ 1, 2, 3, 4, 5, 6, 7, 8 ] 
   console.log(prefixSum) // [ 1, 3, 6, 10, 15, 21, 28, 36 ]

   //melakukan perulangan sampai mendapatkan value yang sama
   for (let i = 0; i < n; i++) {
      const a = prefixSum[i];
      let b = prefixSum[n-1] - prefixSum[i-1]
      if(a==b) return i+1
   }

   //kembalikan -1 jika tidak ada yang sama di perulangan sblmnya
   return -1
};

console.log(pivotInteger(8)); // 6

