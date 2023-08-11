var destCity = function (paths) {
  let set = new Set();

  paths.forEach((path) => {
    set.add(path[1]);
  });

  set;

  paths.forEach((path) => {
    if(set.has(path[0])) set.delete(path[0])
  })


  return set.values().next().value;
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
