import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const loginData = {
      email,
      contrasena: password, // 'contrasena' es la clave esperada por tu API
    };

    try {
      const response = await fetch('http://localhost:5000/empleados/login', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Error al iniciar sesión');
      }

      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);
      // Aquí puedes redirigir o manejar la sesión
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form style={{ width: '600px' }} onSubmit={handleSubmit}>
          <h1>Inicio de Sesión</h1>

          {error && <p className="text-danger">{error}</p>}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </Form.Group>

          <Form.Group className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check type="checkbox" label="Recuérdame" />
            <a href="#!" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
          </Form.Group>

          <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>

          <Row className="text-center">
            <Col>
            <span>
              ¿No tienes cuenta?{' '}
              <a href="#!" className="text-decoration-none">Regístrate</a>
            </span>
            </Col>
          </Row>
        </Form>
      </Container>
  );
}

export default LogIn;