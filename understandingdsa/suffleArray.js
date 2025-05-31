const suffleArray=(shuffle)=>shuffle.sort(()=>0.5 - Math.random())

let arr=[1,2,3,4,5,6]

const display=(...args)=>(console.log(args))

display(suffleArray(arr))
 const celsuistoFahrenheit =(celsuis)=>(celsuis*1.8) + 32
const capatalizeString=(str)=>str.charAt(0).toUpperCase() + str.slice(1)
const findgapDate=(date1,date2)=>Math.ceil(Math.abs(date1.getTime() - date2.getTime())/86400000)
const randomHax = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')}`

document.querySelector("#fun").innerHTML = `

<h1>The Result is : ${suffleArray(arr)}</h1>
<h1>The Result is : ${celsuistoFahrenheit(36)}</h1>
<h1>The Result is : ${capatalizeString("find the programmer")}</h1>
<h1 class={color:red}>The Result is : ${findgapDate(new Date('2021-5-25'),new Date('2016-5-25'))}</h1>
<h1 style=color:${randomHax()}>The Result is : ${randomHax()}</h1>
`