import React, { useState } from 'react';
import './solicitudPrestamoStyles.css'; // Importamos los estilos

const SolicitudPrestamoForm = ({ onSuccess, onError }) => {
    const [montoSolicitado, setMontoSolicitado] = useState('');
    const [periodoMeses, setPeriodoMeses] = useState('');
    const [empleadoId, setEmpleadoId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const solicitudData = {
            montoSolicitado: parseFloat(montoSolicitado),
            periodoMeses: parseInt(periodoMeses, 10),
            empleado_id: parseInt(empleadoId, 10),
        };

        try {
            const response = await fetch('http://localhost:5000/prestamos/crear-solicitud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(solicitudData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al crear la solicitud');
            }

            const data = await response.json();
            onSuccess(data); // Llamar al manejador de éxito
        } catch (err) {
            console.error('Error al crear la solicitud:', err.message);
            onError(err.message); // Llamar al manejador de error
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Solicitud de Préstamo</h2>
            <label>
                Monto Solicitado:
                <input
                    type="number"
                    step="0.01"
                    value={montoSolicitado}
                    onChange={(e) => setMontoSolicitado(e.target.value)}
                    placeholder="Ingrese el monto solicitado"
                    required
                />
            </label>
            <label>
                Período en Meses:
                <input
                    type="number"
                    value={periodoMeses}
                    onChange={(e) => setPeriodoMeses(e.target.value)}
                    placeholder="Ingrese el período en meses"
                    required
                />
            </label>
            <label>
                ID del Empleado:
                <input
                    type="number"
                    value={empleadoId}
                    onChange={(e) => setEmpleadoId(e.target.value)}
                    placeholder="Ingrese el ID del empleado"
                    required
                />
            </label>
            <button type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Crear Solicitud'}
            </button>
        </form>
    );
};

export default SolicitudPrestamoForm;
