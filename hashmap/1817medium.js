var findingUsersActiveMinutes = function (logs, k) {
  let map = new Map();

  for (const [user, time] of logs) {
    //jika tidak ada user maka buat key baru dan value berupa set
    if (map.has(user) === false) {
      map.set(user, new Set());
    }
    //tambahkan value berupa set yang berisi time 
    let set = map.get(user)
    set.add(time);
  }


  //tambah 0 ke array sesuai k
  let arr = new Array(k).fill(0);

  map.forEach((elemen) => {
    arr[elemen.size - 1] = arr[elemen.size - 1]+1;
  })

  return arr;
};

console.log(
  findingUsersActiveMinutes(
    [
      [1, 5],
      [1, 2],
      [0, 2],
      [1, 5],
      [1, 3],
    ],
    5
  )
);
