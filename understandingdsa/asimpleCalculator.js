function calculator(num1,num2,sum){
    let result="";
    switch(sum){
        case '+':
            result = num1 + num2;
            break;
            case '-':
                result = num1 - num2;
                break;
                case '*':
            result = num1 * num2;
            break;
            case '/':
                result = num1 / num2;
                break;
                default:
                    new Error("No such operator")
    }
    return result;
}

const findletter=(str,char)=>{
    let count=0;
    for(let i=0; i<str.length; i++){

        if(str[i] === char){
            count++
        }

    }
    return count;
}
const findMax=(arr)=>{
    let max = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
const reversit=(str)=>{
    return str.split('').reverse().join('')
}
console.log(calculator(5,6,'*'))
console.log(findletter("This is god's creation",'s'))
console.log(reversit("Find the rate"))