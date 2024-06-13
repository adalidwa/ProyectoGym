import React from "react";
import Fecha from "../img/Flecha.png";
import "./BuscadorUsuarioAsignarDieta.css";

const BuscadorUsuarioAsignarDieta = () => {
  return (
    <div className="BuscadorUsuAsigdi">
      <div className="BuscadorUsuAsigTextodi">
        <img src={Fecha} alt="" />
        <p>DIETA ASIGNADA</p>
      </div>
      <div className="BuscadorUsuAsigimagendi">
        <input type="text"placeholder="Buscar..."/>
      </div>
    </div>
  );
};

export default BuscadorUsuarioAsignarDieta;
