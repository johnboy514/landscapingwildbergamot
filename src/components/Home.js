import React from "react";
import {Button, Form, Carousel, Card, Container, Row}from 'react-bootstrap';
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
    backgroundImage: 'url("https://turfboundlandscape.com/wp-content/themes/land2/images/sliders/02.jpg")',
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
    <div className="backgroundcolor">
    <div style={pageStyle}>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Maintain <br />
                  <span style={{ color: '#fefae0' }}>Your Estate</span>
                </h1>
                <p style={{ color: "#fefae0" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card" style={{ 
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
 <section className='mt-5'>
  <div className="py-3">
    <div className="row">
      <div className="col-md-8 col-lg-2 col-xl-4 offset-xl-1" style={{ backgroundColor: '#fefae0', borderRadius: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: "#283618", fontSize: '50px', fontFamily: "Dancing Script, cursive", textAlign: 'center' }}>Check out our before and after pictures!</h1>
        </div>
      </div>
      <div className="col-md-10 col-lg-8 col-xl-5 offset-xl-1">
        <Carousel>
      <Carousel.Item>
      <img
          style={{ borderRadius: '5% 5% 5% 5%'}}
          className="d-block w-100"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-cheap-landscaping.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style={{ borderRadius: '5% 5% 5% 5%'}}
          className="d-block w-100"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-front-yard-landscaping.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style={{ borderRadius: '5% 5% 5% 5%'}}
          className="d-block w-100"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/04/featured-image-landscaping.jpeg-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </div>
  </section>
  <h1 id='services' className="mt-5" style={{fontFamily: "Dancing Script, cursive", fontSize: '60px'}}>Our Services</h1>
  <Container>
    <Row className="d-flex flex-wrap justify-content-center">
    <Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem', backgroundColor: '#fefae0', borderStyle: 'none' }}>
  <Card.Header style={{ borderRadius: '10%', paddingTop: '200px', backgroundImage: 'url("https://turfboundlandscape.com/wp-content/themes/land2/images/sliders/02.jpg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#606c38', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Design</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem', backgroundColor: '#fefae0', borderStyle: 'none' }}>
  <Card.Header style={{ borderRadius: '10%', paddingTop: '200px', backgroundImage: 'url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-front-yard-landscaping.jpeg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#606c38', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Installation</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Native plants</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Perennials</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Stone Work</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem', backgroundColor: '#fefae0', borderStyle: 'none' }}>
  <Card.Header style={{ borderRadius: '10%', paddingTop: '200px', backgroundImage: 'url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/04/featured-image-landscaping.jpeg-1.jpg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#606c38', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Maintenance</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Yard Care</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#606c38' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>

    </Row>
  </Container>
  <section class="text-center mt-5">
  <div class="p-5 bg-image" style={{
    backgroundColor: '#283618',
    height: "300px"
  }}></div>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card mx-4 mx-md-5 shadow-5-strong mb-5" style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '600px'
        }}>
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-12">
                <h2 id='about' class="fw-bold mb-5" style={{ fontFamily: "Dancing Script, cursive" }}>About Us: Transforming Your Outdoor Dreams into Reality</h2>
                <p style={{ textAlign: 'left' }}>
                  <span style={{ marginLeft: "25px" }}>Welcome</span> to Wild Bergamot, your trusted partner in creating breathtaking outdoor spaces that inspire and delight. With a passion for nature's beauty and a commitment to excellence, we have been crafting outdoor landscapes that tell unique stories for [X] years. Let us take you on a journey through our world of landscaping, where creativity knows no bounds, and your dreams are our top priority.
                  <br /><br />
                  <span style={{ marginLeft: "25px" }}>Our Story</span> began with a simple yet profound love for nature. It was a deep appreciation for the intricate dance of sunlight and shadow on lush greenery that inspired us to turn this passion into a profession. Over the years, we've honed our skills and evolved our craft to become a landscaping company renowned for innovation, reliability, and artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block" style={{ width: '440px' }}>
  <img style={{ borderRadius: '100%'  }} src="https://media.glassdoor.com/l/35/ce/66/4d/happy-landscapers.jpg" alt="landscapers" class="img-fluid" />
</div>
    </div>
  </div>
</section>

  </div>
  )
}

export default Home;
