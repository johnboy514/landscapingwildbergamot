import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Home() {

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
    if (name.current.value && email.current.value && email.current.value) {
      var params = {
        from_name: name.current.value,
        from_email: email.current.value,
        reply_to: email.current.value,
        message: message.current.value,
        address: address.current.value,
      };
      emailjs.send('service_0y00gzg', 'template_jff3baf', params).then(function (res) {});
      alert("Thank you for sending a message!");
      window.location.reload(false);
    } else {
      alert('Failed to send message');
    }
  };

  const pageStyle = {
    backgroundImage: 'url("https://i.pinimg.com/originals/db/f7/c7/dbf7c77d5f6b397743c0b431f4bfcb6a.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '750px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fefae0',
  };

  return (
    <div style={pageStyle}>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span style={{ color: '#bc6c25' }}>for your business</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card" style={{ maxWidth: '400px', maxHeight: '600px', backgroundColor: '#dda15e', border: '2px solid #283618' }}>
                  <div className="card-body py-5 px-md-">
                    <Form onSubmit={handleSubmit} className="px-3">
                      <Form.Group className="mb-3 pt-3" controlId="formName">
                        <Form.Control type="text" ref={name} placeholder="Name" />
                        {visible && <div className="text-danger">Please enter your name</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" ref={email} placeholder={"Email"} />
                        {visible2 && <div className="text-danger">Please enter your Email</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Control type="text" ref={address} placeholder="Job site address" />
                        {visible3 && <div className="text-danger">Please enter your job site address</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Control as="textarea" ref={message} rows={5} placeholder="Enter your message..."/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>
                      <div style={{ borderBottom: '2px solid #283618' }}></div>
                      
                      <div className="d-flex justify-content-center mt-3"> {/* Center the button */}
                        <Button style={{ backgroundColor: '#283618' }} type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
