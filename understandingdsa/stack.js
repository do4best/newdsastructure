class Stack{
    constructor(){
        this.size=100;
        this.stack=[]
        this.top=-1;
    }
    push(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value
        return true;
    }
    isFull(){
        return this.top === this.size-1
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
      
        this.top--;
    return this.stack.pop()
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        return this.stack[this.top]
    }
}

function reverseIt(str){
    let stack = new Stack();
    for(let i=0; i<str.length; i++){
        stack.push(str[i])
    }
    let reverseIt="";
    while(!stack.isEmpty()){
        reverseIt += stack.pop()
    }
    return reverseIt
}
let a = new Stack()
a.push(22)
a.push(24)
a.push(25)
a.pop()
console.log(a.peek())
console.log(reverseIt("find the god"))