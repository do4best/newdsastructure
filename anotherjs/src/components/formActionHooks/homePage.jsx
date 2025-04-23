import { useActionState, useState } from "react";
import { useRef } from "react";

function HomePage() {
   const [data,action,isPending] = useActionState(saveUser,undefined)
    return ( <>
    <form action="" className="flex flex-column justify-center" onSubmit={action}>
        <label htmlFor="firstName">First Name</label>
        <input  id="firstName" name="firstName" />
        <button className="px-3 py-2 border rounded" disabled={isPending} style={{marginTop:'.5rem'}}>Submit</button>
        {data?.error && <span style={{color:'red'}}>{data?.error}</span>}
        {data?.message && <span style={{color:'green'}}>{data?.message}</span>}
    </form>
    
    </> );
}

export default HomePage;
const saveUser=async(unknown,firstName)=>{
    await wait(1000)
    if(firstName === ""){
        return {error:"Name is Required"}
    }
    return {message:"User is Saved"}
}
const wait=(number)=>{
    return new Promise(res =>
        {
        setTimeout(res,number)
    })
}