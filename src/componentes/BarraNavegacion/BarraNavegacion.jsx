import React from "react";
import "./BarraNavegacion.css";
import barras from "../../assets/icons/3barritas.png";
const BarraNavegacion = () => {
  return (
    <div className="barraDeNavegacion">
      <div className="contenedor">
        <h1 className="titulo">GYM CENTIMAXFIX</h1>
        <img className="barritas " src={barras} alt="" />
      </div>
    </div>
  );
};

export default BarraNavegacion;
