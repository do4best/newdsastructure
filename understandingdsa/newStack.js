class Stack{
    constructor(){
        this.maxSize = 100;
        this.top = -1;
        this.stack = []
    }
    addItem(data){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = data;
        return true;
    }
    removeItem(){
        if(this.isEmpty()){
            return null;
        }
        this.top--;
        return this.stack.pop()
    }
    isFull(){
        return this.top === this.maxSize-1;
    }
    isEmpty(){
        return this.top === -1;

    }
    peek(){
        return this.stack[this.top]
    }
}
const anotherMemozation=(data)=>{
    let temp={};
    return function(...args){
        let value = args[0];
        if(value in temp){
            console.log("Cashed")
            return temp[value]
        }else{
            console.log("Calculating")
            let result = data(value)
            temp[value] = result;
            return result
        }
    }
}
const memoization=(data)=>{
    let cashe = {};
    return function(...args){
        let n = args[0]
        if(n in cashe){
                console.log("cashe")
                return cashe[n]
        }else{
            console.log("Calculating")
            let result = data(n);
            cashe[n] = result;
            return result;
        }
    }
}
function sumit(sum){
    let sumt = 0;
    for(let i=1; i<=sum; i++){
        sumt += i
    }
    return sumt
}
let result = memoization(sumit)
console.log(result(5))
console.log(result(5))
let stack = new Stack();
for(let i=1; i<20; i += 2){
    stack.addItem(i)
}
console.log(stack)
console.log(stack.peek())
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function firstDepthTraversal(root){
    if(!root) return []
    const result = []
    const stack = []
    stack.push(root)
    while(root.length > 0){
            const current = stack.pop()
            console.log(current.data)
    }
}

// create Binary Tree:  a
//                     / \
//                    b   c
//                   /\    /
//                  d  e  f
const root = new Node('a')
const nodeB = new Node('b')
const nodeC = new Node('c')
const nodeD = new Node('d')
const nodeE = new Node('e')
const nodeF = new Node('f')

root.left = nodeB
root.right = nodeC
nodeB.right = nodeE
nodeB.left = nodeD
nodeC.left = nodeF
let resultt = firstDepthTraversal(root)
console.log(resultt)