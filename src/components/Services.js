import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const servicesTop = document.querySelector('.services').offsetTop;

      if (scrollTop + windowHeight > servicesTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`services ${isVisible ? 'services--visible' : ''}`}>
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
              <Button as = {Link} to = '/sealcoat' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} variant="warning" className="service-button">Learn More</Button>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="service-name">Crack Filling</h3>
            <img src='/Images/crackfilling.jpeg' alt="Crack Filling" className="service-img" />
            <div className="service-description">
              <p>
              Crack sealing is the first line of defence against water penetrating your asphalt.
              </p>
              <Button as = {Link} to = '/crack' variant="warning" className="service-button" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} >Learn More</Button>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="service-name">Line Painting</h3>
            <img src="/Images/LinePainting.jpeg" alt="Line Painting" className="service-img" />
            <div className="service-description">
              <p>
              Line painting makes for a functional and safe parking lot for pedestrians and vehicles.
              </p>
              <Button as = {Link} to= '/line'  variant="warning" className="service-button" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} >Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
