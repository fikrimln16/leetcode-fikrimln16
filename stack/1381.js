class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.count = 0;
    this.maxSize = maxSize;
  }

  push(element) {
    if (this.count !== this.maxSize) {
      this.stack.push(element);
      this.count = this.count + 1;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    } else {
      this.count--;
      return this.stack.pop();
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  increment(k, val) {
    for (let i = 0; i < Math.min(k, this.count); i++) {
      this.stack[i] = this.stack[i] + val;
    }
  }

  print() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i];
    }
    return str;
  }
}

var obj = new CustomStack(3);
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj.print());
obj.increment(5, 100);
console.log(obj.print());
obj.increment(2, 100);
obj.pop();
console.log(obj.print());
obj.pop();
obj.pop();
obj.pop();
obj.pop();
obj.pop();
console.log(obj.print());
