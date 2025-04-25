import { useState } from "react";

function SelectColors({theColors}) {
    const [mixColor,setMixColor] = useState({colorValue:""})
    const handelColor=(e)=>{
        if(e.target.name === "colorValue"){
        setMixColor({...mixColor,colorValue:e.target.value})}
    }
    const handelClick=()=>{
        if(mixColor.colorValue ===  ""){
            alert("Please Enter the Value")
            return;
        }
        theColors(mixColor)
        setMixColor({colorValue:""})
      
    }

    return ( <>
    <h1>Color Failing</h1>
    <fieldset className="fieldset ">
    <legend className="fieldset-legend">What is your name?</legend>
    <input type="text" className="input" placeholder="Type Your Color" name="colorValue" value={mixColor.colorValue} onChange={handelColor} />
        </fieldset>
        <button className="btn btn-primary" onClick={handelClick}>Add it</button>
   
    </> );
}

export default SelectColors;