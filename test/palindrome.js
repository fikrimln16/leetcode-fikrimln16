const palindrome = (input) => {
  const reversed = input.split("").reverse().join("");
  return input === reversed;
};

console.log(palindrome("katak"));
