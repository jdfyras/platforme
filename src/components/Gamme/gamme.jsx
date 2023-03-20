import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Boutton from '../Gamme/button';
import Container from 'react-bootstrap/Container';
// import Input from'./input'
function TabGamme() {
  const ColorPicker = () => {
  const [color, setColor] = useState(null);

  return (
    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
  );
}
  return (
    <Container>
      {/* <div style={{alignItems: 'center'}}>
        Afficher{Input()}
        </div> */}
       <Table striped >
      <thead>
        <tr>
          <th>Code</th>
          <th>Libellé</th>
          <th>couleur</th>
          <th>Ordre</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td style={{ color: '#0000FF' }}>2</td>
          <td>cadeaux</td>
          <td>{ColorPicker()}</td>
          <td>1</td>
           <td>{Boutton()}</td>
        </tr>  
        <tr>
          <td colSpan={6} style={{ fontSize: '11px' }}>Affichage de l'élément 1 à 10 sur 11 éléments</td>
        </tr>     
      </tbody>
    </Table>
    </Container>
   
  );
}

export default TabGamme;