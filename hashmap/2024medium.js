var maxConsecutiveAnswers = function (answerKey, k) {
  let m = new Map();
  let out = 0;
  let l = 0;

  for (let r = 0; r < answerKey.length; r++) {
    let b = answerKey[r];
    m.set(b, (m.get(b) || 0) + 1);
    m

    
    while ((m.get("T") || 0) > k && (m.get("F") || 0) > k) {
      let temp = answerKey[l]
      temp
      m
      m.set(temp, (m.get(temp) || 0) - 1);
      m
      l += 1;
    }
    m
    r
    l
    out = Math.max(out, r - l + 1);
  }

  return out;
};

console.log(maxConsecutiveAnswers("FFFTTTF", 2));
