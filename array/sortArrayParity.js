var sortArrayByParity = function(nums) {
  let res = []
  let even = [] ; let odd = []
  nums.map((element) => {
    if(element % 2 === 0){
      even.push(element)
    } else {
      odd.push(element)
    }
  })

  return res.concat(even, odd)
};

console.log(sortArrayByParity([3,1,2,4])); //[2,4,3,1]