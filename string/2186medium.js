var minSteps = function (s, t) {
  
  let arrS = s.split("")
  let arrT = t.split("")

  let count = 0;
  for (const char of s.split("")) {
    char;
    if (!arrT.includes(char)) {
      count++;
    }
  }
  count

  let count2 = 0
  for (const char of t.split("")) {
    char
    if (!arrS.includes(char)) {
      count2++;
    }
  }
  count2

  return count;
};

console.log(minSteps("cotxazilut", "nahrrmcchxwrieqqdwdpneitkxgnt"));
