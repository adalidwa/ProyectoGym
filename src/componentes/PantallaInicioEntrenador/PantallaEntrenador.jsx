import React from "react";
import PerfilNutricionista from "../PerfilNutricionista";
import BotonesEntrenador from "./BotonesEntrenador";
import Cabecera from "../Cabecera/Cabecera";
import './PantallaEntrenador.css';
import PerfilEntrenador from "./PerfilEntrenador";
function PantallaEntrenador()
{
    const imageUrl="https://media.istockphoto.com/id/679304972/es/foto/hombre-de-levantamiento-de-pesas.jpg?s=612x612&w=0&k=20&c=VFqZxFousGXPKDt3mXGu4IhCeDWb4Jt-kewxwzYHpwc=";
    return(
        <div className="ContenedorPantallaEntrenador">
            <Cabecera/>
            <div className="ContenedorImagenPE">
            <img src={imageUrl} alt="Entrenador" />
                <PerfilEntrenador/>
            </div>
            <BotonesEntrenador/>
        </div>
    );

}


export default PantallaEntrenador;