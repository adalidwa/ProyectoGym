import React from "react";
import Fecha from "../img/Flecha.png";
import "./Titulo.css";

const BuscadorUsuario = () => {
  return (
    <div className="titulo">
      <div className="tituloimagen">
        <img src={Fecha} alt="" />
        <p>EJERCICIOS</p>
      </div>
    </div>
  );
};

export default BuscadorUsuario;
