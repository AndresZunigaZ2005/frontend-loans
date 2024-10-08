import React, { useState } from 'react';

const SucursalCRUD = () => {
    const [nombre, setNombre] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [sucursales, setSucursales] = useState([]);

    // Simulación de datos de municipios (deberías obtener esto de tu backend)
    const municipios = [
        { id: '1', nombre: 'Municipio 1' },
        { id: '2', nombre: 'Municipio 2' },
        { id: '3', nombre: 'Municipio 3' },
    ];

    const handleAddSucursal = (e) => {
        e.preventDefault();
        const nuevaSucursal = { id: Date.now(), nombre, municipio }; // Genera un ID único simple
        setSucursales([...sucursales, nuevaSucursal]);
        setNombre(''); // Limpia el campo
        setMunicipio(''); // Limpia el campo
    };

    return (
        <div>
            <h2>Agregar Sucursal</h2>
            <form onSubmit={handleAddSucursal}>
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
                    <select value={municipio} onChange={(e) => setMunicipio(e.target.value)} required>
                        <option value="">Selecciona un municipio</option>
                        {municipios.map(m => (
                            <option key={m.id} value={m.id}>{m.nombre}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Agregar Sucursal</button>
            </form>
            <h2>Lista de Sucursales</h2>
            <ul>
                {sucursales.map(s => (
                    <li key={s.id}>
                        {s.nombre} - Municipio: {municipios.find(m => m.id === s.municipio)?.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SucursalCRUD;