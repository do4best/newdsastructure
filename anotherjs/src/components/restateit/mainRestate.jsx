import { useEffect, useState } from "react";
import AddContact from "./addContact.jsx";
import uuid4 from "uuid4";
import FindListContact from "./findListContact.jsx";

function MainRestate() {
    const [listContact,setListContact] = useState(()=>{
        return JSON.parse(localStorage.getItem('listContact'))
   ||[] })
    const theContact=(data)=>{
setListContact([...listContact,{id:uuid4(),data}])
    }
    const deleteContact=(data)=>{
const removeIt = listContact.filter((id)=>{
    return id.id !== data;
})
setListContact(removeIt)
    }
    useEffect(()=>{
        localStorage.setItem('listContact',JSON.stringify(listContact))

    },[listContact])
    return ( <>
    <div className="container m-auto">
    <h1 className="bg-red-700 text-white text-center p-5 font-extrabold mt-5">Let Start Again</h1>
    <AddContact addContact={theContact}/>
    <FindListContact contact={listContact} removeContact={deleteContact }/>
    </div>
    </> );
}

export default MainRestate;