import React from 'react';

const MunicipioLista = ({ municipios, onEdit, onDelete }) => {
    return (
        <table className="municipio-lista">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {municipios.map((municipio) => (
                    <tr key={municipio.id}>
                        <td>{municipio.nombre}</td>
                        <td>
                            <button onClick={() => onEdit(municipio)}>Editar</button>
                            <button onClick={() => onDelete(municipio.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MunicipioLista;
