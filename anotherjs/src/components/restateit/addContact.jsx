import { useState } from "react";

function AddContact({addContact}) {
    const [contact,setContact] = useState({name:"",email:""})
    const handelChange=(e)=>{
        if(e.target.name === "name"){
            setContact({...contact,name:e.target.value})
        }else{
            setContact({...contact,email:e.target.value})
        }
    }
    const handelData=()=>{
        if(contact.name === "" || contact.email === ""){
            alert("Please filled in the Blanc")
            return;
        }
        addContact(contact)
        setContact({name:"",email:""})
     
  
    }
    return ( <>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Your Name Please</legend>
  <input type="text" className="input" name="name" placeholder="Type here" value={contact.name} onChange={handelChange} />
  <legend className="fieldset-legend">Your Email Please</legend>
  <input type="text" className="input" name="email" placeholder="Type here" value={contact.email} onChange={handelChange} />
  <button className="btn btn-success" onClick={handelData}>Add Data</button>
 
</fieldset>
    </> );
}

export default AddContact;