import React from "react";
import Fecha from "../img/Flecha.png";
import "./BuscadorUsuarioAsignar.css";

const BuscadorUsuario = () => {
  return (
    <div className="BuscadorUsuAsig">
      <div className="BuscadorUsuAsigTexto">
        <img src={Fecha} alt="" />
        <p>RUTINA ASIGNAR</p>
      </div>
      <div className="BuscadorUsuAsigimagen">
        <input
          type="text"
          placeholder="Buscar..."
          name="query"
          class="search-input"
        />
      </div>
    </div>
  );
};

export default BuscadorUsuario;
