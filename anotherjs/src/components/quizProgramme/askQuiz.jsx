import { useEffect, useState } from "react";
import AddContact from "./addContact";
import ContactList from "./contactList";
import uuid4 from 'uuid4';

function AskQuiz() {
    /*
    
    */ 
   const [myContact,setMyContact] = useState(()=>{
    return JSON.parse(localStorage.getItem('myContact'))
   })
   useEffect(()=>{
localStorage.setItem('myContact',JSON.stringify(myContact))
   },[myContact])
    const doContact=(data)=>{
        setMyContact([...myContact,{id:uuid4(),data}])
    }
    const removeId=(id)=>{
        const updateList = myContact.filter((val)=>{
            return val.id !== id;
        })
setMyContact(updateList)
    }
    return (<>
    <section className="font-extrabold border-2 bg-red-700 text-white text-center p-3">Manage Content

    </section>
    <AddContact myContact={doContact}/>   
    <ContactList contact={myContact} removeContact={removeId}/>
    </>  );
}

export default AskQuiz;