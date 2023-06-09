import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
    <div id="home" className="hero-section">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="hero-content">
          <h1 className="hero-title">COVER YOUR ASPHALT</h1>
          <h2 className="hero-subtitle">Bay Area's #1 Pavement Maintenance Company</h2>
          <Link to='/contact'>
          <button className="hero-button">Get A Quote <FaArrowRight/></button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
