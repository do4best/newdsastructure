import { MdDelete } from "react-icons/md";
function FindListContact({contact,removeContact}) {
  
    const anotherList = contact.map((id)=>{
        return (
         
            <div key={id.id}>
                <table className="table" >
                {/* head */}
                <thead></thead>
                <tbody >
             
                  {/* row 1 */}
                  <tr >
              
                    <td>{id.data.name}</td>
                    <td>{id.data.email}</td>
                    <td onClick={()=>removeContact(id.id)}><MdDelete size={30}/></td>
            
                  </tr>
                  </tbody>
                  </table>
                  </div>
       
    )})
    return ( <>
    {
        anotherList
    }
    </> );
}

export default FindListContact;