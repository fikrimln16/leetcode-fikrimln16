const howSum = (targetSum, numbers) => {
  //jika semua pengurangan selesai di angka 0, maka terdapat angka yang benar
  if (targetSum === 0) return [];
  //jika tidak selesai pada 0, dan hasil minus, maka tidak ada angka yang dapat mencapai target
  if (targetSum < 0) return null;

  //melakukan perulangan terhadap targetsum dengan numbers
  for (let num of numbers) {
    //targetSum 7, 3, 3, 7
    //num       4, 4, 7, 7

    //variabel baru untuk mengulangi perintah howSum
    const remainder = targetSum - num;
    //remainder 3, -1, -4, 0 ()

    const combinations = howSum(remainder, numbers);
    //combinations = null, null, null, []

    //jika targetSum berhasil mencapai 0, tidak minus, maka akan mengembalikan nilai pengurangnya(num)
    if (combinations !== null) {
      return [...combinations, num];
    }
  }

  return null;
};

console.log(howSum(7, [4, 7])); // [7]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
