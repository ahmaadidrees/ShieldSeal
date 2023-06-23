import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './OurStory.css'
const OurStory = () => {
  return (
    <Container className="about-us-container" style={{paddingTop:100,paddingBottom:100}}>
        <center>
      <h1 className='ourStory-title'>Our Story</h1>
     
        <Col md={6}>
          <Image style={{marginBottom:-80}} src="/images/sealtech.png" alt="Our Story" fluid />
          <p>
            Our founders John & Larry have over 18 years of experience in the Asphalt and Paving industry. As Bay Area natives, they have been able to grow Shield Seal to be one of the largest players in the region. Our main objective has and always will be to make sure your asphalt repair process is as effortless as possible. With over 275 satisfied customers, Shield Seal is without question the #1 Sealcoating brand in the East Bay. Your satisfaction truly is our top priority, and we’ll stop at nothing to make sure your asphalt looks magnificent for years to come.
          </p>
        </Col>
      </center>
    </Container>
  );
};

export default OurStory;
