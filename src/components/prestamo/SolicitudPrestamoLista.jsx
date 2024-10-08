import React from 'react';
import './solicitudPrestamoStyles.css'; // Importamos los estilos

const SolicitudPrestamoLista = ({ solicitudes, onChangeEstado }) => {
  return (
    <table className="solicitud-lista">
      <thead>
        <tr>
          <th>ID Solicitud</th>
          <th>Cédula Empleado</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {solicitudes.map((solicitud) => (
          <tr key={solicitud.id}>
            <td>{solicitud.id}</td>
            <td>{solicitud.cedula}</td>
            <td>{solicitud.estado}</td>
            <td>
              <select
                value={solicitud.estado}
                onChange={(e) => onChangeEstado(solicitud.id, e.target.value)}
              >
                <option value="PENDIENTE">Pendiente</option>
                <option value="APROBADO">Aprobado</option>
                <option value="RECHAZADO">Rechazado</option>
              </select>
              {solicitud.estado === 'APROBADO' && (
                <button className="alerta" onClick={() => alert('Crear préstamo automáticamente')}>
                  Crear Préstamo
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolicitudPrestamoLista;
