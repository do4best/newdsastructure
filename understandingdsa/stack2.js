class Stack{
    constructor(){
        this.maxSize=100;
        this.stack=[]
        this.top = -1
    }
    push(data){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = data
        return true;

    }
    isFull(){
        return this.top === this.maxSize-1
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        return this.stack[this.top]
    }
    remove(){
        if(this.isEmpty()){
            return null;
        }
        this.top--;
        return this.stack.pop()
    }
}
const reverseString=(str)=>{
let stack = new Stack();
for(let i=0; i<str.length; i++){
    stack.push(str[i])}
    let reverse = ""
    while (!stack.isEmpty()){
reverse += stack.remove()
    
}
return reverse;
}
let stack = new Stack();
stack.push('A')
stack.push('B')
stack.push('C')
stack.push('D')
console.log(stack)
console.log(stack.peek())
console.log(stack.remove())
console.log(stack)
console.log(reverseString("Find the Dog"))