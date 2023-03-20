import Table from 'react-bootstrap/Table';
import Boutton from '../SousFamille/buttonSF';
//import Container from 'react-bootstrap/Container';
import { useState } from 'react';
function TabSF() {
const ColorPicker = () => {
  const [color, setColor] = useState(null);

  return (
    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
  );
}
  return (
    <>
       <Table striped >
      <thead>
        <tr>
          <th>Ordre</th>
          <th>couleur</th>
          <th>code</th>
          <th>Libellé</th>
          <th>Famille</th>
          <th>Prix SousFamille ht</th>
          <th>Prix SousFamille ttc</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: '#0000FF' }}>1</td>
          <td>{ColorPicker()}</td>
          <td>HAPPYCOLA</td>
          <td>HAPPY COLA</td>
          <td>HAPPY COLA</td>
          <td>0</td>
          <td>0</td>
           <td>{Boutton()}</td>

        </tr>
            
      </tbody>
    </Table>
    </>
   
  );
}

export default TabSF;