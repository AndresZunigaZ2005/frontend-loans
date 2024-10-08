import React, { useState } from 'react';

const SucursalForm = ({ onSubmit, sucursal, municipios }) => {
    const [nombre, setNombre] = useState(sucursal ? sucursal.nombre : '');
    const [municipioId, setMunicipioId] = useState(sucursal ? sucursal.municipio : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, municipio: municipioId });
    };

    return (
        <form className="sucursal-form" onSubmit={handleSubmit}>
            <h2>{sucursal ? 'Editar Sucursal' : 'Agregar Sucursal'}</h2>
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
                Municipio:
                <select 
                    value={municipioId} 
                    onChange={(e) => setMunicipioId(e.target.value)} 
                    required
                >
                    <option value="">Seleccione...</option>
                    {municipios.map(municipio => (
                        <option key={municipio.id} value={municipio.id}>{municipio.nombre}</option>
                    ))}
                </select>
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default SucursalForm;
