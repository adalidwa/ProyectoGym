import React, { useState } from "react";
import './Cabecera.css';
import Bell_Notification from '/src/assets/icons/Bell_Notification.png';
import menu from '/src/assets/icons/menu.png';
import TimelineNovedades from '../TimelineNovedades/TimelineNovedades';

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

