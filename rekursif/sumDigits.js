// const sumDigits = (numbers) => {
//   const splitNum = numbers.toString().split("");
//   splitNum

//   let results = 0;
//   for ( num of splitNum){
//     results = results + parseInt(num);
//   }

//   return results
// }

const sumDigits = (number) => {
  if (number === 0) {
    return 0; // Basis: Jika angka sudah 0, kembalikan 0
  }

  const lastDigit = number % 10; // Dapatkan digit terakhir
  lastDigit
  const remainingDigits = Math.floor(number / 10); // Dapatkan sisa digit
  remainingDigits
  
  return lastDigit + sumDigits(remainingDigits); // Rekursi: Jumlahkan digit terakhir dengan jumlah digit pada sisa angka
}

console.log(sumDigits(12345)); // Output: 15