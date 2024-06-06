import React from "react";
import BarraDeNavegacionPerfil from "./BarraDeNavegacionPerfil.jsx";
import BarraDeNavegacionBotones from "./BarraDeNavegacionBotones.jsx";
import BarraDeNavegacionHorario from "./BarraDeNavegacionHorario.jsx";
import "./BarraDeNavegacion.css";
const BarraDeNavegacion = () => {
  return (
    <div className="BarraDeNavegacion">
      <BarraDeNavegacionPerfil />
      <BarraDeNavegacionBotones />
      <BarraDeNavegacionHorario />
    </div>
  );
};

export default BarraDeNavegacion;
