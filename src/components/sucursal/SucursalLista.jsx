import React from 'react';

const SucursalLista = ({ sucursales, onEdit, onDelete }) => {
    return (
        <table className="sucursal-lista">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Municipio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sucursales.map((sucursal) => (
                    <tr key={sucursal.id}>
                        <td>{sucursal.nombre}</td>
                        <td>{sucursal.municipio.nombre}</td>
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