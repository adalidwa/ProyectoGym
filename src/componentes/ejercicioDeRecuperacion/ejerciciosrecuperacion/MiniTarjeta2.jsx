import React from "react"
import "./MiniTarjeta2.css"
import DescripcionEjercicio from "./DescripcionEjercicio2.jsx";
import EjercicioTiempo2 from "./EjercicioTiempo2.jsx";
import Button from "./Button2.jsx";
function MiniTarjeta2({ ejercicio }){
    return (
        <>
            <div className="contenedorTarjeta">
                <DescripcionEjercicio nombre={ejercicio.nombre} imagen={ejercicio.imagen}/>
                <EjercicioTiempo2 tiempo={ejercicio.tiempo} repeticiones={ejercicio.repeticiones} />
                <Button/>
            </div>
        </>

    )
}

export default MiniTarjeta2;