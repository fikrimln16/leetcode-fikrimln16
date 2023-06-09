/*
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
*/

/*
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
*/

/*
Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
*/


var reduce = (nums, fn, init) => {
  //jika array kosong maka return initnya
  if (nums.length === 0) {
    return init;
  }

  //variabel temp untuk menyimpan hasil dari fungsi fn
  var temp = 0;

  //perulangan nums sampai habis
  for (let index = 0; index < nums.length; index++) {
    //mendapatkan value dari nums[index]
    const element = nums[index];
    //lalu inisiasikan ke fungsi fn dengan parameter init dan element tadi dan disimpan sementara di temp
    temp = fn(init, element);
    //ubah init menjadi value setelah fungsi dijalankan
    init = temp;
  }

  return temp;
};



const nums = [1,2,3, 4];
const fn = function sum(accum, curr) {
  return accum + curr * curr;
};
const init = 0; 
console.log(reduce(nums, fn, init));
