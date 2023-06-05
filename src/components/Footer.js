import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer({isHome}) {
  return (
    <footer className='foot' style={{background: 'black', color: 'white', paddingBottom: '120px', overflowX:'hidden', paddingTop: '120px', marginTop: isHome && -200}}>
       <div style={{background:"#ec5d24", position:"relative", top:-120,right:1200, width: "10000%", height:"20px", overflowX:'hidden'}}></div>
      <Container className='footer-container'>
        <Row>
          <Col sm={12} md={3} className="mb-4" style={{textAlign:'center'}}>
            <img src="/images/sealtech.png" alt="Logo" style={{height: '250px', marginTop:-55}}/>
            <div className="mt-3">
              <button href="#" className="footer-btn">Contact Us Today</button>
            </div>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 style={{textAlign:'center'}} className="text-yellow">Quick Links</h4>
            <ul className="list-unstyled mt-3 footer-links" style={{ textAlign:'center', textDecoration:'none !important', color:'white'}}>
            <Link  style={{color:'white',textDecoration:'none'}} to='/'> <li className='text-orange'>Home</li></Link>
              <Link style={{color:'white',textDecoration:'none'}} to = '/about'><li className='text-orange'>About Us</li></Link>
              <Link  style={{color:'white',textDecoration:'none'}} to = '/sealcoat'><li className='text-orange'>Our Services</li></Link>
              <Link  style={{color:'white',textDecoration:'none'}} to = '/contact'><li className='text-orange'>Contact</li></Link>
              <Link  style={{color:'white',textDecoration:'none'}} to = '/'><li className='text-orange'>Gallery</li></Link>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 className="text-yellow text-center">Hours of Operation</h4>
            <ul className="list-unstyled mt-3 footer-links" style={{whiteSpace:'nowrap',textAlign:'center' }}>
            <li className='text-orange'>Mon: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Tue: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Wed: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Thu: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Fri: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Sat: 6:00 AM - 6:00 PM</li>
              <li className='text-orange'>Sun: 6:00 AM - 6:00 PM</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 style={{textAlign:'center'}} className="text-yellow">Information</h4>
            <ul className="list-unstyled mt-3 footer-links" style={{ textAlign:'center'}}>
              <a className='text-orange' style={{color:'white',textDecoration:'none'}} href="tel:123-456-7890"><li className='text-orange'> 123-456-7890</li></a>
              <a className='text-orange' style={{color:'white',textDecoration:'none'}} href="tel:098-765-4321"><li className='text-orange'> 098-765-4321</li></a>
               <a className='text-orange' style={{color:'white',textDecoration:'none'}} href="mailto:info@example.com"><li className='text-orange'>info@example.com</li></a>
            </ul>
            <h4 style={{textAlign:'center'}} className="text-yellow mt-4">Follow Us On</h4>
            <ul className="list-unstyled d-flex mt-3  justify-content-center" style={{ textAlign:'center'}} >
              <a className='text-orange' href="#"><li className="me-2"><FaInstagram size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaFacebook size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaLinkedin size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaYoutube size={30}  /></li></a>
            </ul>
          </Col>
        </Row>
        
      </Container>
      <div style={{background:"#ec5d24", position:"relative", bottom:-120,right:1200, width: "10000%", height:"20px", overflowX:'hidden'}}></div>
    </footer>
  );
}

export default Footer;
