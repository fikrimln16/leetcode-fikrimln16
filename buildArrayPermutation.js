const buildArray = (number) => {
  let array = [];
  number.forEach(element => {
    array.push(number[element])
  });

  return array;
}

console.log(buildArray([0,2,1,5,3,4]));