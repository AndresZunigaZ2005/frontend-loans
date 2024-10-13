import React, { useState } from "react";
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Link } from "@mui/material";
import './EmpleadoList.css'; // Importa el archivo CSS

const EmpleadoList = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [salario, setSalario] = useState(0);
    const [login, setLogin] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [cargo, setCargo] = useState("");
    const [empleados, setEmpleados] = useState([
        { id: 1, nombre: "Juan Pérez", salario: 3000, login: "jperez",cargo: "OPERATIVO" ,contrasenia: "1234" },
        { id: 2, nombre: "María López", salario: 3500, login: "mlopez", cargo: "EJECUTIVO" ,contrasenia: "abcd" }
    ]);


    const handleEdit = (index) => {
        console.log(`Editando empleado en la posición ${index}`);
    };

    const handleDelete = (index) => {
        console.log(`Eliminando empleado en la posición ${index}`);
    };

    return (
        <Box className="container">
            {/* Tabla a la derecha */}
            <TableContainer component={Paper} className="tableContainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Salario</TableCell>
                            <TableCell>Login</TableCell>
                            <TableCell>Cargo</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {empleados.map((empleado, index) => (
                            <TableRow key={index}>
                                <TableCell>{empleado.id}</TableCell>
                                <TableCell>{empleado.nombre}</TableCell>
                                <TableCell>${empleado.salario}</TableCell>
                                <TableCell>{empleado.login}</TableCell>
                                <TableCell>{empleado.cargo}</TableCell>
                                <TableCell>
                                    <Link href="#" onClick={() => handleEdit(index)} sx={{ marginRight: 2 }}>
                                        Editar
                                    </Link>
                                    <Link href="#" onClick={() => handleDelete(index)}>
                                        Eliminar
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EmpleadoList;
