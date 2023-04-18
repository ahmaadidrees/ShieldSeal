import React from 'react';
import Button from 'react-bootstrap/Button';
import './Hero.css'; // Import CSS file for Hero component styling

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Cover your ASSphalt</h1>
        <Button variant="outline-light">Free Quote</Button>
        <p>Asphalt maintenance & repair</p>
      </div>
    </div>
  );
}

export default Hero;
