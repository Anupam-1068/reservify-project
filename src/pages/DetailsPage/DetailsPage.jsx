import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

const DetailsPage = () => {
  const history = useHistory();
  const { id } = useParams(); // Assuming you have a parameter named 'id' in your route

  // Sample data, replace with your actual data retrieval logic
  const placeDetails = {
    id: 1,
    name: 'Sample Place',
    image: 'path_to_image',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timings: '9:00 AM - 6:00 PM', // Sample timings
  };

  const handleBookAppointment = () => {
    // Redirect to booking appointment form page
    history.push('/booking-appointment');
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Image src={placeDetails.image} fluid />
        </Col>
        <Col md={6}>
          <h2>{placeDetails.name}</h2>
          <p>{placeDetails.details}</p>
          <p>Timings: {placeDetails.timings}</p>
          <Button onClick={handleBookAppointment} variant="primary">
            Book Appointment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
