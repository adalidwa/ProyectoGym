import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PerfilProfecionalNutricionista from "./PerfilProfecionalNutricionista.jsx";
import NameFotoNutricionista from './NameFotoNutricionista.jsx';
import ContactosNutricionista from './ContactosNutricionista.jsx';
import BotonPerfilEntrenador from './BotonPerfilNutricionista.jsx';
import useStore from '../../assets/store/useStore.js';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx';
import './PerfilNutricionista.css';

const PerfilNutricionista = () => {
  const { id } = useParams();
  const [entrenador, setEntrenador] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntrenador = async () => {
      try {
        const response = await fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/nutricionistas/${id}`);
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


  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

 

  return (
    <div className="contenedor_usuario">
      <BarraNavegacion  id={ide}/>
      <div className="cuadro">
        
        <div className='Perfil'>
            <NameFotoNutricionista nombre={`${entrenador.firstname} ${entrenador.lastname}`} avatar={entrenador.avatar} />
            <PerfilProfecionalNutricionista descripcion={entrenador.jobDescripto} />
            <ContactosNutricionista number={entrenador.number} email={entrenador.email} />
            <BotonPerfilEntrenador />
        </div>
        
      </div>
    </div>
  );
}

export default PerfilNutricionista;
