import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css'



function navbar() {
  return (
    <Navbar sticky='top' bg="dark" expand="lg" variant='dark' >
      <Container>
      <img 
              style={{height: "150px", width: "200px"}}
              src = '/images/shieldseal.png'
              
              className="d-inline-block align-top"
              alt="fuck" />
        <Navbar.Brand style={{color: "white"}} href="#home">Shield Seal Pavement Co.</Navbar.Brand>
        <Navbar.Toggle style={{outline: "none"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color: "white"}} href="#link">About Us</Nav.Link>
            <NavDropdown className='nav-dropdown' title={<span className="my-nav-dropdown">Services</span>}
      id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sealcoating</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Crack Filling</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Line Painting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  style={{color: "white"}} href="#link">Contact</Nav.Link>
            <Nav.Link style={{color: "white"}} href="#link">Gallery</Nav.Link>
          </Nav>
          <Button variant="outline-warning">Free Quote</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;