import React, { useEffect, useState } from "react";
import "./PerfilEntrenador.css";

const PerfilEntrenador = () => {
  const [entrenador, setEntrenador] = useState({ firsname: "", avatar: "" });

  useEffect(() => {
    fetch("https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores")
      .then((response) => response.json())
      .then((data) => {
        const randomEntrenador = data[Math.floor(Math.random() * data.length)];
        setEntrenador({
          firsname: randomEntrenador.firsname,
          avatar: randomEntrenador.avatar,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="PerfilEntrenador">
        <div className="contenedorInfoEntrenador">
            <h1 className="Bienvenido2">Bienvenid@</h1>
            <div className="contenedorImagen2">
                <img src={entrenador.avatar} alt="Descripción de la imagen" />
            </div>
        </div>
        <div className="ContenedorNombreEntrenador">
            <h2 className="nombreEntrenador">{entrenador.firsname}</h2>
        </div>
    </div>
);
};

export default PerfilEntrenador;