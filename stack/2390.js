class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()) return "Stack Kosong"
        return this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    print(){
        let string = ""
        for(let i = 0; i<this.stack.length;i++){
            string += this.stack[i]
        }
        return string
    }

}


var removeStars = function(s) {

    let split = s.split("")

    let stack = new Stack()
    for(let char of split){
        if(char === "*"){
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.print()

};