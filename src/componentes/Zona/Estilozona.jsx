import React from 'react';
import './EstiloZona.css';
import remosconmancuernas from '../../assets/imagenes/remosconmancuernas.png'; 
import Cabecera from '../encabezado/Cabecera.jsx';
import Titulo from './TituloZona.jsx';
import Grupobotones from '../grupodebotones/Grupodebotones.jsx';
import Zona from './ZonadelCuerpo.jsx';
import Botoniniciar from '../BotonIniciar/BotonIniciar.jsx';

function EstiloZona(){
  return (
    <>
       <Cabecera/>
    <div className="containerzona">
    <img  className="image"src={remosconmancuernas} alt="" />
    <Titulo/>
    <Grupobotones/>
    <Zona/>
    <Botoniniciar/>

    </div>
    </>

  );
};

export default EstiloZona;