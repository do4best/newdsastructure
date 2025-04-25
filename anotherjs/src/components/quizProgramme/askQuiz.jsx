import { useEffect, useState } from "react";
import AddContact from "./addContact";
import ContactList from "./contactList";
import uuid4 from 'uuid4';

function AskQuiz() {
    /*
    This has merely two components one for adding the name and email while second one is responsible for storing the username and email
    */ 
   const [myContact,setMyContact] = useState(()=>{ // this component is responsible for storing the name and email on the local storage.
    return JSON.parse(localStorage.getItem('myContact'))
   })
   useEffect(()=>{ // we define the useEffect first to triggered the local storage item 
localStorage.setItem('myContact',JSON.stringify(myContact))
   },[myContact])
    const doContact=(data)=>{ // this function is responsible for the finding the all names and email
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