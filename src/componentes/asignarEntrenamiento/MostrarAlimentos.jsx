import React from "react";

const MostrarAlimentos = ({ alimentosSeleccionados }) => {
  return (
    <div>
      <h2>Alimentos seleccionados:</h2>
      <ul>
        {alimentosSeleccionados.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarAlimentos;