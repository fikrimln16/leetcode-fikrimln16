var findPairs = function (nums, k) {

  
  let map = new Map()
  nums.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1)
  })
  
  let count = 0
  map.forEach((value, key) => {
    if(k === 0){
			if(value > 1) count++
		}
		else{
			if(map.has(key+k)) count++
		}
  })

  return count
};

console.log(findPairs([3, 1, 4, 1, 5], 2));


