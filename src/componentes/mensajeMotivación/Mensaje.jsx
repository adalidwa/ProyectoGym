import React from "react"
import "./Mensaje.css"
import Fuerza from "../../assets/iconos/Fuerza.png"
import { useEffect,useState } from "react";

function Mensaje (){

    const [frase, setCite] = useState("");

    const frases = [
        'Cada gota de sudor,cada repetición y cada minuto en el gimnasio es una inversión en tu salud y bienestar ¡Tú puedes!',
        'Cada esfuerzo, cada levantamiento y cada segundo en el gimnasio es un paso hacia una versión más fuerte de ti mismo. ¡Sigue adelante!',
        'Cada dolor, cada kilómetro y cada repetición cuentan en el camino a tu mejor versión. ¡Continúa!',
        'Esfuerzarte en el gimnasio hoy es construir una vida más saludable mañana. ¡Sigue adelante!',
        'Los retos en el gimnasio son oportunidades para superar tus límites. ¡No te detengas!',
        'Con cada esfuerzo y cada sacrificio te acercas más a tus metas. ¡No pares ahora!',
        'La constancia en el gimnasio te llevará a una vida más fuerte y saludable. ¡Tú lo tienes!',
        'Enfrenta cada entrenamiento con determinación y verás resultados sorprendentes. ¡No te rindas!',
        'El compromiso con tu rutina de ejercicio es una promesa a ti mismo. ¡Mantén la constancia!',
        'Los días de entrenamiento duro son los que te transforman. ¡Sigue luchando!',
        'La pasión por mejorar te impulsará a superar cualquier obstáculo. ¡Tú puedes!',
        'Cada segundo en el gimnasio, cada repetición y cada esfuerzo son inversiones en tu salud y felicidad. ¡Tú lo estás logrando!',
        'Los desafíos en el gimnasio son oportunidades para mostrar tu fuerza interior. ',
        'Avanzar paso a paso en tu entrenamiento te llevará a grandes logros. ¡No te detengas!',
        'El esfuerzo que pones hoy se reflejará en la persona que serás mañana. ¡Sigue luchando!',
        'La energía y dedicación que inviertes en el gimnasio te recompensarán. ¡Sigue adelante!',
        'Cada entrenamiento es una victoria en tu camino hacia un mejor tú. ¡No pares!',
        'El camino hacia tus metas está pavimentado con esfuerzo y perseverancia. ¡No te rindas!',
        'Fortalecer tu cuerpo es también fortalecer tu mente. ¡Sigue adelante!',
        'Transformar tu cuerpo comienza con la decisión de no rendirte. ¡Sigue adelante!'
    ];

    useEffect(() => {
        const randomCite = frases[Math.floor(Math.random() * frases.length)];
        setCite(randomCite);
    }, []); 

    return(
    <div className="ContenedorP">
            <img src={Fuerza} alt="" />
            <div className="contenedorLetra">
                <h1>CENTAMAX FIX</h1>
                <p id="cite">{frase}</p>
            </div>
    
    </div>
    )
}

export default Mensaje;