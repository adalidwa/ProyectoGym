import React from 'react';
import './EstiloPuente.css';
import puentegluteo from '../../assets/imagenes/Puentegluteo.png'; 
import Titulo from './TituloTextoPuente.jsx';
import Cabecera from '../encabezado/Cabecera.jsx';

function Estilo (){
  return (
    <>
       <Cabecera/>
    <div className="container">
    <img  className="imagepuente"src={puentegluteo} alt="" />
    <Titulo/>



    </div>
    </>

  );
};

export default Estilo;