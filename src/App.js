// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Asegúrate de importar todo de react-router-dom
import './App.css';
import LogIn from './components/login/login';
import SolicitudPrestamo from './components/solicitudPrestamo/SolicitudPrestamo';
import EmpleadoCRUD from './components/empleado/EmpleadoCRUD';
import MunicipioCRUD from './components/municipio/MunicipioCRUD'; // Nuevo componente para municipios
import SucursalCRUD from './components/sucursal/SucursalCRUD'; // Nuevo componente para sucursales
import 'bootstrap/dist/css/bootstrap.min.css';
import PrestamoCRUD from './components/prestamo/PrestamoCRUD';
import Sidebar from './components/mainApp/Sidebar'; // Importa el Sidebar

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> {/* Incluye el Sidebar aquí */}
        <div className="content"> {/* Contenido principal */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">Inicio</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/solicitud-prestamo">Solicitud de Préstamo</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crud-empleado">CRUD del Empleado</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crud-municipio">CRUD de Municipio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crud-sucursal">CRUD de Sucursal</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crud-prestamo">Crear Préstamo</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/crud-empleado" element={<EmpleadoCRUD />} />
            <Route path="/crud-municipio" element={<MunicipioCRUD />} />
            <Route path="/crud-sucursal" element={<SucursalCRUD />} />
            <Route path="/crud-prestamo" element={<PrestamoCRUD />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
