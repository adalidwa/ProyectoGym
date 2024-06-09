import React from "react";
import PerfilNutricionista from "./PerfilNutricionista";
import BotonesNutricionista from "./BotonesNutricionista";
import Head from "./Head";
import './PantallaNutricionista.css';
function PantallaNutricionista()
{
    const imageUrl="https://www.outlookmag.org/wp-content/uploads/2018/09/iStock-855098134.jpg";
    return(
        <div className="ContenedorPantallaNutricionista">
            <Head/>
            <div className="ContenedorImagen2">
            <img src={imageUrl} alt="Descripción de la imagen" />
                <PerfilNutricionista/>
            </div>

            <BotonesNutricionista/>
        </div>
    );

}


export default PantallaNutricionista;