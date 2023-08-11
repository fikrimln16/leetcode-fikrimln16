// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(item) {
//     this.stack.push(item);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     return this.stack.pop();
//   }

//   peek() {
//     return this.stack[this.stack.length - 1];
//   }

//   isEmpty() {
//     return this.stack.length === 0;
//   }

//   join() {
//     return this.stack.join("/");
//   }

//   size() {
//     return this.stack.length;
//   }
// }

// var isInterleave = function (s1, s2, s3) {
//   if (s1.length + s2.length !== s3.length) {
//     return false;
//   }

//   let stack1 = new Stack();
//   for (let i = s1.length - 1; i >= 0; i--) {
//     stack1.push(s1[i]);
//   }
//   stack1;

//   let stack2 = new Stack();
//   for (let i = s2.length - 1; i >= 0; i--) {
//     stack2.push(s2[i]);
//   }
//   stack2;

//   for (let i = 0; i < s3.length; i++) {
//     const element = s3[i];
//     element;

//     if (!stack1.isEmpty() && stack1.peek() === element) {
//       stack1.pop();
//     } else if (!stack2.isEmpty() && stack2.peek() === element) {
//       stack2.pop();
//     } else {
//       return false;
//     }

//     return stack1.isEmpty() && stack2.isEmpty();
//   }
// };

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  join() {
    return this.stack.join("/");
  }

  size() {
    return this.stack.length;
  }
}

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const stack1 = new Stack();
  for (let i = s1.length - 1; i >= 0; i--) {
    stack1.push(s1[i]);
  }

  const stack2 = new Stack();
  for (let i = s2.length - 1; i >= 0; i--) {
    stack2.push(s2[i]);
  }

  for (let i = s3.length - 1; i >= 0; i--) {
    const element = s3[i];

    if (!stack1.isEmpty() && stack1.peek() === element) {
      stack1.pop();
    } else if (!stack2.isEmpty() && stack2.peek() === element) {
      stack2.pop();
    } else {
      return false;
    }
  }

  return true; // If the loop finishes without returning false, it means interleaving is possible
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // Output: true

