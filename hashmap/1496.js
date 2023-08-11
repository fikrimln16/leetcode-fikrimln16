var isPathCrossing = function(path) {
  let map = {};
  let x = 0;
  let y = 0;
  map[`${x},${y}`] = true;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") y++;
    else if (path[i] === "E") x++;
    else if (path[i] === "S") y--;
    else if (path[i] === "W") x--;

    let newCoor = `${x},${y}`;

    if (map[newCoor]) return true;
    map[newCoor] = true;
  }

  return false;
};

console.log(isPathCrossing("NESWW"));
