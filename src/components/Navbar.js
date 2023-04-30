import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';


function Navbarr({isHomePage}) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  
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

  const handleNavClose = () => {
    setIsNavExpanded(false);
  }


  const bg = isHomePage || isNavExpanded ? 'black' : (scrolled ? 'black' : 'transparent');
 
 
  return (
    <Navbar
      sticky='top'
      bg={bg}
      expand='lg'
      expanded={isNavExpanded}
    onToggle={handleNavToggle}
      variant={'dark'}
      style={{
        transition: 'background-color 0.5s ease-out'
      }}
    >
      <Container>
        <Link to='/' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>
        <img
          style={{ height: '80px', width: '130px' }}
          src='/images/shieldseal.png'
          className='d-inline-block align-top'
          alt='fuck'
        /></Link>
        {/* <Navbar.Brand className='nav-title' style={{ color: 'white',fontWeight: 'bold'}} as = {Link} to='/' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>
          Shield Seal Pavement Co.
        </Navbar.Brand> */}
        <Navbar.Toggle
          style={{ outline: 'none !important' }}
          aria-controls='basic-navbar-nav'
          className='menu'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='nav-link' style={{ color: 'white' }} as = {Link} to='/' onClick={()=>{ handleNavClose(); window.scrollTo({ top: 0, behavior: 'smooth' });}}>
              Home
            </Nav.Link>
            <Nav.Link className='nav-link' style={{ color: 'white' }} as={Link} to='/' onClick={() => { setTimeout(() => { handleNavClose(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}, 200);  }}>
              About Us
            </Nav.Link>


            <NavDropdown
              className='nav-dropdown'
              title={<span className='my-nav-dropdown'>Services</span>}
              id='nav-dropdown'
            >
              <NavDropdown.Item as = {Link} to = '/sealcoat' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Sealcoating</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/crack' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Crack Filling</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/line'onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Line Painting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to = '/contact' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{ color: 'white' }}>
              Contact
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='#link'>
              Gallery
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='tel:+1234567890'>
             <FaPhone style={{height:'30px', width:'30px'}} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
