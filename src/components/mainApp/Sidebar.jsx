// src/components/Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Asegúrate de crear el archivo de estilos
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="sidebar-header">
        <i className="fas fa-bars"></i> {/* Ícono de tres rayas */}
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/solicitud-prestamo">Solicitud de Préstamo</Link>
        </li>
        <li>
          <Link to="/crud-empleado">CRUD del Empleado</Link>
        </li>
        <li>
          <Link to="/crud-sucursal">CRUD de Sucursal</Link>
        </li>
        <li>
          <Link to="/crud-prestamo">Crear Préstamo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;