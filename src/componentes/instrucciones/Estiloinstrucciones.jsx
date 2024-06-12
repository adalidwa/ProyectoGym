import React from 'react';
import './Estiloinstrucciones.css';
import puentegluteo from '../../assets/imagenes/remosconmancuernas.png'; 
import Titulo from './Tituloinstrucciones.jsx';
import Cabecera from '../encabezado/Cabecera.jsx';
import Button from '../BotonIniciar/BotonIniciar.jsx';
import Grupodebotones from '../grupodebotones/Grupodebotones.jsx'
import Textoinstrucciones from './Textoinstrucciones.jsx';


function Estiloinstrucciones(){
  return (
    <>
       <Cabecera/>
    <div className="containerinstruccion">
    <img  className='imageninstruccion'src={puentegluteo} alt="" />
    <Titulo/>
    <Grupodebotones/>
    <Textoinstrucciones/>
    <Button/>
    </div>
    </>

  );
};

export default Estiloinstrucciones;