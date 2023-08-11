const perpangkatan = (base, exponent) => {
  if(exponent === 0) return 1;
  return base * perpangkatan(base, exponent-1)
}

console.log(perpangkatan(2, 10));