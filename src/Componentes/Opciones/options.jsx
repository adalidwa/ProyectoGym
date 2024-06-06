import React from "react";
import "./options.css"

export const Options = ({ nombre, imagen }) => {
  return (
    <div className="contenedor">
      <h3 className="nombre">{nombre}</h3>
      <img className="imagen" src={imagen} alt={nombre} />
    </div>
  );
};
