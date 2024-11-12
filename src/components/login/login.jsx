import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

function LogIn() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
<<<<<<< Updated upstream
      <Form style={{ width: '300px' }}>
=======
      <Form style={{ width: '600px' }}>
        <h1>Inicio de Sesión</h1>
>>>>>>> Stashed changes
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign In
        </Button>

        <Row className="text-center">
          <Col>
            <span>Not a member? <Link to="/register" className="text-decoration-none">Register</Link></span>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default LogIn;