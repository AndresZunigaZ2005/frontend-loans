import React from 'react';

const SucursalLista = ({ sucursales, onEdit, onDelete }) => {
    return (
        <table className="sucursal-lista">
            <thead>
                <tr>
                    <th>Departamento</th> {/* Nueva columna Departamento */}
                    <th>Municipio</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sucursales.map((sucursal) => (
                    <tr key={sucursal.id}>
                        <td>{sucursal.municipio.departamento.nombre}</td> {/* Mostrar el nombre del departamento */}
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