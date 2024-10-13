import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SolicitudPrestamo() {
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [empleado, setEmpleado] = useState('');
  const [montoSolicitado, setMontoSolicitado] = useState('');
  const [periodoMeses, setPeriodoMeses] = useState('');

  // Cargar los empleados desde la base de datos (simulado aquí con una API)
  useEffect(() => {
    // Simulación de llamada a API
    const cargarEmpleados = async () => {
      const empleados = await fetch('/api/empleados').then((res) => res.json());
      setListaEmpleados(empleados);
    };

    cargarEmpleados();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fechaSolicitud = new Date().toISOString(); // Fecha actual
    const estado = 'PENDIENTE';

    const solicitud = {
      empleado,
      montoSolicitado,
      periodoMeses,
      fechaSolicitud,
      estado,
    };

    // Aquí iría la lógica para enviar la solicitud
    console.log(solicitud);

    // Simulación de envío
    // fetch('/api/solicitudes', {
    //   method: 'POST',
    //   body: JSON.stringify(solicitud),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-md-center w-100">
        <Col md="6">
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center">Solicitud de Préstamo</h1>
            <Form.Group controlId="formEmpleado">
              <Form.Label>Empleado</Form.Label>
              <Form.Select
                value={empleado}
                onChange={(e) => setEmpleado(e.target.value)}
              >
                <option value="">Seleccione un empleado</option>
                {listaEmpleados.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.nombre}
                  </option>
                ))}
              </Form.Select>
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

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Enviar Solicitud
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SolicitudPrestamo;