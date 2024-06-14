import React, { useEffect, useState } from "react";
import "./TarjetaRutina.css";
import MiniTarjeta from "./ejercicios/MiniTarjeta";
import useStore from '../../assets/store/useStore.js';
import Button from "./ejercicios/Button";
import BarraNavegacion from "../BarraNavegacionAll/BarraNavegacion";

function generarIdsAleatorios(cantidad, maxId) {
    const ids = new Set();
    while (ids.size < cantidad) {
        const id = Math.floor(Math.random() * maxId) + 1;
        ids.add(id);
    }
    return Array.from(ids);
}

function TarjetaRutina() {
    const [ejercicios, setEjercicios] = useState([]);
    const [ejerciciosRutina, setEjerciciosRutina] = useState([]);
    const [ejerciciosEstiramiento, setEjerciciosEstiramiento] = useState([]);
    const [ejerciciosRecuperacion, setEjerciciosRecuperacion] = useState([]);
    const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
    const [mostrarRutina, setMostrarRutina] = useState(false);
    const [mostrarEstiramiento, setMostrarEstiramiento] = useState(false);
    const [mostrarRecuperacion, setMostrarRecuperacion] = useState(false);
    const [completados, setCompletados] = useState(0);
    const cantidadTarjetas = 4;
    const maxId = 22;

    const obtenerEjercicios = async (setFuncion) => {
        const idsAleatorios = generarIdsAleatorios(cantidadTarjetas, maxId);
        const ejerciciosData = await Promise.all(
            idsAleatorios.map(id =>
                fetch(`https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/ejercicios/${id}`)
                    .then(response => response.json())
                    .catch(error => console.error(`Error fetching data for ID ${id}:`, error))
            )
        );
        setFuncion(ejerciciosData);
    };

    const handleOpcionesClick = () => {
        setMostrarEjercicios(!mostrarEjercicios);
        if (!mostrarEjercicios) {
            obtenerEjercicios(setEjercicios);
        }
    };

    const handleMostrarRutina = () => {
        setMostrarRutina(!mostrarRutina);
        if (!mostrarRutina) {
            obtenerEjercicios(setEjerciciosRutina);
        }
    };

    const handleMostrarEstiramiento = () => {
        setMostrarEstiramiento(!mostrarEstiramiento);
        if (!mostrarEstiramiento) {
            obtenerEjercicios(setEjerciciosEstiramiento);
        }
    };

    const handleMostrarRecuperacion = () => {
        setMostrarRecuperacion(!mostrarRecuperacion);
        if (!mostrarRecuperacion) {
            obtenerEjercicios(setEjerciciosRecuperacion);
        }
    };

    const handleCompletarEjercicio = () => {
        setCompletados(completados + 1);
    };
    const id = useStore((state) => state.id);

    return (
        <>
        <div className="contenedor_usuario">
        <BarraNavegacion  id={id}/>
            <div className="contenedorT">
                {mostrarEjercicios && (
                    <div>
                        <Button onClick={() => obtenerEjercicios(setEjercicios)} label="Recargar Ejercicios" />
                        <div className="contenedorMinitarjeta">
                            {ejercicios.map(ejercicio => (
                                <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} onComplete={handleCompletarEjercicio} />
                            ))}
                        </div>
                        <p>Ejercicios completados: {completados}</p>
                    </div>
                )}
                <div className="seccionEjercicios">
                    <h2 onClick={handleMostrarRutina} style={{ cursor: 'pointer' }}>
                        Rutina Asignada
                    </h2>
                    {mostrarRutina && (
                        <div className="contenedorMinitarjeta">
                            {ejerciciosRutina.map(ejercicio => (
                                <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} onComplete={handleCompletarEjercicio} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="seccionEjercicios">
                    <h2 onClick={handleMostrarEstiramiento} style={{ cursor: 'pointer' }}>
                        Ejercicios de Estiramiento
                    </h2>
                    {mostrarEstiramiento && (
                        <div className="contenedorMinitarjeta">
                            {ejerciciosEstiramiento.map(ejercicio => (
                                <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} onComplete={handleCompletarEjercicio} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="seccionEjercicios">
                    <h2 onClick={handleMostrarRecuperacion} style={{ cursor: 'pointer' }}>
                        Ejercicios de Recuperación
                    </h2>
                    {mostrarRecuperacion && (
                        <div className="contenedorMinitarjeta">
                            {ejerciciosRecuperacion.map(ejercicio => (
                                <MiniTarjeta key={ejercicio.id} ejercicio={ejercicio} onComplete={handleCompletarEjercicio} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default TarjetaRutina;
