const compose = (functions) => {
  return (value) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, value);
  };
};

const fn = compose([(x)=>10*x, (x)=>10*x, (x)=>10*x]);
console.log(fn(1)); // Output: 9
