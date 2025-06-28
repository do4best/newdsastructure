function hello(greeting){
    console.log(greeting + " " + this.name)
}
const Person={
    name: "Meer"
}
hello.call(Person,"Hello")

let callit = hello.bind(Person);
callit("Buenous Dia")

const Obj={
     outterFunction:function(){
        console.log(this)
        const innerFunction=function(){
            console.log(this)
        }
        innerFunction()
    }
}
