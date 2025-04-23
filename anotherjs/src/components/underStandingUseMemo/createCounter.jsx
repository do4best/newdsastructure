import { useCallback, useState } from "react";
import ChildComponent from "./chilComponent";

function CreateCounter() {
    const [add,setCounter] = useState(0)
    const [counter,ssetCounter] =useState(0)
    // const learning= useCallback(()=>{
       
    // },[])
    return ( <>
    {/* <ChildComponent learning={learning} count={counter}/> */}
    <button className="btn btn-primary" onClick={()=>setCounter(add+1)}></button>
    <h1>{add}</h1>
    <button className="btn btn-success" onClick={()=>ssetCounter(counter+2)}></button>
    <h1>{counter}</h1>
    
    </> );
}

export default CreateCounter;