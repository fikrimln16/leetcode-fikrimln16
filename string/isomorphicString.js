var isIsomorphic = function (s, t) {
  //jika jumlah tidak sama maka false
  if (s.length != t.length) return false;

  let temp_1 = [];
  let temp_2 = [];

  for (let i = 0; i < s.length; i++) {
    temp_1.push(s.indexOf(s[i]));
    temp_2.push(t.indexOf(t[i]));

    //ketika tidak sama, berarti terdapat item yang sama, karena akan mengeluarkan index yang sudah ada
    if (temp_1[i] != temp_2[i]) return false;
  }
  return true;
};

console.log(isIsomorphic("badc", "ttde")); //false
