var largestAltitude = function(gain) {
  let curr = 0;
  let max = 0;

  for (let i=0; i < gain.length; i++){
      curr += gain[i];
      max = Math.max(curr, max);
  }
  return max;
};

console.log(largestAltitude([52,-91,72]));
