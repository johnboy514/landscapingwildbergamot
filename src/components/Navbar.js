import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Wild Bergamot</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;