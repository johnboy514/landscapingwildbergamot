import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
<Navbar expand="lg" className="shadow-lg mb-5">
    <Container fluid>
    <img src="../images/wildbergamotlogo.png" className="img-fluid" alt="logo" style={{width: '50px', height: 'auto', marginLeft: 'auto'}}></img>
      <Navbar.Brand style={{  marginRight: 'auto' }}>Wild Bergamot</Navbar.Brand>
    </Container>
</Navbar>
  );
}

export default NavbarComponent;