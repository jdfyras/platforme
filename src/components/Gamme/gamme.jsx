import Table from 'react-bootstrap/Table';
import Boutton from './button';
import Container from 'react-bootstrap/Container';
// import Input from'./input'
function TabGamme() {
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
          <td></td>
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