class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return "stack kosong";
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  
  let stack = new Stack();
  for (let i = 0; i < temperatures.length; i++) {
    while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
      let idx = stack.pop();
      idx
      res[idx] = i - idx;
    }
    stack.push(i);
  }

  return res;
};

console.log(dailyTemperatures([30,60,90,30,60,90,30,60,90,100]));
