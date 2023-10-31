
import { Container, Form, Button } from 'react-bootstrap';
const SignupPage = () => {
  

  return (
    <div className='mt-5 pt-5 mb-5 pb-5'>
      <Container>
        <h1 className="text-white mb-4 ">Sign Up for Cricket Lovers</h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label className="text-white">Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter a password" />
          </Form.Group>

          <Button variant="primary" type="submit" className='mt-5 mb-5 btn-secondary'>
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignupPage;
