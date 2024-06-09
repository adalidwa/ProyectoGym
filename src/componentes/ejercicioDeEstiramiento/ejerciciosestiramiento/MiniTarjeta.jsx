import React from "react"
import "./MiniTarjeta.css"
import DescripcionEjercicio from "./DescripcionEjercicio.jsx";
import EjercicioTiempo from "./EjercicioTiempo.jsx";
import Button from "./Button.jsx"

function MiniTarjeta({ ejercicio }){
    return (
        <>
            <div className="contenedorTarjeta">
                <DescripcionEjercicio nombre={ejercicio.nombre} imagen={ejercicio.imagen}/>
                <EjercicioTiempo tiempo={ejercicio.tiempo} repeticiones={ejercicio.repeticiones} />
                <Button/>
            </div>
        </>

    )
}

export default MiniTarjeta;