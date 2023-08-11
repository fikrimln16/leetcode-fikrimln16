var largestWordCount = function (messages, senders) {
  let map = new Map();

  for (let i = 0; i < senders.length; i++) {
    map.set(
      senders[i],
      (map.get(senders[i]) || 0) + messages[i].split(" ").length
    );
  }
  map;

  let largerName = "";
  let sameValue = null;

  for (const [name, value] of map.entries()) {
    if (
      sameValue === null ||
      value > sameValue ||
      (value === sameValue && name > largerName)
    ) {
      largerName = name;
      sameValue = value;
    }
  }

  return largerName;
};

console.log(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree", "Alice"]));
console.log(
  largestWordCount(
    ["How is leetcode for everyone", "Leetcode is useful for practice"],
    ["Bob", "Charlie"]
  )
);
// console.log(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"]));
