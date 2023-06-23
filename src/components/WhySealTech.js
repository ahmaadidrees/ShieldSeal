import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const WhySealTech = () => {
  return (
    <Container className="why-sealtech-container" style={{paddingTop:100, paddingBottom:100}}>
    <center>
      <h1>Why SealTech?</h1></center>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante vel ipsum auctor dignissim sed nec erat. Fusce euismod nunc id convallis rhoncus. Aliquam dapibus ac mauris eu fringilla. Nullam vitae tellus quis mi cursus vehicula nec ut lectus. Sed iaculis malesuada diam ut vestibulum.
      </p>
      <center>
      <h3>The Equipment We Use</h3></center>
      <Row className="equipment-row">
        <Col md={4}>
          <Image style={{borderRadius:"40px"}} src="/images/tool1.png" alt="Image 1" fluid />
          <h5>Title 1</h5>
        </Col>
        <Col md={4}>
          <Image  style={{borderRadius:"40px"}} src="/images/tool2.png" alt="Image 2" fluid />
          <h5>Title 2</h5>
        </Col>
        <Col md={4}>
          <Image  style={{borderRadius:"40px"}} src="/images/tool3.png" alt="Image 3" fluid />
          <h5>Title 3</h5>
        </Col>
        <Col md={4}>
          <Image  style={{borderRadius:"40px"}} src="/images/tool4.png" alt="Image 4" fluid />
          <h5>Title 4</h5>
        </Col>
        <Col md={4}>
          <Image  style={{borderRadius:"40px"}} src="/images/tool5.png" alt="Image 5" fluid />
          <h5>Title 5</h5>
        </Col>
        <Col md={4}>
          <Image  style={{borderRadius:"40px"}} src="/images/tool6.png" alt="Image 6" fluid />
          <h5>Title 6</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default WhySealTech;
