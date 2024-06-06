import React from "react";
import './Head.css';

import barras from '/src/assets/icons/3barritas.png';

function Head() {
  return (
    <div className="contenedor">
      <h1 className="titulo">GYM CENTIMAXFIX</h1>
      <img className="barritas " src={barras} alt="" />
    </div>
  )
}


export default Head;