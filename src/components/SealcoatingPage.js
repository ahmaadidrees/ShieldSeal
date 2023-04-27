import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const SealcoatingPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <center>
          <h1>Sealcoating</h1></center>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/Images/sealcoat.jpeg'
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/Images/LinePainting.jpeg'
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/Images/crackfilling.jpeg'
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>
            Sealcoating is the application of a polymer based coating to asphalt
            pavement, to help shield it from the damaging effects of rain,
            high-weight vehicles, and other harmful elements such as oil and gas
            spills. This coating also safeguards the pavement against future
            cracks and potholes, preventing costly repairs. Research shows if
            asphalt is sealcoated every 2-3 years, it is 90% less likely to
            crack than an unsealed surface. We pride ourselves on using non
            toxic water based sealants to ensure the safest and longest lasting
            product on the market. Using a water based sealant also allows us
            to add products such as Fass-Dri to expedite the drying process and
            diminish downtown. Our polymer is the same product used in airport
            runways to ensure your pavement can endure anything you throw at it
            while maintaining a jet black color. At Shield Seal we provide
            sealcoating solutions for all types of asphalt, from residential
            driveways to high-traffic commercial parking lots. Our skilled
            technicians use the most durable sealers on the market, and
            cutting-edge equipment to ensure your asphalt stays in excellent
            condition for years to come!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SealcoatingPage;
