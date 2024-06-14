import React from "react";
import './Novedades.css';

const Novedades = ({ fecha, novedad, descripcion }) => {
    return (
        <div className="ContenedorNovedades">
            <div className="contenedorFigura">
                <div className="circulo"></div>
                <div className="linea"></div>
            </div>
            <div className="contenedorTexto">
                <h1 className="FechaNovedad">{fecha}</h1>
                <h1 className="Novedad">{novedad}</h1>
                <h1 className="DescripcionNovedad">{descripcion}</h1>
            </div>
        </div>
    );
}

export default Novedades;
