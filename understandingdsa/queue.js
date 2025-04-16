class Queue{
    constructor(){
        this.maxSize  = 100;
        this.head = 0;
        this.tail = 0;
        this.que = []
    }
    enqueue(que){
        if(this.isFull()){
            return false;
        }
        this.que[this.tail] = que;
        this.tail++
        return true;
    }
    dequeue(){
        const item = this.que[this.head];
        this.head++;
        return item;
    }
    peek(){
        return this.que[this.head]
    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    getLength(){
        return this.tail - this.head;
    }
    isEmpty(){
        return this.getLength() === 0;
    }
}