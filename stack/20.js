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
}

var isValid = function(s) {
  //base kondisi jika jumlah ganjil maka return false
  if (s.length % 2 !== 0) return false;

  const stack = new Stack();
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  s.split("").forEach((c) => {
    if (map[c]) {
      stack.push(c);
    } else {
      if (stack.isEmpty() || map[stack.peek()] !== c) {
        stack.push(c);
      } else {
        stack.pop();
      }
    }
  });

  return stack.isEmpty();
};

console.log(isValid("([}}])")); // false
console.log(isValid("(){}[]")); // true
console.log(isValid("([)]")); // false



// var isValid = function (s) {
//   if(s.length % 2 !== 0) return false

//   const stack = new Stack();

//   s.split("").forEach((c) => {
//     if(c === "(" || c === "{" || c === "["){
//       stack.push(c)
//     } else if(c === ")" && !stack.isEmpty() && stack.peek() === "("){
//       stack.pop()
//     } else if(c === "}" && !stack.isEmpty() && stack.peek() === "{"){
//       stack.pop()
//     } else if(c === "]" && !stack.isEmpty() && stack.peek() === "["){
//       stack.pop()
//     } else{
//       stack.push(c)
//     }
//   });

//   return stack.isEmpty();
// };

var isValid = function(s) {
  if (s.length % 2 !== 0) return false;

  const stack = new Stack();
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  s.split("").forEach((c) => {
    if (map[c]) {
      stack.push(c);
    } else {
      if (stack.isEmpty() || map[stack.peek()] !== c) {
        stack.push(c);
      } else {
        stack.pop();
      }
    }
  });

  return stack.isEmpty();
};


console.log(isValid("([}}])"));


// // Jika hari adalah "Senin" sampai "Jumat", maka output adalah "Hari kerja"
// // Jika hari adalah "Sabtu" atau "Minggu", maka output adalah "Hari libur"
// const day = "Senin";

// if (day === "Senin" || day === "Selasa" || day === "Rabu" || day === "Kamis" || day === "Jumat") {
//   console.log("Hari kerja");
// } else if (day === "Sabtu" || day === "Minggu") {
//   console.log("Hari libur");
// } else {
//   console.log("Hari tidak valid");
// }


// // Objek yang memetakan hari kerja dan hari libur
// const dayMap = {
//   "Senin": "Hari kerja",
//   "Selasa": "Hari kerja",
//   "Rabu": "Hari kerja",
//   "Kamis": "Hari kerja",
//   "Jumat": "Hari kerja",
//   "Sabtu": "Hari libur",
//   "Minggu": "Hari libur"
// };

// const day = "Senin";

// if (dayMap[day]) {
//   console.log(dayMap[day]);
// } else {
//   console.log("Hari tidak valid");
// }
