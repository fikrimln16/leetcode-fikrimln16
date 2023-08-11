var findMatrix = function (nums) {
  let map = new Map();
  let answer = [];
  
  //counter
  for (num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  map.forEach((value, key) => {
    for (let i = 0; i < value; i++) {
      let temp = answer[i]
      temp
      if (!temp) {
        answer.push([]);
      }
      answer[i].push(key); 
    }
  });
  return answer;
};

console.log(findMatrix([1, 2, 3, 1, 2, 1]));
