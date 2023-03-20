import Table from 'react-bootstrap/Table';
import Boutton from '../Famille/bouttonF';
//import Container from 'react-bootstrap/Container';
import { useState } from 'react';
function TabF() {
const ColorPicker = () => {
  const [color, setColor] = useState(null);

  return (
    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
  );
}
 const Img =()=>{
    
  }
  return (
    <>
       <Table striped >
      <thead>
        <tr>
          <th>Code</th>
          <th>libellé</th>
          <th>couleur</th>
          <th>facon de calcule</th>
          <th>image</th>
          <th>Gamme</th>
          <th>Ordre</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: '#0000FF' }}>001</td>
          <td>Cadeaux</td>
          <td>{ColorPicker()}</td>
          <td>0</td>
          <td>{Img()}</td>
          <td>Cadeaux</td>
          <td>1</td>
           <td>{Boutton()}</td>

        </tr>
            
      </tbody>
    </Table>
    </>
   
  );
}

export default TabF;