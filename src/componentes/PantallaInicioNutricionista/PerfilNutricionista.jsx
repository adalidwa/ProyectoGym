import React, { useEffect, useState } from "react";
import "./PerfilNutricionista.css";

const PerfilNutricionista = () => {
  const [cliente, setCliente] = useState({ name: "", avatar: "" });

  useEffect(() => {
    fetch("https://661037cf0640280f219c98cc.mockapi.io/api/v2/clients")
      .then((response) => response.json())
      .then((data) => {
        const randomCliente = data[Math.floor(Math.random() * data.length)];
        setCliente({
          name: randomCliente.name,
          avatar: randomCliente.avatar,
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
                <img src={cliente.avatar} alt="Descripción de la imagen" />
            </div>
        </div>
        <div className="ContenedorNombreNutricionista">
            <h2 className="nombreNutricionista">{cliente.name}</h2>
        </div>
    </div>
);
};

export default PerfilNutricionista;
