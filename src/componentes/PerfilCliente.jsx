import React, { useEffect, useState } from "react";
import './PerfilCliente.css';
import calendario from '/src/assets/icons/calendar-regular 1.png';

const PerfilCliente = () => {
    const [cliente, setCliente] = useState({ name: '', avatar: '' });

    useEffect(() => {
        fetch('https://661037cf0640280f219c98cc.mockapi.io/api/v2/clients')
            .then(response => response.json())
            .then(data => {
                const randomCliente = data[Math.floor(Math.random() * data.length)];
                setCliente({
                    name: randomCliente.name,
                    avatar: randomCliente.avatar
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="PerfilCliente">
            <div className="contenedorUsuario">
                <h1 className="Bienvenido">Bienvenid@</h1>
                <div className="contenedorImagen">
                    <img src={cliente.avatar} alt="Descripción de la imagen" />
                </div>
            </div>
            <div className="ContenedorNombre">
                <h2 className="nombre">{cliente.name}</h2>
                <button className="calendario">
                    <img className="calendario" src={calendario} alt="" />
                </button>
            </div>
        </div>
    );
}

export default PerfilCliente;
