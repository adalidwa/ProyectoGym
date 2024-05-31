import React from "react";
import './PerfilCliente.css'

const PerfilCliente = () =>{
    const imageUrl = "https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg";
    const imagenBoton = "https://c0.klipartz.com/pngpicture/321/463/gratis-png-icono-rojo-y-blanco-del-tablero-de-clip-fecha-del-calendario-icono-del-calendario-s-thumbnail.png";
    return (
        <div className="PerfilCliente">
            <div className="contenedorUsuario">
                <h1 className="Bienvenido">Bienvenid@</h1>
                <div className="contenedorImagen">
                    <img src={imageUrl} alt="Descripción de la imagen" />
                </div>
            </div>
            <div className="ContenedorNombre">
                <h2 className="nombre">Diego</h2>
                <button className="calendario">
                    <img src={imagenBoton} alt="Descripción de la imagen" />
                </button>
            </div>
        </div>
    )
}

export default PerfilCliente;