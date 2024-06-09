import React, { useState, useEffect } from "react";
import "./TarjetaEstiramiento.css";
import MiniTarjeta from './ejerciciosestiramiento/MiniTarjeta.jsx';
import Barranav from "../encabezado/Barranav.jsx";
import Opciones from "./Opciones.jsx";

function TarjetaRutina() {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    const apiEndpoint = "https://6660fa7463e6a0189fe81aa5.mockapi.io/api/v1/estiramiento ";

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Limit to 4 items
        const limitedData = data.slice(0, 4);
        setEjercicios(limitedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="contenedorT">
        <Barranav />
        <Opciones />
        <Opciones />
        <div className="contenedorMinitarjeta">
          {ejercicios.map(ejercicio => (
            <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} />
          ))}
        </div>
        <Opciones />
      </div>
    </>
  );
}

export default TarjetaRutina;
