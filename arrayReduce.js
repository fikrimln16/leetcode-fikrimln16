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
