import React from "react"
import "./MiniTarjeta.css"
import DescripcionEjercicio from "./DescripcionEjercicio";
import EjercicioTiempo from "./EjercicioTiempo";
import Button from "./Button"

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