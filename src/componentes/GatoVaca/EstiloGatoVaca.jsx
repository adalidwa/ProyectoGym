import React from 'react';
import './EstiloGatoVaca.css';
import puentegluteo from '../../assets/imagenes/GatoVaca.png'; 
import Titulo from './TituloTextoGatoVaca.jsx';
import Cabecera from '../encabezado/Cabecera.jsx';

function Estilo2(){
  return (
    <>
    <Cabecera/>
    <div className="contenedorgato">
    <img  className="imagengato"src={puentegluteo} alt="" />
    <Titulo/>



    </div>
    </>

  );
};

export default Estilo2;