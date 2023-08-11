var summaryRanges = function (nums) {
  const res = [];
  
  let i = 0;
  while (i < nums.length) {
    let start, last;
    start = nums[i];
  
    //melakukan perulangan dari index awal, jika index selanjutnya lebih dari i+1, maka berhenti
    while (i + 1 < nums.length && nums[i + 1] == nums[i] + 1) {
      i++;
    }

    last = nums[i];
    //jika awal dan akhirnya sama, berarti hanya satu index
    if (start == last) {
      res.push(start + "");
    } else {
      res.push(start + "->" + last);
    }

    i++;
  }

  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); //['0->2', '4->5', '7']
