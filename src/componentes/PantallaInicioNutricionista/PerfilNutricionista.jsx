import React, { useEffect, useState } from "react";
import "./PerfilNutricionista.css";

const PerfilNutricionista = () => {
  const [nutricionista, setNutricionista] = useState({ firstname: "", avatar: "" });

  useEffect(() => {
    fetch("https://661037cf0640280f219c98cc.mockapi.io/api/v2/nutricionistas")
      .then((response) => response.json())
      .then((data) => {
        const randomNutricionista = data[Math.floor(Math.random() * data.length)];
        setNutricionista({
          firstname: randomNutricionista.firstname,
          avatar: randomNutricionista.avatar,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="PerfilNutricionista">
        <div className="contenedorUsuarioNutricionista">
            <h1 className="Bienvenido3">Bienvenid@</h1>
            <div className="contenedorImagenPN">
                <img src={nutricionista.avatar} alt="Descripción de la imagen" />
            </div>
        </div>
        <div className="ContenedorNombreNutricionista">
            <h2 className="nombreNutricionista">{nutricionista.firstname}</h2>
        </div>
    </div>
);
};

export default PerfilNutricionista;
