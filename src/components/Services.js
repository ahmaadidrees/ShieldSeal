import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Services.css';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaArrowRight } from 'react-icons/fa';


function Services() {
 

  return (
    <div className='services'>
      <Container className="services-container">
        <h1 className="services-title">Our Services</h1>

        <div className="row">
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="service">
        
          <div className="col-md-4">
            <h3 className="service-name">Sealcoating</h3>
            <Link to = {"/sealcoat"}>
            <img onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} src='/Images/sealcoat.jpeg' alt="Sealcoating" className="service-img" />
            </Link>
            <div className="service-description">
              <p>
              Asphalt sealcoating on a regular basis will more than triple the life of your parking lot.
              </p>
              <center>
              <Button as = {Link} to = '/sealcoat' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} variant="warning" className="service-button">Learn More <FaArrowRight/></Button></center>
            </div>
          </div>
          </CSSTransition>
          <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="service">
          <div className="col-md-4">
            <h3 className="service-name">Crack Filling</h3>
            <Link to = "/crack">
            <img onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} src='/Images/crackfilling.jpeg' alt="Crack Filling" className="service-img" />
            </Link>
            <div className="service-description">
              <p>
              Crack sealing is the first line of defence against water penetrating your asphalt.
              </p>
              <center>
              <Button as = {Link} to = '/crack' variant="warning" className="service-button" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} >Learn More <FaArrowRight/></Button></center>
            </div>
          </div>
          </CSSTransition>
          <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="service">

          
          <div className="col-md-4">
            <h3 className="service-name">Line Painting</h3>
            <Link to = {"/line"}>
            <img onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} src="/Images/LinePainting.jpeg" alt="Line Painting" className="service-img" />
            </Link>
            <div className="service-description">
              <p>
              Line painting makes for a functional and safe parking lot for pedestrians and vehicles.
              </p>
              <center>
              <Button as = {Link} to= '/line'  variant="warning" className="service-button" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} >Learn More <FaArrowRight/></Button></center>
            </div>
          </div>
          </CSSTransition>
        </div>
      </Container>
    </div>
  );
}

export default Services;
