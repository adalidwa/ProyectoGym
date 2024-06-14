import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PerfilProfecionalEntrenador from "./PerfilProfecionalEntrenador.jsx";
import NameFotoEntrenador from './NameFotoEntrenador.jsx';
import ContactosEntrenador from './ContactosEntrenador.jsx';
import BotonPerfilEntrenador from './BotonPerfilEntrenador.jsx';
import useStore from '../../assets/store/useStore';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx';
import './PerfilEntrenador.css';
import useEntre from '../../assets/store/useEntre.js'
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

  const ide = useStore((state) => state.id);
  const state = useStore.getState();
  console.log(state.id);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

 
  useEntre.setState({ id: entrenador.id})
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion  id={ide}/>
      <div className="cuadro">
        
        <div className='Perfil'>
            <NameFotoEntrenador nombre={`${entrenador.firstname} ${entrenador.lastname}`} avatar={entrenador.avatar} />
            <PerfilProfecionalEntrenador descripcion={entrenador.jobDescripto} />
            <ContactosEntrenador number={entrenador.number} email={entrenador.email} />
            <BotonPerfilEntrenador />
        </div>
        
      </div>
    </div>
  );
}

export default PerfilEntrenador;
