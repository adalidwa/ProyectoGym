import React from "react";
import "./BarraDeNavegacionBotones.css";
import BuzonSugerencia from "../assets/BuzonSugerencias.png";
import Calendario from "../assets/Calendario.png";
import Mancuerna from "../assets/Mancuerna.png";
import Suplementos from "../assets/Suplementos.png";

const BarraDeNavegacionBotones = () => {
  return (
    <div className="BarraNavegacionBotones">
      <p>Principal</p>
      <div className="Barra">
        <div className="BarraBotonesImagenes">
          <img src={Mancuerna} alt="" />
          <img src={Suplementos} alt="" />
          <img src={Calendario} alt="" />
          <img src={BuzonSugerencia} alt="" />
        </div>
        <div className="BarraBotonesTexto">
          <button>Entrenadores</button>
          <button>Recomendacion de suplementos</button>
          <button>Clases disponibles</button>
          <button>Buzon de sugerencia</button>
        </div>
      </div>
    </div>
  );
};

export default BarraDeNavegacionBotones;
