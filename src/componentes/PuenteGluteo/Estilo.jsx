import React from 'react';
import './Estilo.css';
import puentegluteo from '../../assets/imagenes/Puentegluteo.png'; 
import Titulo from './Titulo.jsx';
import Texto from './Texto.jsx';
import Barranav from '../encabezado/Barranav.jsx';

function Estilo (){
  return (
    <>
       <Barranav/>
    <div className="container">
    <img  className="image"src={puentegluteo} alt="" />
    <Titulo/>
    <Texto/>


    </div>
    </>

  );
};

export default Estilo;