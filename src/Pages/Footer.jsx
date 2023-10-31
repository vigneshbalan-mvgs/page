
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
