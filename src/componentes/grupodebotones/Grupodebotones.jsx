import React from 'react';
import './GrupodeBotones.css';

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="button">Instrucciones</button>
      <button className="button">Zona</button>
      <button className="button">Equipo</button>
      <div className="indicator"></div>
    </div>
  );
};

export default ButtonGroup;