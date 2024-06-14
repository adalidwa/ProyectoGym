import React, { useState, useEffect } from "react";
import './ComponenteReservar.css';

const ComponenteReservar = (props) => {
    const users=props.users;
    const entre=props.entre;
    const [claseSeleccionada, setClaseSeleccionada] = useState(1);
    const [clases, setClases] = useState([]);
    const [mostrarComponente, setMostrarComponente] = useState(true);



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
                            {`¿Desea reservar un cupo en la clase de ${users.NombreCurso} en el horario de ${users.Hora} con ${entre.firstname} ${entre.lastname}  `}
                        </h1>
                        <div className="BotonesOpciones">
                            <button className="BotonesOp" onClick={handleCancelar}>RESERVAR</button>
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
