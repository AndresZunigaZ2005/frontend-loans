import React, { useState } from 'react';

const EmpleadoForm = ({ onSubmit, empleado, municipios = [], sucursales = [] }) => {
    const [nombre, setNombre] = useState(empleado ? empleado.nombre : '');
    const [login, setLogin] = useState(empleado ? empleado.login : '');
    const [contrasena, setContrasena] = useState(empleado ? empleado.contrasena : '');
    const [cargo, setCargo] = useState(empleado ? empleado.cargo : '');
    const [cedula, setCedula] = useState(empleado ? empleado.cedula : '');
    const [municipioId, setMunicipioId] = useState(empleado ? empleado.municipio : '');
    const [sucursalId, setSucursalId] = useState(empleado ? empleado.sucursal : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, login, contrasena, cargo, cedula, municipio: municipioId, sucursal: sucursalId });
    };

    return (
        <form className="empleado-form" onSubmit={handleSubmit}>
            <h2>{empleado ? 'Editar Empleado' : 'Agregar Empleado'}</h2>
            <label>
                Nombre:
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Login:
                <input 
                    type="text" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Contraseña:
                <input 
                    type="password" 
                    value={contrasena} 
                    onChange={(e) => setContrasena(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Cargo:
                <select 
                    value={cargo} 
                    onChange={(e) => setCargo(e.target.value)} 
                    required
                >
                    <option value="">Seleccione...</option>
                    <option value="OPERARIO">Operario</option>
                    <option value="ADMINISTRATIVO">Administrativo</option>
                    <option value="EJECUTIVO">Ejecutivo</option>
                    <option value="OTRO">Otro</option>
                </select>
            </label>
            <label>
                Cédula:
                <input 
                    type="text" 
                    value={cedula} 
                    onChange={(e) => setCedula(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Municipio:
                <select 
                    value={municipioId} 
                    onChange={(e) => setMunicipioId(e.target.value)} 
                    required
                >
                    <option value="">Seleccione...</option>
                    {Array.isArray(municipios) && municipios.map(municipio => (
                        <option key={municipio.id} value={municipio.id}>{municipio.nombre}</option>
                    ))}
                </select>
            </label>
            <label>
                Sucursal:
                <select 
                    value={sucursalId} 
                    onChange={(e) => setSucursalId(e.target.value)} 
                    required
                >
                    <option value="">Seleccione...</option>
                    {Array.isArray(sucursales) && sucursales.map(sucursal => (
                        <option key={sucursal.id} value={sucursal.id}>{sucursal.nombre}</option>
                    ))}
                </select>
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default EmpleadoForm;
