const suffleArray=(shuffle)=>shuffle.sort(()=>0.5 - Math.random())

let arr=[1,2,3,4,5,6]

const display=(...args)=>(console.log(args))

display(suffleArray(arr))
 const celsuistoFahrenheit =(celsuis)=>(celsuis*1.8) + 32
const capatalizeString=(str)=>str.charAt(0).toUpperCase() + str.slice(1)
const findgapDate=(date1,date2)=>Math.ceil(Math.abs(date1.getTime() - date2.getTime())/86400000)
const randomHax = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')}`
const repeatLetter=(str,letter)=>str.split(letter).length-1
// check if a number is prime
const checkPrime=(num)=>{
    if(num <=1 ) return false;
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num%i === 0)return false;
    }
    return 
}
const sliceArray=(arr)=>arr.slice(1,3)
const sumArray=(arr)=>arr.reduce((a,b)=>a+b,0)
const getCurrentDate=()=>{
    let date = new Date();
    let day = String(date.getDate()).padStart(2,'0')
    const Month = String(date.getMonth()+1).padStart(2,'0')
    const year = date.getFullYear();
    return `${date}/${Month}/${year}`
}

document.querySelector("#fun").innerHTML = `

<h1>The Result is : ${suffleArray(arr)}</h1>
<h1>The Result is : ${celsuistoFahrenheit(36)}</h1>
<h1>The Result is : ${capatalizeString("find the programmer")}</h1>
<h1 class={color:red}>The Result is : ${findgapDate(new Date('2021-5-25'),new Date('2016-5-25'))}</h1>
<h1 style=color:${randomHax()}>The Result is : ${randomHax()}</h1>
<h1 style=color:${randomHax()}>The Result is : ${repeatLetter("Find the cats",'t')}</h1>
<h1 style=color:${randomHax()}>The Result is : ${sliceArray(arr)}</h1>
<h1 style=color:${randomHax()}>The Result is : ${sumArray(arr)}</h1>
<h1 style=color:${randomHax()}>The Result is : ${getCurrentDate()}</h1>

`