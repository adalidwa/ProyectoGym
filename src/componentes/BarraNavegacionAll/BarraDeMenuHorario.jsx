import React from "react";
import "./BarraDeMenuHorario.css";
import RelojDeArena from "../../assets/imagens/RelojDeArena.png";
const BarraDeMenuHorario = () => {
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

export default BarraDeMenuHorario;
