var reverseVowels = function (s) {
  let stack = [];

  let vowel = "aiueoAIUEO";
  let split = s.split("");
  for (let i = 0; i < split.length; i++) {
    if (vowel.includes(split[i])) stack.push(split[i]);
  }

  let res = [];
  for (let i = 0; i < split.length; i++) {
    if (vowel.includes(split[i].toLowerCase())) {
      res.push(stack.pop());
    } else {
      res.push(split[i]);
    }
  }

  return res.join("");
};

//fungsi swap untuk menukar array
var swap = function (arr, l, r) {
  // [arr[l], arr[r]] = [arr[r], arr[l]];
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};

var reverseVowels = function (s) {
  //vowel untuk pengecekan nanti
  let vowel = "aiueo";
  let arr = s.split("");

  //pointer kiri
  let l = 0;
  //pointer kanan
  let r = s.length - 1;


  //lakukan perulangan sampai kedua titik bertemu di tengah
  while (l < r) {

    //jika bukan vokal, geser kiri ke kanan 1 langkah
    if (!vowel.includes(s[l].toLowerCase())) {
      l++;
    }

    //jika bukan vokal, geser kanan ke kiri 1 langkah
    if (!vowel.includes(s[r].toLowerCase())) {
      r--;
    }

    //jika keduanya sudah vokal, maka jalankan fungsi swap
    if (vowel.includes(s[l].toLowerCase()) &&vowel.includes(s[r].toLowerCase())) {
      //lakukan swap
      swap(arr, l, r);
      //geser kiri ke kanan satu langkah
      l++;
      //geser kanan ke kiri satu langkah
      r--;
    }
  }

  //gabungkan kembali agar menjadi string
  return arr.join("");
};

console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aiueo"));
console.log(reverseVowels("aA"));
