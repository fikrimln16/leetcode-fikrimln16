/*
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/

/*
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
*/

/*
Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
*/

const compose = (functions) => { 
  return (value) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, value);
  };
};

const fn = compose([(x)=>10*x, (x)=>10*x, (x)=>10*x]);
console.log(fn(1)); // Output: 9
