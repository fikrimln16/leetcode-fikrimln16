var countMatches = function (items, ruleKey, ruleValue) {
  let find = 0;
  if (ruleKey === "type") find = 0;
  if (ruleKey === "color") find = 1;
  if (ruleKey === "name") find = 2;

  let arr = items.map((element) => {
    return element[find]
  }).filter((elemen) => elemen === ruleValue);

  return arr.length;
};

console.log(
  countMatches(
    [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
    "color",
    "silver"
  )
); // 1
