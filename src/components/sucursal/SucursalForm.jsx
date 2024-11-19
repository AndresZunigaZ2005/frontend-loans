import React, { useState, useEffect } from 'react';

const SucursalForm = ({ onSubmit, sucursal }) => {
    const [nombre, setNombre] = useState(sucursal ? sucursal.nombre : '');
    const [departamentoId, setDepartamentoId] = useState(
        sucursal && sucursal.municipio ? sucursal.municipio.departamento_id : ''
    );
    const [municipioId, setMunicipioId] = useState(
        sucursal ? sucursal.municipio_id : ''
    );
    const [municipios, setMunicipios] = useState([]);
    const [municipiosFiltrados, setMunicipiosFiltrados] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Cargar departamentos y municipios al cargar el componente
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch departamentos
                const depResponse = await fetch('http://localhost:5000/sucursales/obtener_departamentos');
                if (!depResponse.ok) throw new Error('Error al cargar los departamentos');
                const depData = await depResponse.json();

                // Fetch municipios
                const munResponse = await fetch('http://localhost:5000/sucursales/obtener_municipios');
                if (!munResponse.ok) throw new Error('Error al cargar los municipios');
                const munData = await munResponse.json();

                setDepartamentos(depData);
                setMunicipios(munData);

                // Filtrar municipios si ya hay un departamento seleccionado
                if (departamentoId) {
                    const filtrados = munData.filter(
                        (municipio) => municipio.departamento_id === parseInt(departamentoId)
                    );
                    setMunicipiosFiltrados(filtrados);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filtrar municipios cuando se selecciona un departamento
    useEffect(() => {
        if (departamentoId) {
            const filtrados = municipios.filter(
                (municipio) => municipio.departamento_id === parseInt(departamentoId)
            );
            setMunicipiosFiltrados(filtrados);
        } else {
            setMunicipiosFiltrados([]);
        }
    }, [departamentoId, municipios]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, municipio_id: municipioId });
    };

    if (loading) return <p>Cargando...</p>;
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
                    {departamentos.map((departamento) => (
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
                    {municipiosFiltrados.map((municipio) => (
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