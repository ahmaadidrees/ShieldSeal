import React from 'react';
import './LinePainting.css'; // import your custom styles here

function LinePainting() {
  return (
    <div className="page-container">
      <div className="left-container">
        <center>
        <h1 className="page-title">Line Painting</h1></center>
        <p className="linepage-text">At Shield Seal we provide best in class line painting services to every kind of property owner, whether you're a small daycare or a large office park your satisfaction is our #1 priority.Whether it's a damaged lot or a newly constructed site, our team of experienced painters will provide a customized solution to meet your needs.</p>
        <p className="linepage-text">Our line painters are experienced professionals who take great pride in their work and strive to do it right the first time around! We are equipped with all the necessary equipment – including high quality paints and stencils – to cater to all your line painting needs.</p>
        <h2 className="page-subtitle">5 Reasons Why Freshly Marked Pavement Lines Matter</h2>
        <li>Safety – No one wants an accident occurring on their property because someone couldn’t see the lane dividers.</li>
        <li>Cleanliness – Freshly painted lines will keep your parking lot looking clean and orderly. This makes a great impression on customers and helps improve business!</li>
        <li>ADA Compliance –</li>
        <li>Designated Parking –</li>
        <li>Traffic Flow – Having clear markings for lanes will reduce traffic accidents by ensuring drivers don’t use the wrong traffic lanes.</li>
        <p className="linepage-text">The list doesn’t end here. If you want to benefit from line painting and enhance the look of your property, connect with our experts today!</p>
      </div>
      <div className="right-container">
        <img src="/images/LinePainting.jpeg" alt="Sealcoating Image" className="page-image" />
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

export default LinePainting;
