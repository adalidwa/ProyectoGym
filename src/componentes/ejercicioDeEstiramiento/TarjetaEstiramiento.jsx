import React, { useEffect, useState } from "react";
import "./TarjetaEstiramiento.css";
import MiniTarjeta from "./ejerciciosestiramiento/MiniTarjeta";
import Cabecera from "../encabezado/Cabecera";
import Opciones from "./Opciones";

function generarIdsAleatorios(cantidad, maxId) {
    const ids = new Set();
    while (ids.size < cantidad) {
        const id = Math.floor(Math.random() * maxId) + 1;
        ids.add(id);
    }
    return Array.from(ids);
}

function TarjetaEstiramiento(){
    const [ejercicios, setEjercicios] = useState([]);
    const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
    const cantidadTarjetas = 4; 
    const maxId = 22; 

    const obtenerEjercicios = () => {
        const idsAleatorios = generarIdsAleatorios(cantidadTarjetas, maxId);

        const fetchEjercicios = async () => {
            const ejerciciosData = await Promise.all(
                idsAleatorios.map(id =>
                    fetch(`https://6660fa7463e6a0189fe81aa5.mockapi.io/api/v1/estiramiento/${id}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Error fetching data for ID ${id}: ${response.statusText}`);
                            }
                            return response.json();
                        })
                        .catch(error => {
                            console.error(`Error fetching data for ID ${id}:`, error);
                            return null; // Return null for failed fetches
                        })
                )
            );
            // Filter out null values (failed fetches) before setting state
            setEjercicios(ejerciciosData.filter(ejercicio => ejercicio !== null));
        };

        fetchEjercicios();
    };

    const handleOpcionesClick = () => {
        setMostrarEjercicios(!mostrarEjercicios);
        if (!mostrarEjercicios) {
            obtenerEjercicios();
        }
    };
    
    return(
        <>
        <div className="contenedorT">
            <Cabecera/>
            <Opciones/>
            <Opciones onClick={handleOpcionesClick} isOpen={mostrarEjercicios}/>
            {mostrarEjercicios && (
                <div className="contenedorMinitarjeta">
                    {ejercicios.map(ejercicio => (
                        <MiniTarjeta key={ejercicio.id} ejercicios={ejercicio} />
                    ))}
                </div>
            )}
            <Opciones/>
        </div>
        </>
    )
}

export default TarjetaEstiramiento;
