import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AuditoriaUsuario.css';

const AuditoriaUsuario = () => {
  const [auditoriaUsuarios, setAuditoriaUsuarios] = useState([]);

  useEffect(() => {
    const fetchAuditoriaUsuarios = async () => {
      try {
        const response = await axios.get('/api/auditoriaUsuarios');
        setAuditoriaUsuarios(response.data);
      } catch (error) {
        console.error('Error fetching auditoriaUsuarios', error);
      }
    };

    fetchAuditoriaUsuarios();
  }, []);

  return (
    <div className="auditoria-container">
      <h2>Auditoría del Usuario</h2>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha Entrada</th>
              <th>Fecha Salida</th>
            </tr>
          </thead>
          <tbody>
            {auditoriaUsuarios.map(auditoria => (
              <tr key={auditoria.id}>
                <td>{auditoria.id}</td>
                <td>{auditoria.fechaEntrada}</td>
                <td>{auditoria.fechaSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img 
          src="/auditoria.jpg" 
          alt="Auditoría animada" 
          className="auditoria-image" 
        />
      </div>
    </div>
  );
};

export default AuditoriaUsuario;