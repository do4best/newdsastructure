class Beverage{
make(){

}
}

class Tea extends Beverage{
    make(){
        console.log("Let's Make Tea")
    }
}
class Coffee extends Beverage{
    make(){
        console.log("Let's Make a  Coffee")
    }
}
class BeverageFactory{
    cooking(){

    }
}
class MakingTea extends BeverageFactory{
    cooking(){
        console.log("Tea is Cooking")
        return new Tea()
    }
}

let maketea = new MakingTea()
let tea = maketea.cooking()
console.log(tea.make())