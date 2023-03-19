import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input() {
  return (
    <>
      <InputGroup>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

    </>
  );
}

export default Input;