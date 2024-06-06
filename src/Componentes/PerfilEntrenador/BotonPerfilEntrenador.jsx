import React from "react";
import MancuernaBlanco from "../img/MancuernaBlanco.png";
import "../PerfilEntrenador/BotonPerfilEntrenador.css";

const BotonPerfilEntrenador = () => {
  return (
    <div className="PerfilBoton">
      <div className="PerfilBotontexto">
        <button>
            <img src={MancuernaBlanco} alt="" />
            <h4>CALIFICAR</h4>
        </button>
      </div>
    </div>
  );
};

export default BotonPerfilEntrenador;
