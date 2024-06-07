import React, { useState } from "react";
import "./BarraNavegacion.css";
import barras from "../../assets/icons/3barritas.png";
import BarraDeMenu from "../BarraDeMenu/BarraDeMenu";
const BarraNavegacion = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="barraDeNavegacion">
      <div className="contenedor">
        <h1 className="titulo">GYM CENTIMAXFIX</h1>
        <img className="barritas " src={barras} alt="" onClick={toggleMenu}/>
      </div>
      <BarraDeMenu isVisible={menuVisible} />
    </div>
  );
};

export default BarraNavegacion;
