class Node{// this is the node class which responsible for the data and next next is a pointer
    constructor(data){
        this.data = data; // take a param and store 
        this.next = null // next should be null
    }
}// end of node
class LinkedList{ // linked list which has head and tail and all the storage goes from head to tail (LIFO)
    constructor(){ // both head and tail should be null 
        this.head = null
        this.tail = null;
    }
    add(data){ // implementation of add means how to insert to linked list 
        const node = new Node(data) // initialize with node which should be data
        if(this.head === null){ // place a condition if there is no data in  head then it should be initilize as node
            this.head = node
        }else{  // other wise it should be point to the next it means if exist already send to next
            this.tail.next = node;
        }
        this.tail = node; // it should be tail
    }
    printAll(){ // printAll is displayed as following
        let current = this.head; // this.head is initilize with current
        while(current != null){ //  check if current is not null
            console.log(current.data) // it should print the data
            current = current.next // current should be the next current.
        }
    }
    get(index){
        let current = this.head;
        let i = 0;
        while(current < index){
            current = current.next;
            i++
        }
        return current.data;
    }

    insertAt(index,value){
        if(index === 0){
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
        }else{
            let current = this.head;
            let previous = null;
            let i=0;
            while(i < index){
                previous = current;
                current = current.next;
                i++;
            }
            const node = new Node(value);
            node.next = current;
            previous.next = node;
        }
    }
    removeForm(index){
        if(index === 0){
            this.head = this.head.next
        }else{
            let current = this.head;
            let previous = null;
            let i=0;
            while(i < index){
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
        }
    }
}
let linked = new LinkedList()
linked.add('Ali')
linked.add('Afzal')
linked.removeForm(1)
linked.printAll()