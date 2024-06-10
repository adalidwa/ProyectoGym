import React from 'react';
import './Tituloinstrucciones.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function Tituloinstrucciones () {
  return (
    <div>
      <div className="title">REMOS CON MANCUERNAS</div>

      <img  className="image"src={barradeinstruccion} alt="" />
    </div>
  );
};

export default Tituloinstrucciones;