import React, { useEffect, useState } from 'react';
import './solicitudPrestamoStyles.css'; // Importamos los estilos

const SolicitudPrestamoLista = ({ onChangeEstado }) => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSolicitudes = async () => {
            try {
                const response = await fetch('http://localhost:5000/prestamos/obtener-solicitudes');
                if (!response.ok) {
                    throw new Error('Error al obtener las solicitudes');
                }
                const data = await response.json();
                setSolicitudes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSolicitudes();
    }, []);

    if (loading) {
        return <p>Cargando solicitudes...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <table className="solicitud-lista">
            <thead>
            <tr>
                <th>ID Solicitud</th>
                <th>Cédula Empleado</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {solicitudes.map((solicitud) => (
                <tr key={solicitud.id}>
                    <td>{solicitud.id}</td>
                    <td>{solicitud.cedula}</td>
                    <td>{solicitud.estado}</td>
                    <td>
                        <select
                            value={solicitud.estado}
                            onChange={(e) => onChangeEstado(solicitud.id, e.target.value)}
                        >
                            <option value="PENDIENTE">Pendiente</option>
                            <option value="APROBADO">Aprobado</option>
                            <option value="RECHAZADO">Rechazado</option>
                        </select>
                        {solicitud.estado === 'APROBADO' && (
                            <button
                                className="alerta"
                                onClick={() => alert(`Crear préstamo para la solicitud ID: ${solicitud.id}`)}
                            >
                                Crear Préstamo
                            </button>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default SolicitudPrestamoLista;