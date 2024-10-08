import React, { useState } from 'react';

const MunicipioCRUD = () => {
    const [nombre, setNombre] = useState('');
    const [municipios, setMunicipios] = useState([]);

    const handleAddMunicipio = (e) => {
        e.preventDefault();
        const nuevoMunicipio = { id: Date.now(), nombre }; // Genera un ID único simple
        setMunicipios([...municipios, nuevoMunicipio]);
        setNombre(''); // Limpia el campo
    };

    return (
        <div>
            <h2>Agregar Municipio</h2>
            <form onSubmit={handleAddMunicipio}>
                <label>
                    Nombre:
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Agregar Municipio</button>
            </form>
            <h2>Lista de Municipios</h2>
            <ul>
                {municipios.map(m => <li key={m.id}>{m.nombre}</li>)}
            </ul>
        </div>
    );
};

export default MunicipioCRUD;