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
    <div>
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
    <section>
    <div class="py-3">
      <div class="row">
        <div class="col-md-8 col-lg-2 col-xl-4">
          <h1 style={{ color: "#000000", fontSize: '50px', fontFamily: "Dancing Script, cursive"}}>Check out our before and after pictures!</h1>
          <p style={{ color: "#000000", fontSize: '20px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque.
                </p>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 offset-xl-1">
        <Carousel>
      <Carousel.Item>
      <img
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
  <h1 style={{fontFamily: "Dancing Script, cursive", fontSize: '60px'}}>Our Services</h1>
  <Container>
    <Row className="d-flex flex-wrap justify-content-center">
    <Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem' }}>
  <Card.Header style={{ paddingTop: '200px', backgroundImage: 'url("https://turfboundlandscape.com/wp-content/themes/land2/images/sliders/02.jpg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Landscape Managment</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem' }}>
  <Card.Header style={{ paddingTop: '200px', backgroundImage: 'url("https://turfboundlandscape.com/wp-content/themes/land2/images/sliders/02.jpg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Landscape Construction</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '24rem', height: '30rem' }}>
  <Card.Header style={{ paddingTop: '200px', backgroundImage: 'url("https://turfboundlandscape.com/wp-content/themes/land2/images/sliders/02.jpg")'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Facility Repairs</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
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

  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"}}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5" style={{fontFamily: "Dancing Script, cursive"}}>About Us: Transforming Your Outdoor Dreams into Reality</h2>
      <p style={{ textAlign: 'left' }}><span style={{marginLeft: "25px"}}>Welcome</span> to Wild Bergamot, your trusted partner in creating breathtaking outdoor spaces that inspire and delight. With a passion for nature's beauty and a commitment to excellence, we have been crafting outdoor landscapes that tell unique stories for [X] years. Let us take you on a journey through our world of landscaping, where creativity knows no bounds, and your dreams are our top priority.
       <br></br>
       <br></br>
       <span style={{marginLeft: "25px"}}>Our Story </span>
journey began with a simple yet profound love for nature. It was a deep appreciation for the intricate dance of sunlight and shadow on lush greenery that inspired us to turn this passion into a profession. Over the years, we've honed our skills and evolved our craft to become a landscaping company renowned for innovation, reliability, and artistry.
<br></br>
<br></br>
       <span style={{marginLeft: "25px"}}>Our Philosophy </span>
At Wild Bergamot, we believe that every landscape has a story waiting to be told. Whether it's a sprawling backyard, a cozy garden, or a commercial property, we approach each project with a unique perspective. We take the time to understand your vision, your lifestyle, and your aspirations for your outdoor space. Then, we weave those elements together to create a landscape that not only meets your practical needs but also reflects your personality.
<br></br>
<br></br>
       
        <span style={{marginLeft: "25px"}}>Our Team </span>
Behind every stunning landscape is a team of dedicated professionals who bring dreams to life. Our skilled designers, horticulturists, and craftsmen work in harmony to ensure that every detail is executed to perfection. We pride ourselves on our commitment to ongoing education and staying at the forefront of landscaping trends and sustainable practices. This allows us to offer you the latest innovations and eco-friendly solutions.
<br></br>
<br></br>
        <span style={{marginLeft: "25px"}}>Our Services </span>
Whether you're envisioning a tranquil garden retreat, an outdoor entertainment paradise, or a sustainable, water-wise landscape, we have the expertise to make it happen. Our comprehensive range of services includes:
Design and Planning: Our expert designers will collaborate with you to create a customized plan that brings your vision to life. We consider factors like space utilization, plant selection, lighting, and hardscaping to ensure a harmonious and functional design.
<br></br>
<br></br>
<strong>Installation:</strong> Our skilled craftsmen are adept at turning design plans into reality. From the excavation and grading to planting and hardscaping, we handle every aspect of installation with precision and care.
<br></br>
<br></br>
<strong>Maintenance:</strong> A beautiful landscape deserves regular care and attention. Our maintenance services cover everything from lawn care and pruning to irrigation system management, ensuring that your outdoor space remains vibrant and healthy year-round.
<br></br>
<br></br>
<strong>Water Features:</strong> Elevate the sensory experience of your landscape with the soothing sounds of water. We specialize in designing and installing water features, from elegant fountains to serene ponds.
<br></br>
<br></br>
<strong>Hardscaping:</strong> We create functional and aesthetically pleasing hardscape elements, including patios, walkways, retaining walls, and outdoor kitchens, that seamlessly integrate with your landscape.
<br></br>
<br></br>
<span style={{marginLeft: "25px"}}>Our Commitment </span>
At Wild Bergamot, we are committed to sustainability and environmental stewardship. We take pride in using eco-friendly practices and materials whenever possible, from drought-tolerant plant selections to energy-efficient lighting solutions. We understand the importance of preserving the beauty of our natural surroundings for generations to come.

Your Dreams, Our Mission

Our mission is simple: to transform your outdoor dreams into reality. Whether it's a place to relax and unwind, a space for vibrant gatherings, or a sanctuary for wildlife, we are here to bring your vision to life. When you choose us, you choose a partner who values creativity, integrity, and the enduring beauty of the great outdoors.

Thank you for considering Wild Bergamot for your landscaping needs. We look forward to embarking on this exciting journey with you, creating landscapes that will be cherished for years to come. Contact us today to get started on your outdoor transformation!</p>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  );
}

export default Home;
