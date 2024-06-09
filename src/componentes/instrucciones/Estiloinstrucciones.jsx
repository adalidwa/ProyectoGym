import React from 'react';
import './Estiloinstrucciones.css';
import puentegluteo from '../../assets/imagenes/remosconmancuernas.png'; 
/*import Titulo from './Titulo2.jsx';*/
import Texto from './Textoinstrucciones.jsx';
import Barranav from '../encabezado/Barranav.jsx';

function Estiloinstrucciones(){
  return (
    <>
       <Barranav/>
    <div className="container">
    <img  className="image"src={puentegluteo} alt="" />
    <Titulo/>
    <Texto/>
    /*<Boton/>*/


    </div>
    </>

  );
};

export default Estiloinstrucciones;