import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComponent() {
  return (
<Navbar expand="lg" className="shadow-lg mb-5">
    <Container fluid>
    <img src="../images/wildbergamotlogo.png" className="img-fluid" alt="logo" style={{width: '50px', height: 'auto' }}></img>
      <Navbar.Brand style={{  marginRight: 'auto', marginLeft: 'auto' }}>Wild Bergamot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/request-a-quote">Request a Quote</Nav.Link>
          </Nav>
          </Navbar.Collapse>
    </Container>
</Navbar>
  );
}

export default NavbarComponent;