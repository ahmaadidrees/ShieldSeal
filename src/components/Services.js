import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Services() {
  return (
    <div style={{background:"khaki", position: 'relative', bottom: '215px'}}>
    <Container style={{height: "100vh",position: 'relative', top: '115px' }}>
      <h1 className="text-center my-5">Our Services</h1>

      <div className="row">
        <div className="col-md-4">
          <h3 className="text-center">Sealcoating</h3>
          <Card>
            <Card.Img variant="top" src='/Images/sealcoat.jpeg' />
            <Card.Body>
              <Card.Text>
              Sealcoating is the application of a polymer based coating to asphalt pavement, to help shield it from the damaging effects of rain, high-weight vehicles, and other harmful elements such as oil and gas spills.              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <h3 className="text-center">Crack Filling</h3>
          <Card>
            <Card.Img variant="top" src='/Images/crackfilling.jpeg' />
            <Card.Body>
              <Card.Text>
              Crack sealing is the process of filling cracks in asphalt with a hot rubberized crack sealer to repair the cracks and prolong the life of your asphalt pavement.              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <h3 className="text-center">Line Painting</h3>
          <Card>
            <Card.Img variant="top" src="/Images/LinePainting.jpeg" />
            <Card.Body>
              <Card.Text>
              At Shield Seal we provide best in class line painting services to every kind of property owner, whether you're a small daycare or a large office park your satisfaction is our #1 priority.              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Services;
