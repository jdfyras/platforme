import Table from 'react-bootstrap/Table';
import Boutton from './button';
import Container from 'react-bootstrap/Container';
function Tab() {
  return (
    <Container>
       <Table striped >
      <thead>
        <tr>
          <th>Code</th>
          <th>Libellé</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: '#0000FF' }}>1</td>
          <td>cadeaux</td>
           <td>{Boutton()}</td>

        </tr>
         <tr>
          <td style={{ color: '#0000FF' }}>2</td>
          <td>cadeaux1</td>
           <td>{Boutton()}</td>

        </tr>  
        <tr>
          <td style={{ color: '#0000FF' }}>3</td>
          <td>cadeaux2</td>
           <td>{Boutton()}</td>

        </tr>     
      </tbody>
    </Table>
    </Container>
   
  );
}

export default Tab;