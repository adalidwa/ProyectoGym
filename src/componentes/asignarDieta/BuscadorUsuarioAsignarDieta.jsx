import React from "react";
import Flecha from "../img/Flecha.png";
import "./BuscadorUsuarioAsignarDieta.css";

const BuscadorUsuarioAsignarDieta = () => {
  return (
    <div className="BuscadorUsuAsigdi">
      <div className="BuscadorUsuAsigTextodi">
        <img src={Flecha} alt="" />
        <p>DIETA A ASIGNAR</p>
      </div>
      <div className="BuscadorUsuAsigimagendi">
        <input placeholder="Buscar..."></input>
        <select className="dropdown1" defaultValue="JUAN">
          <option value="JUAN">Desayuno</option>
          <option value="JUAN">Almuerzo</option>
          <option value="JUAN">Cena</option>
        </select>
      </div>
    </div>
  );
};

export default BuscadorUsuarioAsignarDieta;
