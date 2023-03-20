import { Container, Table } from 'react-bootstrap';
import SelectFou from './selectFou';
import Select from './selectFou';
import button from './button';
function Produit() {
  return (
   <Container>
      <div>Fournisseur<br/>
      {SelectFou()}
      </div> 
      <div>Gamme<br/>
      {Select()}
      </div> 
      <div>Famille<br/>
      {SelectFou()}
      </div> 
      <div>Sous Famille<br/>
      {Select()}
      </div> 
      <div>Marque<br/>
      {Select()}
      </div> 
      <Table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Ordre</th>
          <th>Libellé</th>
          <th>Fournisseur</th>
          <th>Image</th>
          <th>Sous Famille</th>
          <th>Prix carton</th>
          <th>Action</th>
        </tr>
      </thead>
            <tbody>
        <tr>
          <td style={{ color: '#0000FF' }}>1</td>
          <td>cadeaux</td>
           <td>{button()}</td>
        </tr>
        </tbody>
      </Table>
   </Container>
  );
}

export default Produit;