var maximum69Number = function (num) {
  let curMax = -Infinity;

  let length = num.toString().split("").length

  for (let i = 0; i < length; i++) {
    let temp = num.toString().split("")
    temp
    if(temp[i] === "6") {
      temp[i] = '9'
    } else {
      temp[i] = '6'
    }  
    
    curMax = Math.max(curMax, temp.join(""))
  }

  return curMax
};

console.log(maximum69Number(9996));
