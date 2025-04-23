import { useState } from "react";
// Add Contact is responsible for the display items to be shown correctly.
function AddContact({myContact}) {
    const [contact,setContact] = useState({name:"",email:""})// name and email should be empty
    const handelChange=(e)=>{ // this is void thing and only display what is shown in the input field.
        if(e.target.name === 'name'){
            setContact({...contact,name:e.target.value})
        }else{
            setContact({...contact,email:e.target.value})
        }
    }
    const handelData=()=>{
        if(contact.name === "" || contact.email === ""){
            alert("Pleased filled the required data")
            return;
        }myContact(contact)
        setContact({name:"",email:""})
    }
    return ( <>
    <div className="flex justify-center items-center text-2xl text-warning">
        
        <fieldset className="fieldset ">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type Your Name" name="name" value={contact.name} onChange={handelChange} />
  <legend className="fieldset-legend">Your Email Please</legend>
  <input type="email" className="input" placeholder="Type Your Email" name="email" value={contact.email} onChange={handelChange} />

</fieldset>

    </div>
    <button className="btn btn-primary relative left-187 mt-5" onClick={handelData}>Add Contact</button>
    </> );
}

export default AddContact;