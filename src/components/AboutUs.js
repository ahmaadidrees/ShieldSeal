import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
        <h1 className="text-center my-5">About Us</h1>
          <p>
            Our founders John & Larry have over 18 years of experience in the Asphalt and Paving industry. As Bay Area natives they have been able to grow Shield Seal to be one of the largest players in the region. Our main objective has and always will be to make sure your asphalt repair process is as effortless as possible. With over 275 satisfied customers Shield Seal is without question the #1 Sealcoating brand in the East Bay. Your satisfaction truly is our top priority and we’ll stop at nothing to make sure your asphalt looks magnificent for years to come.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src="/path/to/image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
