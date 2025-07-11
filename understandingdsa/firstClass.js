let firsisfirst = function(name){
console.log(`Hello the line ${name}`)
}
function nameit(findit){
    findit("This is great")
}
nameit(firsisfirst)

function create(value){
    return function notCreate(asthem){
        return value + asthem
    }
}

const double = create(5)
console.log(double(5))