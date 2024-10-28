import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
} from '@mui/material';
import './AuditoriaUsuario.css';

const AuditoriaUsuario = () => {
  const [auditoriaUsuarios, setAuditoriaUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Método para realizar la búsqueda en el servidor
  const fetchFilteredAuditoriaUsuarios = async (search) => {
    try {
      setIsSearching(true);
      const response = await axios.get(`/api/auditoriaUsuarios?search=${search}`);
      setAuditoriaUsuarios(response.data);
    } catch (error) {
      console.error('Error fetching filtered auditoriaUsuarios', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Usamos useEffect para detectar cambios en searchTerm con debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm) {
        fetchFilteredAuditoriaUsuarios(searchTerm);
      } else {
        // Aquí puedes llamar a la función para cargar todos los registros si el campo está vacío
        fetchFilteredAuditoriaUsuarios('');
      }
    }, 500); // 500ms de delay

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

  return (
    <div className="auditoria-container">
      <h2>Auditoría del Usuario</h2>
      <TextField
        label="Filtrar por usuario"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-field"
      />
      {isSearching && <p>Cargando resultados...</p>}
      <TableContainer component={Paper}>
        <Table aria-label="auditoria table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fecha Entrada</TableCell>
              <TableCell>Hora Entrada</TableCell>
              <TableCell>Fecha Salida</TableCell>
              <TableCell>Hora Salida</TableCell>
              <TableCell>Usuario</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditoriaUsuarios.map((auditoria) => (
              <TableRow key={auditoria.id}>
                <TableCell>{auditoria.id}</TableCell>
                <TableCell>{formatDate(auditoria.fechaEntrada)}</TableCell>
                <TableCell>{formatTime(auditoria.fechaEntrada)}</TableCell>
                <TableCell>{formatDate(auditoria.fechaSalida)}</TableCell>
                <TableCell>{formatTime(auditoria.fechaSalida)}</TableCell>
                <TableCell>{auditoria.usuario.nombre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuditoriaUsuario;