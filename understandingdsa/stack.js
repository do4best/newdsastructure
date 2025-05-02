class Stack{
    constructor(){
        this.size=100;// limit the size
        this.stack=[] // initilize as array
        this.top=-1; // see the value is empty
    }
    push(value){ // let s push it
        if(this.isFull()){ // check if it is full
            return false; // return false
        }
        this.top++; // it should be placed on the top  and incremented
        this.stack[this.top] = value // then the increment value should be placed in stack which is array
        return true; // return true;
    }
    isFull(){ // see if it is exceeded to the allowed maxSize
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