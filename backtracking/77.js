function findSubarrays(arr) {
  const subarrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1);
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

var combine = function (n, k) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  let res = findSubarrays(arr)
  
  let filter = res.filter((element) => {
    return element.length == k
  })

  filter

  return 

};

console.log(combine(4, 2));
