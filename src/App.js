// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LogIn from './components/login/login';
import SolicitudPrestamo from './components/solicitudPrestamo/SolicitudPrestamo';
import EmpleadoPOST from './components/empleado/EmpleadoPOST';
import SucursalCRUD from './components/sucursal/SucursalCRUD';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrestamoCRUD from './components/prestamo/PrestamoCRUD';
import Sidebar from './components/mainApp/Sidebar'; // Importa el nuevo componente
import EmpleadoList from './components/empleado/EmpleadoList';
import EmpleadoCRUD from './components/empleado/EmpleadoCRUD';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> {/* Agrega el Sidebar aquí */}
        <div className="content"> {/* Para mantener el contenido separado */}
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/crud-empleado" element={<EmpleadoCRUD />} />
            <Route path="/lista-empleados" element={<EmpleadoList />} />
            <Route path="/crud-sucursal" element={<SucursalCRUD />} />
            <Route path="/crud-prestamo" element={<PrestamoCRUD />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
