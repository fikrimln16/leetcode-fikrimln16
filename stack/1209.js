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

  remove(k){
    for (let i = 0; i < k; i++) {
      this.stack.pop()
    }
  }
}

var removeDuplicates = function (s, k) {
  let stack = new Stack();

  let count = 1
  for (let i = 0; i < s.length; i++) {

    const element = s[i];
    stack.push(element)

  }

  stack
};

console.log(removeDuplicates("deeedbbccbdaaeee", 3));
