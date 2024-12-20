// src/components/Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="sidebar-header">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/solicitud-prestamo">
            <i className="fas fa-file-alt"></i> {/* Ícono de Solicitud de Préstamo */}
            {isOpen && <span>Solicitud Préstamo</span>}
          </Link>
        </li>
        <li>
          <Link to="/crud-sucursal">
            <i className="fas fa-building"></i> {/* Ícono de CRUD de Sucursal */}
            {isOpen && <span>CRUD de Sucursal</span>}
          </Link>
        </li>
        <li>
          <Link to="/crud-prestamo">
            <i className="fas fa-money-check-alt"></i> {/* Ícono de Crear Préstamo */}
            {isOpen && <span>Crear Préstamo</span>}
          </Link>
        </li>
        <li>
          <Link to="/auditoria-usuario">
            <i className="fa-solid fa-user-secret"></i>
            {isOpen && <span>Auditoria Usuario</span>}
          </Link>
        </li>
        <li>
          <Link to="/pago">
            <i className="fa-solid fa-credit-card"></i>
            {isOpen && <span>Realizar pagos</span>}
          </Link>
        </li>
        <li>
          <Link to="/reportes">
            <i className="fa-solid fa-file-alt"></i>
            {isOpen && <span>Reportes</span>}
          </Link>
        </li>
        <li>
          <Link to="/calculadora">
            <i className="fa-solid fa-calculator"></i>
            {isOpen && <span>Calculadora</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
