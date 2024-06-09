import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PerfilProfecionalEntrenador from "./PerfilProfecionalEntrenador.jsx";
import NameFotoEntrenador from './NameFotoEntrenador.jsx';
import ContactosEntrenador from './ContactosEntrenador.jsx';
import BotonPerfilEntrenador from './BotonPerfilEntrenador.jsx';
import './PerfilEntrenador.css';

const PerfilEntrenador = () => {
  const { id } = useParams();
  const [entrenador, setEntrenador] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntrenador = async () => {
      try {
        const response = await fetch(`https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEntrenador(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEntrenador();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='Perfil'>
        <NameFotoEntrenador nombre={`${entrenador.firstname} ${entrenador.lastname}`} avatar={entrenador.avatar} />
        <PerfilProfecionalEntrenador descripcion={entrenador.jobDescripto} />
        <ContactosEntrenador number={entrenador.number} email={entrenador.email} />
        <BotonPerfilEntrenador />
    </div>
  );
}

export default PerfilEntrenador;
