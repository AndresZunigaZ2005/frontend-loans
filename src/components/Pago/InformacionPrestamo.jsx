// src/components/InformacionPrestamo.js

import React from 'react';

const InformacionPrestamo = ({ idPrestamo, totalPrestado, totalAbonado, deudaActual }) => {
    return (
        <div className="informacionPrestamo">
            <label>Préstamo: {idPrestamo}</label>
            <div className="infoRow">
                <label>Total Prestado:</label>
                <span>{totalPrestado}</span>
            </div>
            <div className="infoRow">
                <label>Total Abonado:</label>
                <span>{totalAbonado}</span>
            </div>
            <div className="infoRow">
                <label>Deuda actual:</label>
                <span>{deudaActual}</span>
            </div>
        </div>
    );
};

export default InformacionPrestamo;
