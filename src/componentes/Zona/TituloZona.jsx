import React from 'react';
import './EstiloZona.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function TituloZona () {
  return (
    <div>
      <div className="title">REMOS CON MANCUERNAS</div>
      <img  className="image"src={barradeinstruccion} alt="" />
    </div>
  );
};

export default TituloZona;