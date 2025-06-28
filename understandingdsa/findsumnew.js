const findSum=(arr,weight)=>{
    let arrLength=arr.length;
    for(let i=0;  i<arrLength; i++){
        for(let j=i+1; j<arrLength; j++){
            if(arr[i]+arr[j] == weight){
                return [i,j]
            }
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6]
console.log(findSum(arr,7))
const someBetterSum=(arr,weight)=>{
    let hashData={};
    for(let i=0; i<arr.length; i++){
        let currentElement=arr[i];
        let difference = weight - currentElement;
        if(hashData[currentElement] != undefined){
            return [i,hashData[weight - currentElement]]
        }else{
            hashData[currentElement] = i;
        }
        return -1;
    }
}

console.log(someBetterSum(arr,8))

const jaggedArray=(rows,columns)=>{
    let newJaggedArray = new Array(rows)
    for(let i=0; i<columns; i++){
        newJaggedArray[i] = new Array(rows)
    }
    return newJaggedArray;
}
console.log(jaggedArray(3,8))
function fruit(){
    console.log(name)
    console.log(price)
    var name = "orange"
    var price = 500
}
fruit()