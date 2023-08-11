var generate = function (numRows) {
  let res = [];
  if (numRows === 0){
    return res;
  }

  res.push([1]);

  for (let i = 1; i < numRows; i++) {
    let list = [];
    list.push(1);

    for (let j = 1; j < res[i-1].length; j++) {
      let prev = res[i-1][j-1]
      let next = res[i-1][j]
      let sum = prev + next;
      list.push(sum);
    }

    list.push(1);

    res.push([...list]);
  }

  return res;
};

console.log(generate(3)); 
