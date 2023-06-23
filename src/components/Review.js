import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaGoogle, FaStar } from 'react-icons/fa';
import Avatar from 'react-avatar';
import './Review.css';

const ReviewPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Aden Idrees",
      date: "June 3, 2023",
      title: 'Great product!',
      rating: 5,
      text: 'The crew showed up as promised and did an excellent job on the sites requested at our location. They were all very polite, worked well, hard and professionally! Would recommend to anyone.',
    },
    {
      id: 2,
      name: "Nate Cereghino",
      date: "June 3, 2023",
      title: 'Not bad, but could be better.',
      rating: 5,
      text: 'Professional, easy to deal with. quality workmanship. Highly recommended',
    },
    {
      id: 3,
      name: "Chase Morgan",
      date: "June 3, 2023",
      title: 'Not bad, but could be better.',
      rating: 5,
      text: 'Great result, all staff were professional and the end result was fantastic. A good crew.',
    },
    {
      id: 4,
      name: "Dominic Giosso",
      date: "June 3, 2023",
      title: 'Great product!',
      rating: 5,
      text: 'SealTech Pavement is a company with the absolutely best quality work and customer service out there. The professionalism you will see from every person on their team is exactly what you\’re looking for in a contractor and rare to find these days.I would highly recommend SealTech to anyone looking to have have asphalt maintenance work done! You won’t be disappointed.',
    },
    {
      id: 5,
      name: "Samuel Johnson",
      date: "June 3, 2023",
      title: 'Not bad, but could be better.',
      rating: 5,
      text: 'John and the team at SealTech did a great job! They worked around our schedule so we could still operate while the work was being done. They were professional to work with and the final product looks amazing!',
    },
    {
      id: 6,
      name: "John Alexander",
      date: "June 3, 2023",
      title: 'Not bad, but could be better.',
      rating: 5,
      text: 'John\'s team did excellent work on very high-end Condo Site. This site has particularly challenging edging on the roadway to driveway transitions. The attention to detail and results speak for themselves. I will be working with them again.',
    },
    // Add more reviews here
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedReviewIds, setExpandedReviewIds] = useState([]);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < reviews.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const toggleExpandReview = (reviewId) => {
    if (expandedReviewIds.includes(reviewId)) {
      setExpandedReviewIds(expandedReviewIds.filter((id) => id !== reviewId));
    } else {
      setExpandedReviewIds([...expandedReviewIds, reviewId]);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Container className='review-container' style={{ marginBottom: '80px', position: 'relative', bottom: 200, marginTop: '0px', paddingTop: 100, paddingBottom: 100, paddingRight: 60, paddingLeft: 60 }}>
      <center>
        <h1 style={{ marginBottom: 30, fontWeight: 'bolder' }}>What Clients Say About Us</h1>
      </center>
      <Row className={isMobile ? 'review-row-mobile' : 'review-row'}>
        {reviews.slice(startIndex, endIndex + 1).map((review) => (
          <Col md={4} key={review.id}>
            <Card className='review-card'>
              <Card.Body>
                <Card.Title>
                  <Avatar
                    name={review.name}
                    round={true}
                    size="48"
                    className="profile-pic"
                  />
                  <div style={{ position: "relative", left: 60 }}>{review.name}</div>
                </Card.Title>
                <FaGoogle style={{ position: 'absolute', top: 10, right: 10 }} />
                <Card.Subtitle style={{ position: "relative", left: 60, fontSize: 12 }} className="mb-3 text-muted">{review.date}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </Card.Subtitle>
                <Card.Text className={`card-text-content ${expandedReviewIds.includes(review.id) ? 'expanded' : ''}`}>
                  {review.text}
                </Card.Text>
                {review.text.length > 70 && (
                  <button className="read-more-button" onClick={() => toggleExpandReview(review.id)}>
                    {expandedReviewIds.includes(review.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
        {!isMobile && reviews.length > 1 && (
          <>
            <Col md={4} className="d-flex justify-content-start">
              {startIndex > 0 && (
                <div className="arrow-icon" onClick={handlePrev}>
                  <FaArrowLeft size={30} />
                </div>
              )}
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              {endIndex < reviews.length - 1 && (
                <div className="arrow-icon" onClick={handleNext}>
                  <FaArrowRight size={30} />
                </div>
              )}
            </Col>
          </>
        )}
      </Row>
      {isMobile && reviews.length > 1 && (
        <Row className="arrow-row">
          <Col xs={6} className="d-flex justify-content-start">
            {startIndex > 0 && (
              <div className="arrow-icon" onClick={handlePrev}>
                <FaArrowLeft />
              </div>
            )}
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            {endIndex < reviews.length - 1 && (
              <div className="arrow-icon" onClick={handleNext}>
                <FaArrowRight />
              </div>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ReviewPage;
