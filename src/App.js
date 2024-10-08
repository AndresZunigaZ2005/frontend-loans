import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Asegúrate de importar todo de react-router-dom
import './App.css';
import LogIn from './components/login/login';
import SolicitudPrestamo from './components/solicitudPrestamo/SolicitudPrestamo';
import EmpleadoCRUD from './components/empleado/EmpleadoCRUD';
import MunicipioCRUD from './components/municipio/MunicipioCRUD'; // Nuevo componente para municipios
import SucursalCRUD from './components/sucursal/SucursalCRUD'; // Nuevo componente para sucursales
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
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
                  <Link className="nav-link" to="/crud-municipio">CRUD de Municipio</Link> {/* Nueva ruta para municipios */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crud-sucursal">CRUD de Sucursal</Link> {/* Nueva ruta para sucursales */}
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
          <Route path="/crud-municipio" element={<MunicipioCRUD />} /> {/* Ruta para el CRUD de Municipio */}
          <Route path="/crud-sucursal" element={<SucursalCRUD />} /> {/* Ruta para el CRUD de Sucursal */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;