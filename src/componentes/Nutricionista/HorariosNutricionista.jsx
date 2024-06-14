import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./HorariosNutricionista.css";
const HorariosNutricionista = () => {
  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await fetch(
          "https://6661a6e163e6a0189feaef7e.mockapi.io/nutricionistas"
        );
        const data = await response.json();
        setEntrenadores(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchEntrenadores();
  }, []);

  return (
    
    <div className='HorarioTitulo'>
      <h1>Nutricionistas</h1>
      {entrenadores.map(entrenador => (
        <NavLink to={`/Nutricionista/${entrenador.id}`} key={entrenador.id} className="navlink-no-under">
          <div className='Horario'>
            <div className='Imagen'>
              <img src={entrenador.avatar} alt={`${entrenador.firstname} ${entrenador.lastname}`} />
            </div>
            <div className='DatosHorario'>
              <h6>{`${entrenador.firstname} ${entrenador.lastname}`}</h6>
              <p>{entrenador.time}</p>
              <p>{entrenador.week}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HorariosNutricionista;
