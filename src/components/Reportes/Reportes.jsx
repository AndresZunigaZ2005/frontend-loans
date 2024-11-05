// src/components/FormularioPago.js

import React, { useState } from 'react';


const FormularioPago = () => {
    const [formData, setFormData] = useState({
        numeroPrestamo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar los datos al backend o procesarlos
    };

    return (
        <div className="contenedorGeneralPago">
            <h1>Ventana Reportes</h1>
            <div className="contenido">
                <form onSubmit={handleSubmit} className="formularioPago">
                    <div>
                        <label htmlFor="numeroPrestamo">Número de Préstamo:</label>
                        <input
                            type="text"
                            id="numeroPrestamo"
                            name="numeroPrestamo"
                            value={formData.numeroPrestamo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Generar reporte</button>
                </form>

            </div>
        </div>
    );
};

export default FormularioPago;
