import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RequestAQuote() {
  return (
    <center>
        <h1 className="mb-4">Request a Qoute</h1>
    <Form style={{maxWidth: "300px"}}>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Job site address</Form.Label>
        <Form.Control type="location" placeholder="Enter where job will be" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default RequestAQuote;