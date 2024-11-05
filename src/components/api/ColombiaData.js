import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeoNamesAPIComponent = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState('');
  const username = 'afz06'; // Reemplaza con tu usuario de GeoNames

  // Obtener los departamentos (admin1) de Colombia
  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await axios.get(
          `http://api.geonames.org/childrenJSON?geonameId=3686110&username=${username}`
        );
        setDepartamentos(response.data.geonames);
      } catch (error) {
        console.error('Error al obtener los departamentos:', error);
      }
    };
    fetchDepartamentos();
  }, []);

  // Obtener los municipios (admin2) del departamento seleccionado
  useEffect(() => {
    if (selectedDepartamento) {
      const fetchMunicipios = async () => {
        try {
          const response = await axios.get(
            `http://api.geonames.org/childrenJSON?geonameId=${selectedDepartamento}&username=${username}`
          );
          setMunicipios(response.data.geonames);
        } catch (error) {
          console.error('Error al obtener los municipios:', error);
        }
      };
      fetchMunicipios();
    }
  }, [selectedDepartamento]);

  // Manejar el cambio de departamento
  const handleDepartamentoChange = (e) => {
    setSelectedDepartamento(e.target.value);
  }}