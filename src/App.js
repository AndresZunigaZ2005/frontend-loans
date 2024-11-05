// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/login/login';
import SolicitudPrestamo from './components/solicitudPrestamo/SolicitudPrestamo';
import EmpleadoPOST from './components/empleado/EmpleadoPOST';
import SucursalCRUD from './components/sucursal/SucursalCRUD';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrestamoCRUD from './components/prestamo/PrestamoCRUD';
import Sidebar from './components/mainApp/Sidebar'; 
import EmpleadoList from './components/empleado/EmpleadoList';
import AuditoriaUsuario from './components/auditoriaUsuario/AuditoriaUsuarioForm';
import EmpleadoCRUD from './components/empleado/EmpleadoCRUD';
import Navbar from './components/mainApp/Navbar';
import Pago from "./components/Pago/Pago";
import Reportes from "./components/Reportes/Reportes"; // Importa el nuevo componente de la barra superior

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Agrega la barra superior aquí */}
        <Sidebar /> {/* Mantén el Sidebar a la izquierda */}
        <div className="content"> {/* Para mantener el contenido separado */}
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<h2><EmpleadoPOST/></h2>} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/crud-empleado" element={<EmpleadoCRUD />} />
            <Route path="/lista-empleados" element={<EmpleadoList />} />
            <Route path="/crud-sucursal" element={<SucursalCRUD />} />
            <Route path="/crud-prestamo" element={<PrestamoCRUD />} />
            <Route path="/auditoria-usuario" element={<AuditoriaUsuario/>}/>
            <Route path="/pago" element={<Pago/>}/>
            <Route path="/reportes" element={<Reportes/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;