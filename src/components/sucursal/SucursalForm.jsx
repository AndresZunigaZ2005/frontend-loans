import React, { useState, useEffect } from 'react';

const SucursalForm = ({ onSubmit, sucursal, municipios }) => {
    const [nombre, setNombre] = useState(sucursal ? sucursal.nombre : '');
    const [departamentoId, setDepartamentoId] = useState(sucursal ? sucursal.municipio.departamentoId : '');
    const [municipioId, setMunicipioId] = useState(sucursal ? sucursal.municipio.id : '');
    const [municipiosFiltrados, setMunicipiosFiltrados] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch departamentos al cargar el componente
    useEffect(() => {
        const fetchDepartamentos = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/sucursales/obtener_departamentos');
                if (!response.ok) {
                    throw new Error(`Error al obtener los departamentos: ${response.statusText}`);
                }
                const data = await response.json();
                setDepartamentos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartamentos();
    }, []);

    // Filtrar municipios cada vez que se selecciona un departamento
    useEffect(() => {
        if (departamentoId) {
            const municipiosDelDepartamento = municipios.filter(
                municipio => municipio.departamentoId === parseInt(departamentoId)
            );
            setMunicipiosFiltrados(municipiosDelDepartamento);
        } else {
            setMunicipiosFiltrados([]);
        }
    }, [departamentoId, municipios]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, municipio: municipioId });
    };

    if (loading) return <p>Cargando departamentos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <form className="sucursal-form" onSubmit={handleSubmit}>
            <h2>{sucursal ? 'Editar Sucursal' : 'Agregar Sucursal'}</h2>

            <label>
                Nombre:
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </label>

            <label>
                Departamento:
                <select
                    value={departamentoId}
                    onChange={(e) => setDepartamentoId(e.target.value)}
                    required
                >
                    <option value="">Seleccione un departamento...</option>
                    {departamentos.map(departamento => (
                        <option key={departamento.id} value={departamento.id}>
                            {departamento.nombre}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Municipio:
                <select
                    value={municipioId}
                    onChange={(e) => setMunicipioId(e.target.value)}
                    required
                    disabled={!departamentoId} // Deshabilitar si no hay departamento seleccionado
                >
                    <option value="">Seleccione un municipio...</option>
                    {municipiosFiltrados.map(municipio => (
                        <option key={municipio.id} value={municipio.id}>
                            {municipio.nombre}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">Guardar</button>
        </form>
    );
};

export default SucursalForm;