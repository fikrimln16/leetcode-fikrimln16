var romanToInt = function (s) {
  var romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var hasil = 0;
  var prev = 0;

  for (var i = s.length - 1; i >= 0; i--) {
    var current = romanMap[s[i]];

    if (current >= prev) {
      hasil += current;
    } else {
      hasil -= current;
    }

    prev = current;
  }

  return hasil;
};

console.log(romanToInt("II"));
