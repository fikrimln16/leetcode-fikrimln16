const filter = (arr, fn) => {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    if(fn(arr[index], index)){
      result.push(arr[index])
    };
  }

  return result;
};

const arr = [1,2,3];
const fn = function firstIndex(n, i) { return i === 0; }
console.log(filter(arr, fn));

