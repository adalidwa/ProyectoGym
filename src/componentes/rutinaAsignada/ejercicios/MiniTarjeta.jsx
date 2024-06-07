import React from "react"
import "./MiniTarjeta.css"
import DescripcionEjercicio from "./DescripcionEjercicio";
import EjercicioTiempo from "./EjercicioTiempo";
import Button from "./Button"

function MiniTarjeta(){
    return (
        <>
            <div className="contenedorTarjeta">
                <DescripcionEjercicio/>
                <EjercicioTiempo/>
                <Button/>
            </div>
        </>

    )
}

export default MiniTarjeta;