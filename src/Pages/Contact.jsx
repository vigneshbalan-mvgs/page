import { Container, Form, Button } from 'react-bootstrap';
const ContactPage = () => {
  return (
    <Container className='mt-5 pt-5 app-container text-white'>
      <h1 className='mt-5 pt-5 '>Contact Us For More Offers</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          <br />
        </Form.Group>

        <Button variant="primary" type="submit" href='/'className='mt-5 btn-secondary'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
