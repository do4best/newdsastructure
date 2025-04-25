import { useState } from "react";
import OnlyColors from "./onlyColors";
import SelectColors from "./selectColors";
import uuid4 from "uuid4";

function MainColorFailing() {
    const [selectTheColor,setSelectTheColor] = useState(["red","green","blue"])
    const selectColors=(color)=>{
        setSelectTheColor(f=>[...f,color])
    }
   
    return ( <>
    <SelectColors theColors={selectColors}/>
    <OnlyColors colorsAgain={selectTheColor}/>
   
    </> );
}

export default MainColorFailing;