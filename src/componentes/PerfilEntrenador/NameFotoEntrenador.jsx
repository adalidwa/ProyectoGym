import React from "react";
import "./NameFotoEntrenador.css";
const NameFotoEntrenador = ({ nombre, avatar }) => {
  return (
    <div className="FotoNameIng">
      <div className="Name">
        <h1>{nombre}</h1>
      </div>
      <div className="ImagenName">
        <img src={avatar} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default NameFotoEntrenador;