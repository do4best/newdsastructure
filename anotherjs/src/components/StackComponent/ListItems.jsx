function ListItems({id,title}) {
    return (
        <>
     <table className="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th className="border border-gray-300 ...">{id}</th>
      <th className="border border-gray-300 ...">{title}</th>
    </tr>
  </thead>
  </table>
        </>
      );
}

export default ListItems;