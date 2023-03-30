import Button from 'react-bootstrap/Button';
// import { BsFillPencilFill } from "react-icons/bs";
import { Modify, Delete} from './modale'
// import { BsTrash3 } from "react-icons/bs";
function Boutton() {
  return (
    <>
    <Button variant="outline-info">{Modify()}</Button>
    <Button variant="outline-danger">{Delete()}</Button>
      
    </>
  );
}

export default Boutton;