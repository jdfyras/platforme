import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { BsTrash3 } from "react-icons/bs";
import { BsExclamationOctagon,BsDatabaseAdd } from "react-icons/bs";

const Modify=()=> {
  // const Img=()=>{

  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ColorPicker = () => {
  const [color, setColor] = useState(null);
  return (
    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
  );
}
  return (
    <>

       <BsFillPencilFill onClick={handleShow}/>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une Famille</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Code*</Form.Label>
              <Form.Control
                placeholder="entrer un code"
                autoFocus
              />
            </Form.Group>



            <Form.Group>
              <Form.Label>Libellé*</Form.Label>

            <Form.Control
                placeholder="entrer un libellé"
              />
            </Form.Group>


            <Form.Group>
              <Form.Label typeof='color'>couleur*</Form.Label>
            <Form>{ColorPicker()}</Form>
            </Form.Group>

            <Form.Group>
              <Form.Label>facon de calcule*</Form.Label>

            <Form.Control
                placeholder="entrer un libellé"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>image*</Form.Label>

            <Form.Control
                placeholder="entrer un image"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gamme*</Form.Label>

            <Form.Control
                placeholder="entrer un gamme"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ordre*</Form.Label>

            <Form.Control
                placeholder="entrer un ordre"
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" >
            Enregistrer
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Annuler
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};



const Delete=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>

       <BsTrash3 onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><BsExclamationOctagon/> supprimer </Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez vous vraiment supprimer cette famille!</Modal.Body>
        <Modal.Footer>   
            <Button variant="success" >
            Oui
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Non
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};


const Ajouter=()=> {
//  const Img=()=>{

//   }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const ColorPicker = () => {
  const [color, setColor] = useState(null);
  return (
    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
  );
  
}

//<BsDatabaseAdd onClick={handleShow}/>
  return (
        <>

       <BsDatabaseAdd onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une Famille</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Code*</Form.Label>
              <Form.Control
                placeholder="entrer un code"
                autoFocus
              />
            </Form.Group>



            <Form.Group>
              <Form.Label>Libellé*</Form.Label>

            <Form.Control
                placeholder="entrer un libellé"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label typeof='color'>couleur*</Form.Label>
            <Form>{ColorPicker()}</Form>
            </Form.Group>

            <Form.Group>
              <Form.Label>facon de calcule*</Form.Label>

            <Form.Control
                placeholder="entrer un libellé"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>image*</Form.Label>

            <Form.Control
                placeholder="entrer un image"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gamme*</Form.Label>

            <Form.Control
                placeholder="entrer un gamme"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ordre*</Form.Label>

            <Form.Control
                placeholder="entrer un ordre"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" >
            Enregistrer
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Annuler
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};


export { Modify, Delete,Ajouter};
