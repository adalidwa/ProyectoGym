import React, { useState, useEffect } from "react";
import "./TarjetaRecuperacion2.css";
import MiniTarjeta from './ejerciciosrecuperacion/MiniTarjeta2.jsx';
import Cabecerra from "../encabezado/Cabecera.jsx";
import Opciones from "./Opciones2.jsx";
import Cabecera from "../encabezado/Cabecera.jsx";

function generarIdsAleatorios(cantidad, maxId) {
  const ids = new Set();
  while (ids.size < cantidad) {
      const id = Math.floor(Math.random() * maxId) + 1;
      ids.add(id);
  }
  return Array.from(ids);
}

function TarjetaRecuperacion(){
  const [ejercicios, setEjercicios] = useState([]);
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
  const cantidadTarjetas = 4; 
  const maxId = 22; 

  const obtenerEjercicios = () => {
      const idsAleatorios = generarIdsAleatorios(cantidadTarjetas, maxId);

      
      const fetchEjercicios = async () => {
          const ejerciciosData = await Promise.all(
              idsAleatorios.map(id =>
                  fetch(`https://6660fa7463e6a0189fe81aa5.mockapi.io/api/v1/recuperacion/${id}`)
                      .then(response => response.json())
                      .catch(error => console.error(`Error fetching data for ID ${id}:`, error))
              )
          );
          setEjercicios(ejerciciosData);
      };

      fetchEjercicios();
  };

  const handleOpcionesClick = () => {
      setMostrarEjercicios(!mostrarEjercicios);
      if (!mostrarEjercicios) {
          obtenerEjercicios();
      }
  };
  return (
    <>
      <div className="contenedorTRecuperacion">
        <Cabecera/>
        <Opciones />
        <Opciones />
        <Opciones onClick={handleOpcionesClick} isOpen={mostrarEjercicios}/>
            {mostrarEjercicios && (
                <div className="contenedorMinitarjeta">
                    {ejercicios.map(ejercicios => (
                        <MiniTarjeta key={ejercicios.id} ejercicios={ejercicios} />
                    ))}
                </div>
            )}

      </div>
    </>
  );
}

export default TarjetaRecuperacion;
