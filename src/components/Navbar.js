import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComponent() {
  return (
<Navbar expand="lg" className="shadow-lg mb-5">
    <Container fluid>
    <img src="../images/wildbergamotlogo.png" className="img-fluid" alt="logo" style={{width: '50px', height: 'auto', marginLeft: 'auto'}}></img>
      <Navbar.Brand style={{  marginRight: '5px' }}>Wild Bergamot</Navbar.Brand>
      <br></br>
          <Nav style={{  marginRight: 'auto', marginLeft: '5px' }}>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Request a Quote</Nav.Link>
          </Nav>
    </Container>
</Navbar>
  );
}

export default NavbarComponent;