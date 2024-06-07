import React, { useEffect, useState } from "react";
import "./TarjetaRutina.css"
import MiniTarjeta from "./ejercicios/MiniTarjeta";
import Barranav from "../encabezado/Barranav";
import Opciones from "./Opciones";

function generarIdsAleatorios(cantidad, maxId) {
    const ids = new Set();
    while (ids.size < cantidad) {
        const id = Math.floor(Math.random() * maxId) + 1;
        ids.add(id);
    }
    return Array.from(ids);
}

  
function TarjetaRutina(){
    const [ejercicios, setEjercicios] = useState([]);
    const cantidadTarjetas = 4; // Cantidad de mini tarjetas que deseas mostrar
    const maxId = 22; // ID máximo de la API

    useEffect(() => {
        const idsAleatorios = generarIdsAleatorios(cantidadTarjetas, maxId);

        // Realizar solicitudes a la API para obtener los ejercicios
        const fetchEjercicios = async () => {
            const ejerciciosData = await Promise.all(
                idsAleatorios.map(id =>
                    fetch(`https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/ejercicios/${id}`)
                        .then(response => response.json())
                        .catch(error => console.error(`Error fetching data for ID ${id}:`, error))
                )
            );
            setEjercicios(ejerciciosData);
        };

        fetchEjercicios();
    }, []);
    
    return(
        <>
        <div className="contenedorT">
            <Barranav/>
            <Opciones/>
            <div className="contenedorMinitarjeta">
            {ejercicios.map(ejercicio => (
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