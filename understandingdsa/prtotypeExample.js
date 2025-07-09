const Animal={
    eat(){
        console.log("Baffalo eat Grass")
    }
}

Animal.eat()
let animal = Object.create(Animal)
animal.eat()
console.log(8 + "9")
console.log(parseInt("8") + 9)