import React from 'react';
import './AboutUs.css'
import { Link } from 'react-router-dom';
const AboutUs = () => {

  
  return (
    <div id='about' className="about-us">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>About Us</h2>
          <p>Our founders John & Larry have over 18 years of experience in the Asphalt and Paving industry. As Bay Area natives they have been able to grow Shield Seal to be one of the largest players in the region. Our main objective has and always will be to make sure your asphalt repair process is as effortless as possible. With over 275 satisfied customers Shield Seal is without question the #1 Sealcoating brand in the East Bay. Your satisfaction truly is our top priority and we’ll stop at nothing to make sure your asphalt looks magnificent for years to come.</p>
        </div>
        <div className="about-us-right">
          <h2>Why Seal Tech</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam urna nec risus dapibus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed suscipit mauris nec libero rhoncus ultrices. Praesent dignissim gravida mauris, a facilisis lorem facilisis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
        <Link to='contact'>
          <button onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} className="about-btn">Contact Us Today</button></Link>
      </div>
    </div>
  );
};

export default AboutUs;
