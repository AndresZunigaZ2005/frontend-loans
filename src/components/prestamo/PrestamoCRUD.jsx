// SolicitudPrestamoCRUD.js
import React, { useState } from 'react';
import SolicitudPrestamoForm from './SolicitudPrestamoForm';
import SolicitudPrestamoLista from './SolicitudPrestamoLista';

const PrestamoCRUD = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  const handleSearch = ({ cedula, solicitudId }) => {
    // Simulación de búsqueda (puedes conectar esto con el backend)
    const resultados = [
      { id: 1, cedula: '123456789', estado: 'PENDIENTE' },
      { id: 2, cedula: '987654321', estado: 'APROBADO' },
    ];

    setSolicitudes(
      resultados.filter(
        (s) =>
          (cedula && s.cedula === cedula) ||
          (solicitudId && s.id === parseInt(solicitudId))
      )
    );
  };

  const handleChangeEstado = (id, nuevoEstado) => {
    setSolicitudes(
      solicitudes.map((solicitud) =>
        solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
      )
    );
  };

  return (
    <div>
      <SolicitudPrestamoForm onSearch={handleSearch} />
      <SolicitudPrestamoLista solicitudes={solicitudes} onChangeEstado={handleChangeEstado} />
    </div>
  );
};

export default PrestamoCRUD;
