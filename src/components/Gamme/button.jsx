import Button from "react-bootstrap/Button";
// import { BsFillPencilFill } from "react-icons/bs";
import { Modify, Delete, Ajouter } from "../Gamme/modalBtn";
// import { BsTrash3 } from "react-icons/bs";
function Boutton() {
  return (
    <>
      <Button variant="outline-info">{Modify()}</Button>
      <Button variant="outline-danger">{Delete()}</Button>
      <Button variant="outline-success">{Ajouter()}</Button>
    </>
  );
}

export default Boutton;
