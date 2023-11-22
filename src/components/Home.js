import React from "react";
import {Button, Form, Container, Row}from 'react-bootstrap';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import backgroundImage from "../images/backgroundpic.jpg";
import designPic from "../images/designpic.jpg";

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
    backgroundImage: 'url(' + designPic + ')',
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

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <div className="backgroundcolor">
    <div style={pageStyle}>
      <section className="font">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-8 mb-5 mb-lg-0 mt-5 slideInLeft" style={{ backgroundColor: 'rgba(221, 161, 94, 0.9)' , border: "solid" , borderColor: "#283618" }}>
              <img src={require('../images/wildbergamotlogo.png')} alt="Logo" className="img-fluid float-start" style={{ marginTop: '20px' }} />
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Enhance <br />
                  <span style={{ color: 'rgb(96, 108, 56)' }}>Your Estate</span>
                </h1>
                <p style={{ color: "#fefae0" }}>
                At Wild Bergamot, our approach ensures that your 
                yard not only looks stunning upon completion but also flourishes 
                over time through thoughtful design, precise installation, 
                and meticulous maintenance.
                </p>
              </div>

              <div className="col-lg-4 mb-5 mb-lg-0 slideInRight">
                <div className="requestQuoteCard" style={{ 
                      maxWidth: '400px', 
                      maxHeight: '600px', 
                      backgroundColor: 'rgba(221, 161, 94, 0.9)', // Adjust the alpha value (0.7 in this example)
                      border: '2px solid #283618' 
                    }}>                     
                  <div className="card-body py-5 px-md-">
                  <h4 className="text-center" style={{color: "#fefae0", fontFamily: "Dancing Script, cursive"}}>Request your free quote!</h4>
                    <Form onSubmit={handleSubmit} className="px-3">
                      <Form.Group className="mb-3 pt-3" controlId="formName">
                        <Form.Control type="text" ref={name} placeholder="Name" />
                        {visible && <div className="text-danger">Please enter your name</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" ref={email} placeholder={"Email"} pattern="^\S+@\S+\.(com|net|edu|org|gov)$" title="Please enter a valid email address ending with .com" />
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
                        <Button className="button-pop-out" style={{ backgroundColor: '#283618' }} type="submit">
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
 <section className='mt-5'>
 </section>
  <center>
  <Container>
  <Row className="d-flex flex-wrap justify-content-center">
    </Row>
  </Container>
  </center>
  </div>
  )
}

export default Home;
