import React from 'react';
import './CrackFilling.css'; // import your custom styles here

function CrackFilling() {
  return (
    <div className="page-container">
      <div className="left-container">
        <center>
        <h1 className="page-title">Crack Filling</h1></center>
        <p className="crackpage-text">Cracks on an asphalt pavement are visually unappealing, but more importantly, they can be dangerous. Crack sealing is the process of filling cracks in asphalt with a hot rubberized crack sealer to repair the cracks and prolong the life of your asphalt pavement. The crack sealer is heated and then applied to the crack’s walls and on top of the cracked pavement to create an airtight seal.</p>
        <p className="crackpage-text">We use high-quality, heat-applied sealants that are specifically designed for commercial grade sealing applications. These sealants have a low viscosity and can penetrate even the smallest cracks, providing excellent adhesion to the pavement surface. Our sealants are also flexible and durable, and able to withstand temperature changes and heavy traffic loads</p>
        <h2 className="page-subtitle">Shield Seals Crack Fill Process</h2>
        <h3 className="page-list">Step 1: Assessment and Quotation</h3>
        <p className="crackpage-text">Our team of experts will visit your location to assess the condition of the pavement and identify any cracks that need to be sealed. We use specialized equipment to determine the extent of the damage and whether crack sealing is the best solution. Once the assessment is complete, we provide you with a detailed quotation outlining the scope of work and associated costs.</p>
        <h3 className="page-list">Step 2: Routing and Debris Clearing</h3>
        <p className="crackpage-text">The next step involves using a high torque marathon carbide-tip crack router to create a clean and uniform channel in each eligible crack. This process ensures that the sealant will properly adhere to the pavement surface and provide an effective barrier against water infiltration. Our team also removes any debris from the crack to ensure the sealant can fully penetrate the void.</p>
        <h3 className="page-list">Step 3: Sealing and Finishing</h3>
        <p className="crackpage-text">After routing and debris clearing, we apply the sealant using a mobile material applicator to ensure precise and consistent filling of each crack. We then use a strike-off shoe to level the sealant, resulting in a neat and uniform finish. This process ensures that all cracks are properly bonded and provides a long joint life, reducing the likelihood of future cracks or pavement damage.</p>
        
      </div>
      <div className="right-container">
        <img src="/images/crackfilling.jpeg" alt="Sealcoating Image" className="page-image" />
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

export default CrackFilling;
