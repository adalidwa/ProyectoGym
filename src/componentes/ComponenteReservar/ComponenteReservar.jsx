import React, { useState, useEffect } from "react";
import './ComponenteReservar.css';

const ComponenteReservar = () => {
    const [claseSeleccionada, setClaseSeleccionada] = useState(null);
    const [clases, setClases] = useState([]);
    const [mostrarComponente, setMostrarComponente] = useState(true);

    useEffect(() => {
        fetch('Clases.json')
            .then(response => response.json())
            .then(data => setClases(data))
            .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    useEffect(() => {
        if (clases.length > 0) {
            const randomIndex = Math.floor(Math.random() * clases.length);
            setClaseSeleccionada(clases[randomIndex]);
        }
    }, [clases]);

    const handleCancelar = () => {
        setMostrarComponente(false);
    };

    if (!mostrarComponente) {
        return null; // Retorna null para que el componente no se renderice
    }

    return (
        <div className="ContenedorReservar">
            <div className="ContenedorConfirmacion">
                {claseSeleccionada ? (
                    <React.Fragment>
                        <h1 className="TextoConfirmacion">
                            {`¿Desea reservar un cupo en la clase de ${claseSeleccionada.clase} en el horario de ${claseSeleccionada.horaInicio} a ${claseSeleccionada.horaFin} con ${claseSeleccionada.instructor}?`}
                        </h1>
                        <div className="BotonesOpciones">
                            <button className="BotonesOp">RESERVAR</button>
                            <button className="BotonesOp" onClick={handleCancelar}>CANCELAR</button>
                        </div>
                    </React.Fragment>
                ) : (
                    <p>Cargando datos...</p>
                )}
            </div>
        </div>
    );
};

export default ComponenteReservar;
