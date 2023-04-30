import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <footer style={{background: 'black', color: 'white', padding: '150px',}}>
      <Container>
        <Row>
          <Col sm={12} md={3} className="mb-4">
            <img src="/images/shieldseal.png" alt="Logo" style={{height: '7vh'}}/>
            <div className="mt-3">
              <button href="#" className="footer-btn">Contact Us Today</button>
            </div>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 className="text-yellow">Quick Links</h4>
            <ul className="list-unstyled mt-3" style={{position:'relative', right:'50px'}}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 className="text-yellow">Hours of Operation</h4>
            <ul className="list-unstyled mt-3" style={{whiteSpace:'nowrap', position:'relative', right:'50px' }}>
            <li>Mon: 6:00 AM - 6:00 PM</li>
              <li>Tue: 6:00 AM - 6:00 PM</li>
              <li>Wed: 6:00 AM - 6:00 PM</li>
              <li>Thu: 6:00 AM - 6:00 PM</li>
              <li>Fri: 6:00 AM - 6:00 PM</li>
              <li>Sat: 6:00 AM - 6:00 PM</li>
              <li>Sun: 6:00 AM - 6:00 PM</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 className="text-yellow">Information</h4>
            <ul className="list-unstyled mt-3" style={{position:'relative', right:'50px'}}>
              <li><i className="fas fa-phone"></i> <a href="tel:123-456-7890">123-456-7890</a></li>
              <li><i className="fas fa-phone"></i> <a href="tel:098-765-4321">098-765-4321</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
            <h4 className="text-yellow mt-4">Follow Us On</h4>
            <ul className="list-unstyled d-flex mt-3" style={{position:'relative', right:'50px'}} >
              <li className="me-3"><a href="#"><FaInstagram size={20} className="text-white" /></a></li>
              <li className="me-3"><a href="#"><FaFacebook size={20} className="text-white" /></a></li>
              <li><a href="#"><FaLinkedin size={20} className="text-white" /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
