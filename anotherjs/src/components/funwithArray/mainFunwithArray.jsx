import { useState } from "react";

function MainFunWithArray() {
    const [food,seaFood] = useState(["Fun","With","Array"])
    const [bgColor, setBgColor] = useState("");
    const handelAddFood=(e)=>{
        const newDoc = document.getElementById('sea').value;
        setBgColor(newDoc);
        document.getElementById('sea').value = ""
        
        seaFood(f=>[...f,newDoc])
    }
    const handelRemove=(index)=>{
        seaFood(food.filter((_,i)=> i !== index))
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handelAddFood(); // Trigger color change on Enter key
        }
    };
    return ( <>
    <div className="" style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
    
    <h1>List of Food</h1>
<ul>
    {food.map((food,index)=>
    <li key={index} onClick={()=>handelRemove(index)}>{food}</li>)}</ul>
    <input type="text" id="sea" placeholder="Enter The Food" onKeyDown={handleKeyDown} /> 
    <button className="btn btn-success" onClick={handelAddFood}>Add</button>
    </div>   
    </> );
}

export default MainFunWithArray;