import React from "react";
import PerfilNutricionista from "./PerfilNutricionista";
import BotonesEntrenador from "./BotonesEntrenador";
import Cabecera from "./Cabecera";
import './PantallaNutricionista.css';
function PantallaEntrenador()
{
    const imageUrl="https://media.istockphoto.com/id/679304972/es/foto/hombre-de-levantamiento-de-pesas.jpg?s=612x612&w=0&k=20&c=VFqZxFousGXPKDt3mXGu4IhCeDWb4Jt-kewxwzYHpwc=";
    return(
        <div className="ContenedorPantallaNutricionista">
            <Cabecera/>
            <div className="ContenedorImagen2">
            <img src={imageUrl} alt="Descripción de la imagen" />
                <PerfilNutricionista/>
            </div>

            <BotonesEntrenador/>
        </div>
    );

}


export default PantallaEntrenador;