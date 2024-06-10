import React from 'react';
import './TituloEquipo.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function TituloEquipo () {
  return (
    <div>
      <div className="title">REMOS CON MANCUERNAS</div>
      <img  className="image"src={barradeinstruccion} alt="" />
    </div>
  );
};

export default TituloEquipo;