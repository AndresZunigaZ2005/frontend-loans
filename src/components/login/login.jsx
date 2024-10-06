import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function LogIn() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="d-flex justify-content-between align-items-center mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
          <a href="#!" className="text-decoration-none">Forgot password?</a>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign In
        </Button>

        <Row className="text-center">
          <Col>
            <span>Not a member? <a href="#!" className="text-decoration-none">Register</a></span>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default LogIn;
