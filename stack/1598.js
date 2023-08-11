class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) return "Stack Kosong";
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size(){
    return this.stack.length
  }
}

var minOperations = function (logs) {
  let stack = new Stack();

  const operations = {
    "../": () => {
      stack.pop();
    },
    "./": () => {
      stack.peek();
    },
    default: (element) => stack.push(element),
  };

  logs.forEach((element) => {
    const action = operations[element] || operations.default;
    action(element);
  });

  return stack.size()
};


console.log(minOperations(["d1/","d2/","../","d21/","./"])) // 2