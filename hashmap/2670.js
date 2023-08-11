var distinctDifferenceArray = function(nums) {
  let res = []
  nums.forEach((element, index) => {
    let setPrefix = new Set()
    let setSuffix = new Set()

    for (let i = 0; i < index+1; i++) {
      setPrefix.add(nums[i])
    }
    for (let i = index+1; i < nums.length; i++) {
      setSuffix.add(nums[i])
    }
    res.push(setPrefix.size - setSuffix.size)
  })

  return res
};

console.log(distinctDifferenceArray([3,2,3,4,2]));