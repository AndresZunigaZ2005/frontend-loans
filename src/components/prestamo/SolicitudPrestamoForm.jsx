import React, { useState } from 'react';
import './solicitudPrestamoStyles.css'; // Importamos los estilos

const SolicitudPrestamoForm = ({ onSearch }) => {
  const [cedula, setCedula] = useState('');
  const [solicitudId, setSolicitudId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ cedula, solicitudId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar Solicitud de Préstamo</h2>
      <label>
        Cédula del Empleado:
        <input
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          placeholder="Buscar por cédula"
        />
      </label>
      <label>
        ID de la Solicitud:
        <input
          type="text"
          value={solicitudId}
          onChange={(e) => setSolicitudId(e.target.value)}
          placeholder="Buscar por ID de solicitud"
        />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SolicitudPrestamoForm;
