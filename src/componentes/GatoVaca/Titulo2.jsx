import React from 'react';
import './Titulo2.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function Titulo2 () {
  return (
    <div>
      <div className="title">GATO VACA</div>
      <div className="subtitle">Instrucciones</div>
      <img  className="image"src={barradeinstruccion} alt="" />
    </div>
  );
};

export default Titulo2;