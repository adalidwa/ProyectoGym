import React from "react";
import './Novedades.css'

const Novedades = () =>{
    return (
        <div className="ContenedorGeneral">
            <div className="ContenedorNovedades">
                <div className="contenedorFigura">
                    <div className="circulo"></div>
                    <div className="linea"></div>
                </div>
                <div className="contenedorTexto">
                    <h1 className="Fecha">Mayo 2024</h1>
                    <h1 className="Novedad">Evital Fisio&Spa</h1>
                    <h2 className="Descripcion">No te pierdas esta gran promoción que traemos para ti! Te ofrecemos una limpieza completa al 2x1! Que mejor regalo que darle a mamá un servicio al que puedan asistir juntas!✨ No esperes más y agenda tu cita!📅 
    Te esperamos en CentMaxFit, en la Av Montenegro torre Melbourne, subsuelo.</h2>
                </div>
            </div>
            <div className="ContenedorNovedades">
                <div className="contenedorFigura">
                    <div className="circulo"></div>
                    <div className="linea"></div>
                </div>
                <div className="contenedorTexto">
                    <h1 className="Fecha">Mayo 2024</h1>
                    <h1 className="Novedad">Plan Amigas</h1>
                    <h2 className="Descripcion">Te presentamos el plan exclusivo para mujeres!✨
Ven a entrenar con tus amigas a un precio único de bs 220 cada una! (Aplica a 3 personas)
Te esperamos en CentMaxFit, en la Av Montenegro torre Melbourne, subsuelo.</h2>
                </div>
            </div>
        </div>
    )
}

export default Novedades;