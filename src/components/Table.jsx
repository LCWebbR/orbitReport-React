import  "./styling.css"
const Table = ({ sat }) => {
  // way too much work for this lol
  const happy =  <>active &#128512;</>
  const sad = <>inactive &#128546;</>

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
    {sat.map((data, id) => (
      

     <tr key = {id}>

      {console.log(data)}
      {console.log(id)}
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational ? happy : sad }</td>
      
     </tr>
     ))}
     </tbody>
   </table>
  );
};

export default Table;