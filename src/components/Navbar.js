import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';


function Navbarr({isHomePage}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolled(false);
      } else if (!scrolled) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
   

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const bg = isHomePage ? 'black' : (scrolled ? 'black' : 'transparent');
  const variant = isHomePage ? 'light' : (scrolled ? 'dark' : 'light');


  return (
    <Navbar
      sticky='top'
      bg={bg}
      expand='lg'
      variant={variant}
    >
      <Container>
        <img
          style={{ height: '80px', width: '130px' }}
          src='/images/shieldseal.png'
          className='d-inline-block align-top'
          alt='fuck'
        />
        <Navbar.Brand className='nav-title' style={{ color: 'white',fontWeight: 'bold'
 }} href='#home'>
          Shield Seal Pavement Co.
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ outline: 'none' }}
          aria-controls='basic-navbar-nav'
          className='menu'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link style={{ color: 'white' }} as = {Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='#link'>
              About Us
            </Nav.Link>
            <NavDropdown
              className='nav-dropdown'
              title={<span className='my-nav-dropdown'>Services</span>}
              id='nav-dropdown'
            >
              <NavDropdown.Item as = {Link} to = '/sealcoat'>Sealcoating</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/crack'>Crack Filling</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/line'>Line Painting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: 'white' }} href='#link'>
              Contact
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='#link'>
              Gallery
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='tel:+1234567890'>
             <FaPhone />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
