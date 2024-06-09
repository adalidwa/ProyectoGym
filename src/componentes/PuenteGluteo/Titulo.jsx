import React from 'react';
import './Titulo.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function Titulo () {
  return (
    <div>
      <div className="title">PUENTE DE GLÚTEO</div>
      <div className="subtitle">Instrucciones</div>
      <img  className="image"src={barradeinstruccion} alt="" />
    </div>
  );
};

export default Titulo;