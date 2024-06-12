import React, { useState } from "react";
import './Cabecera.css';
import Bell_Notification from '../../assets/iconos/Bell_Notification.png';
import menu from '../../assets/iconos/menu.png';


function Cabecera() {

  return (
    <div className="contenedorCabecera">
      <h1 className="titulo">GYM CENTIMAXFIX</h1>
      <div className="contenedorBotonesCabecera">
        <button className="BotonesCabecera">
          <img className="BotonesCabecera" src={Bell_Notification} alt="Bell Notification" />
        </button>
        <button className="BotonesCabecera">
          <img className="BotonesCabecera" src={menu} alt="Menu" />
        </button>
      </div>
    </div>
  );
}

export default Cabecera;

