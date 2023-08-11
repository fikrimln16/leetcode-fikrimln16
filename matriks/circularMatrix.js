function generateMatrix(n) {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  
  let cnt = 1;
  for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {
    layer
    // direction 1 - traverse from left to right
    for (let ptr = layer; ptr < n - layer; ptr++) {
      ptr
      layer
      result[layer][ptr] = cnt++;
    }
    // direction 2 - traverse from top to bottom
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
      ptr
      layer
      result[ptr][n - layer - 1] = cnt++;
    }
    // direction 3 - traverse from right to left
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
      ptr
      layer
      result[n - layer - 1][n - ptr - 1] = cnt++;
    }
    // direction 4 - traverse from bottom to top
    for (let ptr = layer + 1; ptr < n - layer - 1; ptr++) {
      ptr
      layer
      result[n - ptr - 1][layer] = cnt++;
    }
  }
  
  return result;
}

console.log(generateMatrix(3));