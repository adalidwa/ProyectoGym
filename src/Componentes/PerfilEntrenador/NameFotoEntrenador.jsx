import React from "react";
import Img from "../img/FotoEt1.png";
import "./NameFotoEntrenador.css";
const NameFotoEntrenador = () => {
  return (
    <div className="FotoNameIng">
      <div className="Name">
        <h1>MARIO HUGO HERRERA QUISPE</h1>
      </div>
      <div className="ImagenName">
        <img src={Img} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default NameFotoEntrenador;