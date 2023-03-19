import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { BsTrash3 } from "react-icons/bs";
import { BsExclamationOctagon,BsDatabaseAdd } from "react-icons/bs";
const Modify=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

       <BsFillPencilFill onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier un groupe</Modal.Title>
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


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" >
            Enregistrer
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
        <Modal.Body>Voulez vous vraiment supprimer cette marque!</Modal.Body>
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

       <BsDatabaseAdd onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un groupe</Modal.Title>
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

            <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ordre*</Form.Label>

            <Form.Control
                placeholder="entrer un Ordre"
              />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export { Modify, Delete,Ajouter};
