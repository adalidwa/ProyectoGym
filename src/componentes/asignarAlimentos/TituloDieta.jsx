import React from "react";
import Fecha from "../img/Flecha.png";
import "./TituloDieta.css";

const TituloDieta = () => {
  return (
    <div className="titulodi">
      <div className="tituloimagendi">
        <img src={Fecha} alt="" />
        <p>EJERCICIOS</p>
      </div>
    </div>
  );
};

export default TituloDieta;
