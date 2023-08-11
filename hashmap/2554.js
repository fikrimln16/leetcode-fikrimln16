var maxCount = function (banned, n, maxSum) {
  let currentSum = 0, count = 0;

  let set = new Set(banned)
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      //jika maxsum masih lebih besar dari currentsum
      if(maxSum >= currentSum+i){
        //tambahkan currentsum dengan indeks
        currentSum += i
        //tambahkan count untuk result
        count++
      }
    }
  }

  return count;
};

//[2,3,4]

console.log(maxCount([11], 7, 50));
