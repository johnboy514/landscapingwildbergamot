import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: "#606c38",
    position: 'relative',
    height: '110px',
  };

  const lineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '25px',
    backgroundColor: "#283618",
  };

  const whiteTextStyle = {
    color: '#fefae0',
    marginTop: '25px', // Add margin to push the text down
    fontFamily: 'Dancing Script, cursive',
    fontSize: '20px',
  };

  const lineAboveNavLinksStyle = {
    position: 'absolute',
    top: '100px', // Position the line below the Navbar
    left: 0,
    right: 0,
    backgroundColor: "#283618",
  };

  return (
    <div style={navbarStyle}>
      <div style={lineStyle}></div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ ...whiteTextStyle, fontSize: '40px' }}>Wild Bergamot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" style={whiteTextStyle}>Home</Nav.Link>
              <Nav.Link href="/services" style={whiteTextStyle}>Services</Nav.Link>
              <Nav.Link href="/about" style={whiteTextStyle}>About</Nav.Link>           
            </Nav> 
          </Navbar.Collapse>
          <div className="ml-auto" style={whiteTextStyle}>Call us!: 555-555-5555</div>
        </Container>
      </Navbar>
      <div style={lineAboveNavLinksStyle}></div>
    </div>
  );
}

export default NavbarComponent;
