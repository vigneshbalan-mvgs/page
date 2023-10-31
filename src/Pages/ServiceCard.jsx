
import { Col, Card } from 'react-bootstrap';

const ServiceCard = ({ image, title, description }) => {
  return (
    <Col md={4} className="d-flex mb-5">
      <Card className="service-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="service-title">{title}</Card.Title>
          <Card.Text className="service-description">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;

