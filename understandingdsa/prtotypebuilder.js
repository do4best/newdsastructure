class Car{
    constructor(name='Toyota',model=1986){
        this.name = name;
        this.model = model;
    }
    setCarName(name){
        this.name = name;
        console.log(`Car name is adjusted to : ${this.name}`)
        
    }
    setCarModel(model){
        this.model = model;
             console.log(`Car model is adjusted to : ${this.model}`)

    }
    clone(){
        return new Car(this.name,this.model)
        
    }
}
class Singleton{
    static #instance = null;
    constructor(){
        
        if(Singleton.#instance){
            throw new Error("Use Singleton.getInstance() to get the instance")
        } 
        this.value = Math.random()
    }
    static getInstance(){
        if(!Singleton.#instance){
            Singleton.#instance = new Singleton()
        }
        return Singleton.#instance;
    }
    say(){
        console.log("saying ........")
    }
}
const s1 =  Singleton.getInstance()
const s2 = new Singleton()
console.log(s2)
console.log(s1 )
const originalCar = new Car()
console.log(originalCar)
const cloneCar = originalCar.clone()
cloneCar.setCarName("Benz")
cloneCar.setCarModel(2000)
console.log(cloneCar)
console.log(originalCar === cloneCar?"The Cars are  Equal":"Cars are not equal")