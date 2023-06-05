import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import "./CrackFilling.css"

const CrackFilling = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState('/images/crackfilling.jpeg'); // Default selected image

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form data to your backend or API
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Notes:', notes);
    // After submitting the form data, you can clear the state variables
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setNotes('');
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Container className="sealcoat-container">
      <Row>
        <Col>
          <h1 style={{marginTop:"100px", marginBottom:'50px'}} className="text-center sealcoat-title">Crack Filling</h1>
        </Col>
      </Row>
      <Row style={{marginBottom: "100px"}}>
        <Col xs={12} md={7}>
          <Image style={{borderRadius:'40px',border: "5px solid #ec5d24", marginBottom:"20px"}} src={selectedImage} alt="Image" fluid />
          <p className="crackpage-text">Cracks on an asphalt pavement are visually unappealing, but more importantly, they can be dangerous. Crack sealing is the process of filling cracks in asphalt with a hot rubberized crack sealer to repair the cracks and prolong the life of your asphalt pavement. The crack sealer is heated and then applied to the crack’s walls and on top of the cracked pavement to create an airtight seal.</p>
        <p className="crackpage-text">We use high-quality, heat-applied sealants that are specifically designed for commercial grade sealing applications. These sealants have a low viscosity and can penetrate even the smallest cracks, providing excellent adhesion to the pavement surface. Our sealants are also flexible and durable, and able to withstand temperature changes and heavy traffic loads</p>
        <h2 className="page-subtitle">Shield Seals Crack Fill Process</h2>
        <h3 className="page-list">Step 1: Assessment and Quotation</h3>
        <p className="crackpage-text">Our team of experts will visit your location to assess the condition of the pavement and identify any cracks that need to be sealed. We use specialized equipment to determine the extent of the damage and whether crack sealing is the best solution. Once the assessment is complete, we provide you with a detailed quotation outlining the scope of work and associated costs.</p>
        <h3 className="page-list">Step 2: Routing and Debris Clearing</h3>
        <p className="crackpage-text">The next step involves using a high torque marathon carbide-tip crack router to create a clean and uniform channel in each eligible crack. This process ensures that the sealant will properly adhere to the pavement surface and provide an effective barrier against water infiltration. Our team also removes any debris from the crack to ensure the sealant can fully penetrate the void.</p>
        <h3 className="page-list">Step 3: Sealing and Finishing</h3>
        <p className="crackpage-text">After routing and debris clearing, we apply the sealant using a mobile material applicator to ensure precise and consistent filling of each crack. We then use a strike-off shoe to level the sealant, resulting in a neat and uniform finish. This process ensures that all cracks are properly bonded and provides a long joint life, reducing the likelihood of future cracks or pavement damage.</p>
        
        </Col>
        <Col xs={12} md={5}>
          <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Sealcoating</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Crack Filling</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Line Painting</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <h2 style={{marginTop:"50px", marginBottom:'50px'}} className="text-center sealcoat-subtitle">Contact Us Today</h2>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNotes">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any additional notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    style={{borderRadius:"20px"}}
                  />
                </Form.Group>

                <Button style={{borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} className='contact-btn'  type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row style={{marginTop:"20px", height: "100%"}}>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer', border: selectedImage ==="/images/sealcoat.jpeg" && "3px solid #ec5d24" }}
                    src="/images/sealcoat.jpeg"
                    alt="Image 1"
                    fluid
                    onClick={() => handleImageClick('/images/sealcoat.jpeg')}
                  />
                </Col>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer',border: selectedImage ==="/images/crackfilling.jpeg" && "3px solid #ec5d24"}}
                    src="/images/crackfilling.jpeg"
                    alt="Image 2"
                    fluid
                    onClick={() => handleImageClick('/images/crackfilling.jpeg')}
                  />
                </Col>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer',border: selectedImage ==="/images/LinePainting.jpeg" && "3px solid #ec5d24"}}
                    src="/images/LinePainting.jpeg"
                    alt="Image 3"
                    fluid
                    onClick={() => handleImageClick('/images/LinePainting.jpeg')}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CrackFilling;
