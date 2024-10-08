import React, { useState } from 'react';

const MunicipioForm = ({ onSubmit, municipio }) => {
    const [nombre, setNombre] = useState(municipio ? municipio.nombre : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre });
    };

    return (
        <form className="municipio-form" onSubmit={handleSubmit}>
            <h2>{municipio ? 'Editar Municipio' : 'Agregar Municipio'}</h2>
            <label>
                Nombre:
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default MunicipioForm;
