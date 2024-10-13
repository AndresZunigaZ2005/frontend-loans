import React, { useState, useEffect } from 'react';
import SucursalForm from './SucursalForm';
import SucursalLista from './SucursalLista';
import './SucursalPage.css'; // Importar el archivo CSS

// Datos simulados para departamentos y municipios
const departamentosSimulados = [
    { id: 1, nombre: 'Antioquia' },
    { id: 2, nombre: 'Cundinamarca' },
    { id: 3, nombre: 'Valle del Cauca' }
];

const municipiosSimulados = [
    { id: 1, nombre: 'Medellín', departamentoId: 1 },
    { id: 2, nombre: 'Envigado', departamentoId: 1 },
    { id: 3, nombre: 'Bogotá', departamentoId: 2 },
    { id: 4, nombre: 'Cali', departamentoId: 3 },
    { id: 5, nombre: 'Palmira', departamentoId: 3 }
];

const SucursalPage = () => {
    const [sucursales, setSucursales] = useState([]);
    const [sucursalToEdit, setSucursalToEdit] = useState(null);
    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);

    useEffect(() => {
        setDepartamentos(departamentosSimulados);
        setMunicipios(municipiosSimulados);
    }, []);

    const handleAddOrUpdateSucursal = (newSucursal) => {
        if (sucursalToEdit) {
            setSucursales(sucursales.map(s => 
                s.id === sucursalToEdit.id ? { ...sucursalToEdit, ...newSucursal } : s
            ));
            setSucursalToEdit(null);
        } else {
            const nuevaSucursal = { ...newSucursal, id: sucursales.length + 1 };
            setSucursales([...sucursales, nuevaSucursal]);
        }
    };

    const handleEditSucursal = (sucursal) => {
        setSucursalToEdit(sucursal);
    };

    const handleDeleteSucursal = (id) => {
        setSucursales(sucursales.filter(s => s.id !== id));
    };

    return (
        <div className="sucursal-page">
            <h1>Gestión de Sucursales</h1>
            
            <SucursalForm 
                onSubmit={handleAddOrUpdateSucursal} 
                sucursal={sucursalToEdit} 
                departamentos={departamentos} 
                municipios={municipios} 
            />

            <div className="sucursal-lista-container"> {/* Aplicar clase CSS */}
                <SucursalLista 
                    sucursales={sucursales} 
                    onEdit={handleEditSucursal} 
                    onDelete={handleDeleteSucursal} 
                />
            </div>
        </div>
    );
};

export default SucursalPage;
