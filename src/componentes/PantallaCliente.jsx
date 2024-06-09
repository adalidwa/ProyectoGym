import React from "react";
import PerfilCliente from "./PerfilCliente";
import BotonesCliente from "./BotonesCliente"
import Cabecera from "./Cabecera/Cabecera";
import './PantallaCliente.css';
function PantallaCliente()
{
    const imageUrl="https://mui.fitness/__export/1620949604069/sites/muifitness/img/2021/05/13/lat_pushdown.jpg_1890520882.jpg";
    return(
        <div className="ContenedorPantallaCliente">
            <Cabecera/>
            <div className="ContenedorImagen">
            <img src={imageUrl} alt="Descripción de la imagen" />
                <PerfilCliente/>
            </div>

            <BotonesCliente/>
        </div>
    );

}


export default PantallaCliente;