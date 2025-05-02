const recursionit=(str)=> str === ''?'':recursionit(str.substr(1))+str.chartAt(0)
const fabinachi =(str)=> str < 2 ? str : fabinachi(str-1) + fabinachi(str-2) 
const fabinachi1 =(str)=> str < 2 ? str : str*fabinachi1(str-1)  
const raisedPower = (value,power)=> power === 0 ? 1 : value * raisedPower(value,power-1)

console.log(fabinachi(8))
console.log(fabinachi1(5))
console.log(raisedPower(5,5))