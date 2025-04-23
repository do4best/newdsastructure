import { useState } from "react";
import {nanoid} from 'nanoid'
import ListItems from "./ListItems";
function StackOne() {
    const [item,setItem] = useState("")
    const [items,setItems] = useState([])
    const handelItem=({id,title})=>{
        if(!id || !title) return;
        setItem("")
        setItems((items)=>[...items,{id:title}])
    }
    return (<>
    <div className="container box-content border shadow-orange-50">
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            handelItem({id:nanoid(),title:item})
        }}>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <button type="submit" className="px-3 py-2 bg-black text-white">Add</button>
        </form>
        {items.length ? (
            <div className="items-container">
                {items.map((item,idx)=>( <ListItems key={item.id} title={idx.title}/>))}
                </div>
        ):null}
    </div>
    
    
    
    </>  );
}

export default StackOne;