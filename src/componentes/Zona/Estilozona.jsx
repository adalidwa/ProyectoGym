import React from 'react';
import './EstiloZona.css';
import remosconmancuernas from '../../assets/imagenes/remosconmancuernas.png'; 
import hombros from '../../assets/imagenes/hombros.png';
import brazos from '../../assets/imagenes/brazos.png';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 
import musculos from '../../assets/imagenes/musculo.png';
import Titulo from './TituloZona.jsx';
import Barranav from '../encabezado/Barranav.jsx';

function EstiloEquipo(){
  return (
    <>
       <Barranav/>
    <div className="container">
    <img  className="image"src={remosconmancuernas} alt="" />
    <Titulo/>
    <img className="imagenhombros" src={hombros} alt='' />
    <div className="nombre">Hombros</div>
    <img  className="imagen"src={barradeinstruccion} alt="" />
    <img classNmae='imagenbrazos'src={brazos}alt=''/>
    <img  className="imagenes"src={barradeinstruccion} alt="" />
    <img classNmae='imagenmusculos'src={musculos}alt=''/>
    <img  className="imagenes"src={barradeinstruccion} alt="" />


   


    </div>
    </>

  );
};

export default EstiloEquipo;