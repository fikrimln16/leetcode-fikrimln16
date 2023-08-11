var answerQueries = function (nums, queries) {
  let sorted = nums.sort((a, b) => a - b);

  let prefixSum = [];
  prefixSum[0] = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    prefixSum[i] = sorted[i] + prefixSum[i - 1];
  }


  // function binarySearch(prefixSum, target){
  //   let left = 0
  //   let right = prefixSum.length - 1

  //   while(left<=right){
  //     let mid = Math.floor((left+right) / 2)

  //     if(prefixSum[mid] <= target){
  //       left = mid + 1
  //     } else {
  //       right = mid - 1
  //     }
  //   }

  //   return left
  // }

  // let res = []
  // queries.forEach((queri) => {
  //   res.push(binarySearch(prefixSum, queri))
  // })

  let res = []
  queries.forEach((queri) => {
    let count = 0;
    let i = 0;
    while (prefixSum[i] <= queri) {
      count++;
      i++;
    }
    res.push(count);
  });

  return res;
};

console.log(answerQueries([4,5,2,1], [3,10,21]));
