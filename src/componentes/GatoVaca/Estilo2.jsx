import React from 'react';
import './Estilo2.css';
import puentegluteo from '../../assets/imagenes/GatoVaca.png'; 
import Titulo from './Titulo2.jsx';
import Texto from './Texto2.jsx';
import Barranav from '../encabezado/Barranav.jsx';

function Estilo2(){
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

export default Estilo2;