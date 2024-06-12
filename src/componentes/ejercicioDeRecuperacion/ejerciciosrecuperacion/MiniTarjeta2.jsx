import React from "react"
import "./MiniTarjeta2.css"
import DescripcionEjercicio2 from "./DescripcionEjercicio2.jsx";
import EjercicioTiempo2 from "./EjercicioTiempo2.jsx";
import Button from "./Button2.jsx";
function MiniTarjeta2({ ejercicios }) {
    if (!ejercicios) {
        return <div>No hay datos disponibles</div>;
    }

    const { nombre, imagen, tiempo, repeticiones } = ejercicios;

    return (
        <div className="contenedorTarjetaRecuperacion">
            <DescripcionEjercicio2 nombre={nombre} imagen={imagen} />
            <EjercicioTiempo2 tiempo={tiempo} repeticiones={repeticiones} />
            <Button />
        </div>
    );
}

export default MiniTarjeta2;