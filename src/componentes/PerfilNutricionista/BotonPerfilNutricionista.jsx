import React from "react";
import MancuernaBlanco from "../../assets/imagens/MancuernaBlanco.png";
import "./BotonPerfilNutricionista.css";

const BotonPerfilNutricionista = () => {
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

export default BotonPerfilNutricionista;
