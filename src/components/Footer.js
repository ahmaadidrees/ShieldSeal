import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-white" style={{background:'black', height:'220px', marginTop: '100px'}}>
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={12} className="d-flex justify-content-center mb-3">
            <a href="#" className="text-warning me-3">Free Quote</a>
            <a href="#" className="text-warning">Contact Us</a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="d-flex justify-content-center mb-3">
            &copy; {new Date().getFullYear()} Shield Seal Pavement Co.
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md={12} className="d-flex justify-content-center">
            <FaInstagram size={20} className="text-white" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
