class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack kosong";
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  plus() {
    return (
      parseInt(this.stack[this.stack.length - 1]) +
      parseInt(this.stack[this.stack.length - 2])
    );
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.stack.length; i++) {
      sum += parseInt(this.stack[i]);
    }
    return sum;
  }
}

var calPoints = function (operations) {
  let stack = new Stack();

  const simulation = {
    C: () => stack.pop(),
    D: () => stack.push(stack.peek() * 2),
    "+": () => stack.push(stack.plus()),
    default: (element) => stack.push(element),
  };

  operations.forEach((element) => {
    const action = simulation[element] || simulation.default;
    action(element);
  });

  return stack.getSum();
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30

//IF ELSE NORMAL
var calPoints = function (operations) {
  let stack = new Stack();

  let sum = 0
  operations.forEach((element) => {
    if (element === "C") {
      stack.pop()
    } else if(element === "D"){
      stack.push(stack.peek() * 2)
    } else if(element === "+"){
      stack.push(stack.plus())
    } else {
      stack.push(element)
    }
  });

  return stack.getSum()
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
