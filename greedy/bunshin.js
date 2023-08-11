//fungsi untuk mencari jumlah dari pembaginya
var sumDivider = (num) => {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
};

var bunshin = (count) => {
  if(count < 0){
    return "Wrong Input"
  }

  let num = 220;

  //untuk menampung angka-angka bunshin
  let bunshin = [];

  //lakukan perulangan sampai count yang diminta
  while (bunshin.length < count) {
    const sumDivisorsNum = sumDivider(num);
    sumDivisorsNum


    if (sumDivider(num) !== num && sumDivider(sumDivisorsNum) === num) {
      bunshin.push(num);
    }
    num++;
  }

  return bunshin;
};

console.log(bunshin(-1)); // Wrong Input
console.log(bunshin(5)); // [ 220, 284, 1184, 1210, 2620 ]

console.log(sumDivider(20));