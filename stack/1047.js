class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
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

  size() {
    return this.stack.length;
  }

  print() {
    let string = "";
    for (let i = 0; i < this.stack.length; i++) {
      string += this.stack[i];
    }
    return string;
  }
}

var removeDuplicates = function (s) {
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    element
    if(stack.isEmpty() || stack.peek() !== element) {
      stack.push(element)
    } else {
      stack.pop()
    }
  }

  return stack.print();
};

console.log(removeDuplicates("azxxzy"));
