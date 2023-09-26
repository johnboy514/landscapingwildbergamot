import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function RequestAQuote() {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const address = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === '') {
      setVisible(true);
    } if (email.current.value === '') {
      setVisible2(true);
    } if (message.current.value === '') {
      setVisible1(true);
    } if (address.current.value === '') {
      setVisible3(true);
    } else {
      sendMail();
    }
  };
  (function () {
    emailjs.init("lXIIIeccwD3sd6Wtl");
    })();
    function sendMail() {
    if(name.current.value && email.current.value && email.current.value) {
    var params = {
      from_name: name.current.value,
      from_email: email.current.value,
      reply_to: email.current.value,
      message: message.current.value,
      address: address.current.value,
      };
      emailjs.send( 'service_0y00gzg', 'template_jff3baf', params).then(function (res) {});
      alert("Thank you for sending a message!")
      window.location.reload(false);
    } else {
      alert('Failed to send message')
    }
    };
    
  return (
    <center>
      <h1>Request a Quote</h1>
      <br></br>
    <Form onSubmit={handleSubmit} className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, backgroundColor: "lightGray", borderRadius: 25}}>
      <Form.Group className="mb-3 pt-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={name} placeholder="Enter name" />
        {visible && <div className="text-danger">Please enter your name</div>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder={"Enter email"} />
        {visible2 && <div className="text-danger">Please enter your Email</div>}
      </Form.Group>

      <Form.Group className="mb-3 pt-3" controlId="formAddress">
        <Form.Label>Job site address</Form.Label>
        <Form.Control type="text" ref={address} placeholder="Enter job site address" />
        {visible3 && <div className="text-danger">Please enter your job site address</div>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" ref={message} rows={5} placeholder="Enter message" />
        {visible1 && <div className="text-danger">Please enter your message</div>}
      </Form.Group>

      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default RequestAQuote;