import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Company Name</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus at est iaculis, a commodo nisi facilisis. Vestibulum eu turpis elit. </p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>City, State ZIP</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@company.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p className="text-center">&copy; {new Date().getFullYear()} Company Name</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
