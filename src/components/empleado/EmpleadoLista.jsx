import React from 'react';
import './empleadoStyles.css'; // Importa los estilos

const EmpleadoLista = ({ empleados, onEdit, onDelete }) => {
    return (
        <table className="empleado-lista">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Login</th>
                    <th>Cargo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.login}</td>
                        <td>{empleado.cargo}</td>
                        <td>
                            <button onClick={() => onEdit(empleado)}>Editar</button>
                            <button onClick={() => onDelete(empleado.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmpleadoLista;