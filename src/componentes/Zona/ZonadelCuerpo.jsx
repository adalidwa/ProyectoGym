import React from 'react';
import './ZonadelCuerpo.css';; 
import hombros from '../../assets/imagenes/hombros.png';
import brazos from '../../assets/imagenes/brazos.png';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function EstiloEquipo(){
  return (
    <>
    <img className="imagenhombros" src={hombros} alt='' />
    <div className="nombre">Hombros</div>
    <img className='imagenbrazos'src={brazos}alt=''/>
    <img  className="imagenes"src={barradeinstruccion} alt="" />


    </>

  );
};

export default EstiloEquipo;