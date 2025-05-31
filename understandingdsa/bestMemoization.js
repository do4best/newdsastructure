function memo(){
    const cashe={};
    return function(a,b){
        
        const key = `${a}, ${b}`;
        if(!cashe[key]){
            console.log("Working")
            cashe[key] = a + b
        }
        return cashe[key]
    }
}

const fun = memo()
console.log(fun(2,4))
console.log(fun(2,4))
console.log(fun(4,4))

function understandMemo(){
    const obj={};
    return function(a,b){
        console.log('obj is',obj)
        if(!obj[`${a},${b}`]){
            console.log('inside it')
            obj[`${a},${b}`] = a + b

        }
        return obj[`${a},${b}`]
    }
}
let memoagain = understandMemo()
console.log(memoagain(2,3))
console.log(memoagain(2,3))