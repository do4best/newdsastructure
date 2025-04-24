function fuzBuzz(str){
    const arr = []
    for(let i=0; i<str; i++){
        if( i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz')
        }else if(i %3 === 0){
            arr.push("fizz")
        }else if(i % 5 === 0){
            arr.push("Buzz")
        }
    }
    return arr;
}

console.log(fuzBuzz(30))
function findMissingNumber(arr){
   if(arr.length === 0) return []; // if the array is empty return empty
   const min = Math.min(...arr) // find min
   const max = Math.max(...arr) // find max
   const fullRange = Array.from({length:max - min + 1},(_,i)=>min+i)
   const missingNumber = fullRange.filter(num=>!arr.includes(num))
   return missingNumber;
}
console.log(findMissingNumber([1,2,5,6,7]))
const findingMissing=(arr)=>{
    if(arr.length === 0) return [] // if array size is 0 return empty one
    let maxx = Math.max(...arr) // find the max in the array
    let minn = Math.min(...arr) // find the min in the array
    const fullrange = Array.from({length:maxx - minn + 1},(_,i)=>minn+1)//built an array of length extracting minimum from maximum and map as addition in store FullRange
    const findmissing = fullrange.filter((num)=>!arr.includes(num)) //use high order function filter in which describe if in parameter array the filter parameter is not included  
    return findingmissing
}