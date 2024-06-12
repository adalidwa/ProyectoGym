import React from 'react';
import './GrupodeBotones.css';
import { NavLink } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="button-group">
        <NavLink className={'navegacion'} to = '/instruccion'>
        <button className="button">Instrucciones</button>
        </NavLink>
        <NavLink className={'navegacion'} to = '/zona'>
        <button className="button">Zona</button>
        </NavLink>
        <NavLink className={'navegacion'} to = '/equipo'>
        <button className="button">Equipo</button>
        </NavLink>
      <div className="indicator"></div>

    </div>
  );
};

export default ButtonGroup;