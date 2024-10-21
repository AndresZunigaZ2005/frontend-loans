import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function EmpleadoPOST() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro de Empleado</h1>

              {/* Cédula */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="form1" className="form-label">Cédula</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="id-card me-3" size='lg'/>
                  <MDBInput id='form1' type='text' className='w-100'/>
                </div>
              </div>

              {/* Nombre */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="form2" className="form-label">Nombre</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput id='form2' type='text' className='w-100'/>
                </div>
              </div>

              {/* Cargo */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="cargo" className="form-label">Cargo</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="briefcase me-3" size='lg'/>
                  <select className="form-select w-100" id="cargo">
                    <option value="">Seleccione un cargo</option>
                    <option value="OPERATIVO">OPERATIVO</option>
                    <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                    <option value="EJECUTIVO">EJECUTIVO</option>
                    <option value="OTRO">OTRO</option>
                  </select>
                </div>
              </div>

              {/* Login */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="form3" className="form-label">Login</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="user-circle me-3" size='lg'/>
                  <MDBInput id='form3' type='text' className='w-100'/>
                </div>
              </div>

              {/* Contraseña */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="form4" className="form-label">Contraseña</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput id='form4' type='password' className='w-100'/>
                </div>
              </div>

              {/* Confirmar contraseña */}
              <div className="d-flex flex-column align-items-start mb-4 w-100">
                <label htmlFor="form5" className="form-label">Confirmar contraseña</label>
                <div className="d-flex flex-row align-items-center w-100">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput id='form5' type='password' className='w-100'/>
                </div>
              </div>

              {/* Botón de registro */}
              <MDBBtn className='mb-4' size='lg'>Registrar</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default EmpleadoPOST;