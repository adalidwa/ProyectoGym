import React, { useState, useEffect } from "react";
import './RecomendacionDieta.css';
import BotonCancelar from '../../assets/imagens/BotonCancelar.png';

const RecomendacionDieta = () => {
    const [data, setData] = useState(null);
    const [selectedRecomendacion, setSelectedRecomendacion] = useState(null);
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad

    useEffect(() => {
        fetch('https://661037cf0640280f219c98cc.mockapi.io/api/v2/componentes')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const randomIndex = Math.floor(Math.random() * data.length);
                setSelectedRecomendacion(data[randomIndex]);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Ocultar la ventana emergente
    };

    if (!data) {
        return <div>Cargando...</div>;
    }

    if (!selectedRecomendacion) {
        return <div>Cargando recomendación...</div>;
    }

    if (!isVisible) {
        return null; // No renderizar nada si la ventana no es visible
    }

    return (
        <div className="ContenedorTotal">
            <div className="ContenedorRecomendacion">
                <button className="BotonCerrarRecomendacion" onClick={handleClose}>
                    <img className="BotonCerrarRecomendacion" src={BotonCancelar} alt="Cerrar" />
                </button>
                <h1 className="Titulo">RECOMENDACIÓN DEL DÍA</h1>
                <h2 className="subtitulo">{selectedRecomendacion.subtitulo}</h2>
                <h2 className="Descripcion">{selectedRecomendacion.descripcion}</h2>
                <div className="contenedorImagenRecomendacion">
                    <img src={selectedRecomendacion.imagenUrl} alt="Descripción de la imagen" />
                </div>
            </div>
        </div>
    );
};

export default RecomendacionDieta;
