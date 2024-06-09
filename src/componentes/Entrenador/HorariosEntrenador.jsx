import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./HorariosEntrenador.css";
const HorarioEntrenador = () => {
  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await fetch(
          "https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores"
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
      <h1>Entrenadores</h1>
      {entrenadores.map(entrenador => (
        <NavLink to={`/entrenador/${entrenador.id}`} key={entrenador.id}>
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

export default HorarioEntrenador;
