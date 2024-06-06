import React from "react";
import './RecomendacionDieta.css'

const RecomendacionDieta = () =>{
    const imageUrl = "https://www.gourmet.com.co/wp-content/uploads/2021/03/porciones-de-comida.jpg";
    return (
        <div className="ContenedorTotal">
            <div className="ContenedorRecomendacion">
                <h1 className="Titulo">RECOMENDACIÓN DEL DÍA</h1>
                <h2 className="subtitulo">Controlar el tamaño de las porciones</h2>
                <h2 className="Descripcion">Asegúrate de controlar el tamaño de las porciones para evitar comer en exceso o subestimar tus necesidades calóricas. Escucha las señales de hambre y saciedad de tu cuerpo y come conscientemente.</h2>
                <div className="contenedorImagen">
                    <img src={imageUrl} alt="Descripción de la imagen" />
                </div>
            </div>
        </div>
    )
}

export default RecomendacionDieta;