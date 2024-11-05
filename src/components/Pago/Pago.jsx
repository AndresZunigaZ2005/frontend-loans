// src/components/FormularioPago.js

import React, { useState } from 'react';
import './FormularioPago.css'; // Asegúrate de importar el CSS
import InformacionPrestamo from './InformacionPrestamo'; // Importa el nuevo componente

const FormularioPago = () => {
    const [formData, setFormData] = useState({
        numeroPrestamo: '',
        idEmpleado: '',
        valorAPagar: '',
    });

    const [informacion, setInformacion] = useState({

        //TODO aca debemos sacar la info desde el back

        idPrestamo: 'xxxxxxx',
        totalPrestado: 'xxxxxx',
        totalAbonado: 'xxxxx',
        deudaActual: 'xxxxx',
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
            <h1>Ventana Pagos</h1>
            <InformacionPrestamo
                idPrestamo={informacion.idPrestamo}
                totalPrestado={informacion.totalPrestado}
                totalAbonado={informacion.totalAbonado}
                deudaActual={informacion.deudaActual}
            />
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

                    <div>
                        <label htmlFor="idEmpleado">ID Empleado:</label>
                        <input
                            type="text"
                            id="idEmpleado"
                            name="idEmpleado"
                            value={formData.idEmpleado}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="valorAPagar">Valor a Pagar:</label>
                        <input
                            type="number"
                            id="valorAPagar"
                            name="valorAPagar"
                            value={formData.valorAPagar}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Pagar cuota</button>
                </form>

            </div>
        </div>
    );
};

export default FormularioPago;
