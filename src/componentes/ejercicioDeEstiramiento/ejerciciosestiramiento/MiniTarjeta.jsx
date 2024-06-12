import React from "react";
import "./MiniTarjeta.css";
import DescripcionEjercicio from "./DescripcionEjercicio";
import EjercicioTiempo from "./EjercicioTiempo";
import Button from "./Button";

function MiniTarjeta({ ejercicios }) {
    if (!ejercicios) {
        return <div>No hay datos disponibles</div>;
    }

    const { nombre, imagen, tiempo, repeticiones } = ejercicios;

    return (
        <div className="contenedorTarjeta">
            <DescripcionEjercicio nombre={nombre} imagen={imagen} />
            <EjercicioTiempo tiempo={tiempo} repeticiones={repeticiones} />
            <Button />
        </div>
    );
}

export default MiniTarjeta;
