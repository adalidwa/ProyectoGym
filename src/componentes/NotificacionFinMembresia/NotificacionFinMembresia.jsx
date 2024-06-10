import React, { useState, useEffect } from "react";
import './NotificacionFinMembresia.css'
import circulo from '/src/assets/icons/Group 2.png';

const NotificacionFinMembresia = () =>{
    const [finMembresia, setFinMembresia] = useState('');
    
    useEffect(() => {
        const randomUserId = Math.floor(Math.random() * 50) + 1;
        const apiUrl = `https://6661a6e163e6a0189feaef7e.mockapi.io/Users/${randomUserId}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setFinMembresia(data.finmembresia);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="ContenedorNotificacion">
            <div className="contenedorImagenCirculo">
                    <img src={circulo} alt="Cargando..." />
            </div>
            <div className="ContenedorMensajeMembresia">
                <h1 className="FinMembresia">Estimado usuario, le recordamos que su membresía
                    vence el {finMembresia}
                </h1>
            </div>
        </div>
    )
}

export default NotificacionFinMembresia;
