import React from 'react';
import './EstiloEquipo.css';
import Equipo from './Equipo.jsx';
import remosconmancuernas from '../../assets/imagenes/remosconmancuernas.png'; 
import barradeinstruccion from '../../assets/iconos/Barra.png'; 
import BotonIniciar from '../BotonIniciar/BotonIniciar.jsx';
import Titulo from './TituloEquipo.jsx';
import Cabecera from '../encabezado/Cabecera.jsx';
import Grupobotones from '../grupodebotones/Grupodebotones.jsx'

function EstiloEquipo(){
  return (
    <>
       <Cabecera/>
    <div className="containerEquipo">
    <img  className="imagenEjercicio"src={remosconmancuernas} alt="" />
    <Titulo/>
    <Grupobotones/>
    <Equipo/>
    <img  className="imagenesEquipobanca"src={barradeinstruccion} alt="" />
    <Equipo/>
    <img  className="imagenesEquipobanca"src={barradeinstruccion} alt="" />

    <BotonIniciar/>

   


    </div>
    </>

  );
};

export default EstiloEquipo;