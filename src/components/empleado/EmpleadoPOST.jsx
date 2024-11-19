import React, { useState } from 'react';
import { 
  MDBBtn, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBInput, 
  MDBIcon 
} from 'mdb-react-ui-kit';

function EmpleadoPOST() {  
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    cargo: '',
    nivel: '',
    email: '',
    contrasena: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/empleado/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Empleado creado exitosamente: ' + JSON.stringify(result));
      } else {
        alert('Error al crear empleado: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al conectar con el servidor.');
    }
  };

  return (
    <MDBContainer fluid>      
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>        
        <MDBCardBody>          
          <MDBRow>            
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>              
              <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro de Empleado</h1>              
              {/* Cédula */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="cedula" className="form-label">Cédula</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="id-card me-3" size='lg' />                  
                  <MDBInput id='cedula' type='text' className='w-100' value={formData.cedula} onChange={handleChange} />                
                </div>              
              </div>              
              {/* Nombre */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="nombre" className="form-label">Nombre</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="user me-3" size='lg' />                  
                  <MDBInput id='nombre' type='text' className='w-100' value={formData.nombre} onChange={handleChange} />                
                </div>              
              </div>              
              {/* Cargo */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="cargo" className="form-label">Cargo</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="briefcase me-3" size='lg' />                  
                  <select className="form-select w-100" id="cargo" value={formData.cargo} onChange={handleChange}>                    
                    <option value="">Seleccione un cargo</option>                    
                    <option value="OPERATIVO">OPERATIVO</option>                    
                    <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>                    
                    <option value="EJECUTIVO">EJECUTIVO</option>                    
                    <option value="OTRO">OTRO</option>                  
                  </select>                
                </div>              
              </div>              
              {/* Nivel */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="nivel" className="form-label">Nivel</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="users-cog me-3" size='lg' />                  
                  <select className="form-select w-100" id="nivel" value={formData.nivel} onChange={handleChange}>                    
                    <option value="">Seleccione un nivel</option>                    
                    <option value="ADMINISTRADOR">Administrador</option>                    
                    <option value="TESORERIA">Tesorería</option>                    
                    <option value="EMPLEADO">Empleado</option>                  
                  </select>                
                </div>              
              </div>              
              {/* Email */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="email" className="form-label">Email</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="envelope me-3" size='lg' />                  
                  <MDBInput id='email' type='email' className='w-100' value={formData.email} onChange={handleChange} />                
                </div>              
              </div>              
              {/* Contraseña */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">                
                <label htmlFor="contrasena" className="form-label">Contraseña</label>                
                <div className="d-flex flex-row align-items-center w-100">                  
                  <MDBIcon fas icon="lock me-3" size='lg' />                  
                  <MDBInput id='contrasena' type='password' className='w-100' value={formData.contrasena} onChange={handleChange} />                
                </div>              
              </div>              
              {/* Botón de registro */}
              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Registrar</MDBBtn>            
            </MDBCol>            
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>              
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />            
            </MDBCol>          
          </MDBRow>        
        </MDBCardBody>      
      </MDBCard>    
    </MDBContainer>  
  );
}

export default EmpleadoPOST;