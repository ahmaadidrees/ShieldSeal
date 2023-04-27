import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/Images/sealcoat.jpeg', '/Images/LinePainting.jpeg', '/Images/crackfilling.jpeg'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div id="home" className="slide-section">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="slide-content">
          <h1 className="slide-title">Get The Most Out Of Your Asphalt Parking Lot – 100% Satisfaction!</h1>
          <h2 className="slide-subtitle">We Provide A Full Range Of Asphalt Paving, Repair, & Maintenance Services</h2>
          <button className="free-quote">Contact Us Today</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
