import React from "react";
import './Head.css';
import Bell_Notification from '/src/assets/icons/Bell_Notification.png';
import menu from '/src/assets/icons/menu.png';

function Head() {
  return (
    <div className="contenedorCabecera">
      <h1 className="titulo">GYM CENTIMAXFIX</h1>
      <div className="contenedorBotonesCabecera">
        <button className="botonC">
          <img className="botonC" src={Bell_Notification} alt="" />
        </button>
        <button className="botonC">
          <img className="botonC" src={menu} alt="" />
        </button>
      </div>     
    </div>
  )
}


export default Head;