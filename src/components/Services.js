import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <Container className="services-container">
        <h1 className="services-title">Our Services</h1>

        <div className="row">
          <div className="col-md-4">
            <h3 className="service-name">Sealcoating</h3>
            <img src='/Images/sealcoat.jpeg' alt="Sealcoating" className="service-img" />
            <div className="service-description">
              <p>
              Asphalt sealcoating on a regular basis will more than triple the life of your parking lot.
              </p>
              <Button onClick={()=>console.log('fuck')} variant="warning" className="service-button">Learn More</Button>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="service-name">Crack Filling</h3>
            <img src='/Images/crackfilling.jpeg' alt="Crack Filling" className="service-img" />
            <div className="service-description">
              <p>
              Crack sealing is the first line of defence against water penetrating your asphalt.
              </p>
              <Button variant="warning" className="service-button">Learn More</Button>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="service-name">Line Painting</h3>
            <img src="/Images/LinePainting.jpeg" alt="Line Painting" className="service-img" />
            <div className="service-description">
              <p>
              Line painting makes for a functional and safe parking lot for pedestrians and vehicles.
              </p>
              <Button variant="warning" className="service-button">Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
