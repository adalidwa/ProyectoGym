import React from "react";
import "./video.css";

export const Video = ({ nombre, imagen, minutos, rep }) => {
  return (
    <div className="contVideo">
      <img className="imagen" src={imagen} alt={nombre} />
      <h3 className="nombreV">{nombre}</h3>
      <button className="Bplay">
        <img src="./src/assets/Play video.svg" alt="play" />
      </button>
      <div className="contDetalle">
        <h4 className="min">
          <img src="./src/assets/Vector.svg" alt="ico1" />
          {minutos}
        </h4>
        <h4 className="rep">
          <img src="./src/assets/Calories.svg" alt="ico2" />
          {rep}
        </h4>
      </div>
    </div>
  );
};
