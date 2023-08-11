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

var backspaceCompare = function (s, t) {
  let stack1 = new Stack();
  let stack2 = new Stack();

  s.split("").forEach((element) => {
    if (element === "#") {
      stack1.pop();
    } else {
      stack1.push(element);
    }
  });

  t.split("").forEach((element) => {
    if (element === "#") {
      stack2.pop();
    } else {
      stack2.push(element);
    }
  });

  return stack1.print() === stack2.print();
};
