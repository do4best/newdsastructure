
class NewCalculator{
    constructor(){
        this.add = function(v1,v2){
            return v1 + v2;
        }
        this.minus = function(v1,v2){
            return v1 - v2;
        }
    }
}
class AdapterClass{
    constructor(){
    const newCalculator = new NewCalculator();
    this.operation = function (v1,v2,opt){
        switch(opt){
            case 'add':
                return newCalculator.add(v1,v2)
                case 'minus':
                    return newCalculator.minus(v1,v2)
        }

    }
    
} 
}
let adapterClass = new AdapterClass();
console.log(adapterClass.operation(34,44,'add'))
console.log(adapterClass.operation(34,44,'minus'))