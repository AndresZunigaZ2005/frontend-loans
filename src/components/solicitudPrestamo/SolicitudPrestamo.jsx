import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SolicitudPrestamo() {
  const [empleado, setEmpleado] = useState('');
  const [montoSolicitado, setMontoSolicitado] = useState('');
  const [periodoMeses, setPeriodoMeses] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario
    console.log({ empleado, montoSolicitado, periodoMeses });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Solicitud de Préstamo</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmpleado">
              <Form.Label>Empleado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del empleado"
                value={empleado}
                onChange={(e) => setEmpleado(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMontoSolicitado" className="mt-3">
              <Form.Label>Monto Solicitado</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el monto solicitado"
                value={montoSolicitado}
                onChange={(e) => setMontoSolicitado(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPeriodoMeses" className="mt-3">
              <Form.Label>Período (en meses)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el período en meses"
                value={periodoMeses}
                onChange={(e) => setPeriodoMeses(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Enviar Solicitud
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SolicitudPrestamo;