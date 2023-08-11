var testing = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 2) {
    count++;
  }

  //o(logN)
  //o(N)

  return count;
};

console.log(testing(32));


function example4(n) {
   let x = 0;
   while (n > 0) {
       x += n;
       n = Math.floor(n / 2);
   }
   return x;
}

console.log(example4(10))