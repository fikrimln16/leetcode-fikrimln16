var groupThePeople = function(groupSizes) {
  const result = [];
  const map = new Map();

  for (let index = 0; index < groupSizes.length; index++) {
    const value = groupSizes[index];
    //periksa apakah sudah ada key nya atau belum, 
    //jika tidak buat key dengan value array value
    if (map.has(value) === false) {
      map.set(value, []);
    }
    
    //masukan index(index) ke array value tadi
    map.get(value).push(index);

    //cek terlebih dahulu jika size array sama dengan value value
    if (map.get(value).length === value) {
      //masukan value array tadi ke result
      let arr = map.get(value)
      result.push(arr);
      //hapus key sebelumnya
      map.delete(value);
    }
  }

  return result;
};

console.log(groupThePeople([1,2,1,3,3,3,2,1,1]));
