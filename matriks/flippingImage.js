var flipAndInvertImage = function(image) {
  let res = []
  image.forEach(element => {
    let reversed = element.reverse()
    let temp = []
    reversed.map((element) => {
      if(element === 0){
        temp.push(1)
      } else {
        temp.push(0)
      }
    })
    res.push([...temp])
  });

  return res
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // [[1,0,0],[0,1,0],[1,1,1]]
