import React from 'react';
import './Estiloinstrucciones.css';
import puentegluteo from '../../assets/imagenes/remosconmancuernas.png'; 
import Titulo from './Tituloinstrucciones.jsx';
import Texto from './Textoinstrucciones.jsx';
import Barranav from '../encabezado/Barranav.jsx';
import Button from './botoniniciar.jsx';


function Estiloinstrucciones(){
  return (
    <>
       <Barranav/>
    <div className="container">
    <img  className="image"src={puentegluteo} alt="" />
    <Titulo/>
    <Texto/>
    <Button/>



    </div>
    </>

  );
};

export default Estiloinstrucciones;