import { MdDelete } from "react-icons/md";
function ContactList({contact,removeContact}) {
    console.log(contact)
const contactList = contact.map((person)=>{
    return(
        <table className="table">
    {/* head */}
    
 
      {/* row 1 */}
      <tr>
  
        <td>{person.data.name}</td>
        <td>{person.data.email}</td>
        <td onClick={()=>removeContact(person.id)}><MdDelete size={30}/></td>

      </tr>
      </table>
    )
})
    return (<>
    <div>{contactList}</div>
    </>  );
}

export default ContactList;