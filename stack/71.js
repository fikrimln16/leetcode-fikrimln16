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

  join(){
    return this.stack.join("/")
  }
}

const simplifyPath = function (path) {
  const stack = new Stack();

  let split = path.split('/')
  split

  for(const arr of split){
    if(arr === "" || arr === ".") continue

    if(arr === ".."){
      stack.pop()
    } else {
      stack.push(arr)
    }
  }
  return "/" + stack.join()
};

console.log(simplifyPath("/../.././"));



// const simplifyPath = function (path) {
//   const stack = new Stack();

//   let dir = '';
//   for (let i = 1; i < path.length; i++) {
//     const element = path[i];
//     if (element === "/") {
//       if (dir === "..") {
//         if (!stack.isEmpty()) {
//           stack.pop();
//         }
//       } else {
//         stack.push(dir);
//       }
//       dir = '';
//     } else {
//       dir += element;
//     }
//   }

//   if (dir !== "" && dir !== ".") {
//     stack.push(dir);
//   }

//   return '/' + stack.stack.join('/');
// };