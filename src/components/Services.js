import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Services() {
  return (
    <Container style={{height: "100vh"}}>
      <h1 className="text-center my-5">Our Services</h1>

      <div className="row">
        <div className="col-md-4">
          <h3 className="text-center">Sealcoating</h3>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sem non nisl porttitor aliquam. Mauris ac vestibulum enim, eu hendrerit lorem.
              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <h3 className="text-center">Crack Filling</h3>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sem non nisl porttitor aliquam. Mauris ac vestibulum enim, eu hendrerit lorem.
              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <h3 className="text-center">Line Painting</h3>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sem non nisl porttitor aliquam. Mauris ac vestibulum enim, eu hendrerit lorem.
              </Card.Text>
              <Button variant="warning" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Services;
