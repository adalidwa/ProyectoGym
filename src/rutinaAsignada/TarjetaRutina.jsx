import React from "react"
import "./TarjetaRutina.css"
import MiniTarjeta from "./ejercicios/MiniTarjeta";
import { useEffect,useState } from "react";
import Barranav from "../encabezado/Barranav";
import Opciones from "./Opciones";

function NumAleatorios() {
  const num = [];
  for (let i = 0; i <= 3; i++) {
    num.push(Math.floor(Math.random() * 20));
  }
  num.toString();
  return num;
}

function TarjetaRutina(){
    const [ejercicios, setejercicios] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + NumAleatorios())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setejercicios(data)
        console.log(data)
      });
 
  }, [])
    return(
        <>
        <div className="contenedorT">
            <Barranav/>
            <Opciones/>
            <div className="contenedorMinitarjeta">
            {ejercicios.map((ejercicio) => (
             <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} />
            ))}
                
            </div>
            <Opciones/>
            <Opciones/>
        </div>
        </>

    )
}

export default TarjetaRutina;