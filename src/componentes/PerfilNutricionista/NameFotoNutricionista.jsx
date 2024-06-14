import React from "react";
import "./NameFotoNutricionista.css";
const NameFotoNutricionista = ({ nombre, avatar }) => {
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

export default NameFotoNutricionista;