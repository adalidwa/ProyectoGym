import React from 'react';
import './ClasesCircuitos.css';
import { NavLink } from 'react-router-dom';

const Circuitos = (props) => {
  const users=props.producto
  console.log(users)
  return (
    <div className="circuitos">
      <div className="espacio-libre">
        <img className="ImagenClases"src={users.Img} alt="Circuitos" />
        <h2 className='TituloClases'>{users.NombreCurso}</h2>
        <p className='Dias'>🗓️ {users.Dias} </p>
          <h3>🔴{users.Espacio}</h3>
          <p>{users.Pregunta}</p>
          <p>{users.Descripcion}¡
          </p>
          <NavLink to={`/Reservas?id=${users.id}`}>
          <button className="btn-ver">Ver👀</button>
          </NavLink>
          
      </div>

    
    </div>
  );
};

export default Circuitos;
