import React, { useState } from "react";
import EmpleadoPOST from "./EmpleadoPOST"; // Componente para el formulario de empleados
import EmpleadoList from "./EmpleadoList"; // Componente para la lista de empleados

const EmpleadoCRUD = () => {
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: "Juan Pérez", salario: 3000, login: "jperez", cargo: "OPERATIVO", contrasenia: "1234" },
    { id: 2, nombre: "María López", salario: 3500, login: "mlopez", cargo: "EJECUTIVO", contrasenia: "abcd" }
  ]);

  const handleAddEmpleado = (nuevoEmpleado) => {
    setEmpleados([...empleados, { id: empleados.length + 1, ...nuevoEmpleado }]);
  };

  const handleEditEmpleado = (index, empleadoEditado) => {
    const nuevosEmpleados = empleados.map((empleado, i) =>
      i === index ? empleadoEditado : empleado
    );
    setEmpleados(nuevosEmpleados);
  };

  const handleDeleteEmpleado = (index) => {
    const nuevosEmpleados = empleados.filter((_, i) => i !== index);
    setEmpleados(nuevosEmpleados);
  };

  return (
    <div>
      {/* Formulario para agregar empleado */}
      <EmpleadoPOST onAddEmpleado={handleAddEmpleado} />

      {/* Lista de empleados con opción de editar/eliminar */}
      <EmpleadoList
        empleados={empleados}
        onEditEmpleado={handleEditEmpleado}
        onDeleteEmpleado={handleDeleteEmpleado}
      />
    </div>
  );
};

export default EmpleadoCRUD;
