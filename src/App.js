import logo from './logo.svg';
import './App.css';
import LogIn from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <LogIn />
    </div>
=======
import PrestamoCRUD from './components/prestamo/PrestamoCRUD';
import Sidebar from './components/mainApp/Sidebar'; 
import EmpleadoList from './components/empleado/EmpleadoList';
import AuditoriaUsuario from './components/auditoriaUsuario/AuditoriaUsuarioForm';
import EmpleadoCRUD from './components/empleado/EmpleadoCRUD';
import Navbar from './components/mainApp/Navbar'; // Importa el nuevo componente de la barra superior
import BankHome from './components/mainApp/BankHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Agrega la barra superior aquí */}
        <Sidebar /> {/* Mantén el Sidebar a la izquierda */}
        <div className="content"> {/* Para mantener el contenido separado */}
          <Routes>
            <Route path="/" element={<BankHome/>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<EmpleadoPOST/>} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/crud-empleado" element={<EmpleadoCRUD />} />
            <Route path="/lista-empleados" element={<EmpleadoList />} />
            <Route path="/crud-sucursal" element={<SucursalCRUD />} />
            <Route path="/crud-prestamo" element={<PrestamoCRUD />} />
            <Route path="/auditoria-usuario" element={<AuditoriaUsuario/>}/>
          </Routes>
        </div>
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
