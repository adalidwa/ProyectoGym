import React from 'react';
import './Equipo.css';
import mancuernas from '../../assets/imagenes/mancuernas.png';
import banca from '../../assets/imagenes/banca.png';


function EquipmentList() {
  return (
  <div className="Equipo">
  <img  className="imagenmancuernas"src={mancuernas} alt="" />
  <p>Mancuernas</p>
</div>
  )
  }


export default EquipmentList;