import React from "react";
import "./BarraDeNavegacionHorario.css";
import RelojDeArena from "../assets/RelojDeArena.png";
const BarraDeNavegacionHorario = () => {
  return (
    <div className="BarraHorario">
      <div className="BarraHorarioTitulo">
        <div className="BarraFoto">
        <img src={RelojDeArena} alt="" />
        </div>
        <p>HORARIO</p>
      </div>
      <p>Lunes martes 6:00 AM - 9:00 PM</p>
      <p>Sabado 7:00 AM - 9:00 PM</p>
      <p>Domingo 8:00 AM - 8:00 PM</p>
    </div>
  );
};

export default BarraDeNavegacionHorario;
