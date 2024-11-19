import React, { useEffect, useState } from 'react';

const SucursalLista = ({ onEdit, onDelete }) => {
    const [sucursales, setSucursales] = useState([]); // Estado para almacenar las sucursales
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Función para obtener sucursales del backend
        const fetchSucursales = async () => {
            try {
                const response = await fetch('http://localhost:5000/sucursales/obtener_todos');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                setSucursales(data); // Actualizar el estado con los datos recibidos
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Detener el indicador de carga
            }
        };

        fetchSucursales();
    }, []); // Se ejecuta solo una vez al montar el componente

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <table className="sucursal-lista">
            <thead>
            <tr>
                <th>Departamento</th>
                <th>Municipio</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {sucursales.map((sucursal) => (
                <tr key={sucursal.id}>
                    <td>{sucursal.municipio.departamento.nombre}</td>
                    <td>{sucursal.municipio.nombre}</td>
                    <td>{sucursal.nombre}</td>
                    <td>
                        <button onClick={() => onEdit(sucursal)}>Editar</button>
                        <button onClick={() => onDelete(sucursal.id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default SucursalLista;
