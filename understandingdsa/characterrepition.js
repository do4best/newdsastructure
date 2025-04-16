const letterRepeat=(str,letter)=>{
    let character=0;
    for(let i = 0; i<str.length; i++){
        if(str[i] === letter){
            character++
        }
    }
    return character;
}
const findAnother=(str,leter)=>{
    return str.split(leter).length-1
}
console.log(letterRepeat("Find the got","t"))
console.log(findAnother("wow this writing",'w'))