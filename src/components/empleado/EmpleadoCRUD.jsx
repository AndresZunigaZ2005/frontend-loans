import React, { useState } from 'react';
import EmpleadoForm from './EmpleadoForm';
import EmpleadoLista from './EmpleadoLista';
import './empleadoStyles.css';

const EmpleadoCRUD = () => {
    const [empleados, setEmpleados] = useState([]);
    const [currentEmpleado, setCurrentEmpleado] = useState(null);

    const handleAddOrEdit = (empleado) => {
        if (currentEmpleado) {
            setEmpleados(
                empleados.map((e) => (e.id === currentEmpleado.id ? { ...e, ...empleado } : e))
            );
        } else {
            setEmpleados([...empleados, { ...empleado, id: Date.now() }]);
        }
        setCurrentEmpleado(null);
    };

    const handleEdit = (empleado) => {
        setCurrentEmpleado(empleado);
    };

    const handleDelete = (id) => {
        setEmpleados(empleados.filter((e) => e.id !== id));
    };

    return (
        <div className="empleado-crud">
            <EmpleadoForm onSubmit={handleAddOrEdit} empleado={currentEmpleado} />
            <EmpleadoLista empleados={empleados} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default EmpleadoCRUD;
