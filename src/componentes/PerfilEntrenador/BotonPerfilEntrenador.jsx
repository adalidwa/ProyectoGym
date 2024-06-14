import React from "react";
import MancuernaBlanco from "../../assets/imagens/MancuernaBlanco.png";
import "../PerfilEntrenador/BotonPerfilEntrenador.css";
import { NavLink } from "react-router-dom";

const BotonPerfilEntrenador = () => {
  return (
    <div className="PerfilBoton">
      <div className="PerfilBotontexto">
        <NavLink to="/Calificacion">
        <button>
            <img src={MancuernaBlanco} alt="" />
            <h4>CALIFICAR</h4>
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BotonPerfilEntrenador;
