import React from 'react';
import './SealcoatingPage.css'; // import your custom styles here

function Sealcoating() {
  return (
    <div className="page-container">
      <div className="left-container">
        <center>
        <h1 className="page-title">Sealcoating</h1></center>
        <p className="page-text">Sealcoating is the application of a polymer based coating to asphalt pavement, to help shield it from the damaging effects of rain, high-weight vehicles, and other harmful elements such as oil and gas spills. This coating also safeguards the pavement against future cracks and potholes, preventing costly repairs. Research shows if asphalt is sealcoated every 2-3 years, it is 90% less likely to crack than an unsealed surface.</p>
        <p className="page-text">We pride ourselves on using non-toxic water-based sealants to ensure the safest and longest-lasting product on the market. Using a water-based sealant also allows us to add products such as Fass-Dri to expedite the drying process and diminish downtown. Our polymer is the same product used in airport runways to ensure your pavement can endure anything you throw at it while maintaining a jet black color.</p>
        <p className="page-text">At Shield Seal, we provide sealcoating solutions for all types of asphalt, from residential driveways to high-traffic commercial parking lots. Our skilled technicians use the most durable sealers on the market, and cutting-edge equipment to ensure your asphalt stays in excellent condition for years to come!</p>
        
      </div>
      <div className="right-container">
        <img src="/images/sealcoat.jpeg" alt="Sealcoating Image" className="page-image" />
        <form className="contact-form">
          <center>
          <h2 className="form-title">Contact Us Today</h2></center>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes"></textarea>
          </div>
          <button type="submit" className="form-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Sealcoating;
