import React from 'react';
import './EstiloEquipo.css';
import remosconmancuernas from '../../assets/imagenes/remosconmancuernas.png'; 
import mancuernas from '../../assets/imagenes/mancuernas.png';
import banca from '../../assets/imagenes/banca.png';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

import Titulo from './TituloEquipo.jsx';
import Barranav from '../encabezado/Barranav.jsx';

function EstiloEquipo(){
  return (
    <>
       <Barranav/>
    <div className="container">
    <img  className="image"src={remosconmancuernas} alt="" />
    <Titulo/>
    <img className="imagenmancuernas" src={mancuernas} alt='' />
    <div className="nombre">Mancuernas</div>
    <img  className="imagen"src={barradeinstruccion} alt="" />
    <img classNmae='imagenbanco'src={banca}alt=''/>
    <img  className="imagenes"src={barradeinstruccion} alt="" />

   


    </div>
    </>

  );
};

export default EstiloEquipo;