import React, { useEffect, useState } from "react";
import './TimelineNovedades.css';
import Novedades from './Novedades';
import cerrarNovedades from '/src/assets/icons/x.png';

function TimelineNovedades() {
    const [novedades, setNovedades] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad

    useEffect(() => {
        fetch('/Novedades.json')
            .then(response => response.json())
            .then(data => {
                setNovedades(data);
                const randomIndex = Math.floor(Math.random() * (data.length - 1)); // Ensure there's a successor
                setSelectedIndex(randomIndex);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (novedades.length === 0 || selectedIndex === null || !visible) { // Agregar condición de visibilidad
        return null; // Devuelve null para que el componente desaparezca
    }

    const itemsToShow = novedades.slice(selectedIndex, selectedIndex + 2);

    const handleClose = () => {
        setVisible(false); // Cambiar el estado de visibilidad al presionar el botón
    };

    return (
        <div className="ContenedorGeneral">
            <button className="cerrarNovedades" onClick={handleClose}> {/* Agregar onClick para manejar el cierre */}
                <img className="cerrarNovedades" src={cerrarNovedades} alt="Cerrar novedades" />
            </button>
            {itemsToShow.map((novedad, index) => (
                <Novedades 
                    key={index}
                    fecha={novedad.FechaNovedad}
                    novedad={novedad.Novedad}
                    descripcion={novedad.DescripcionNovedad}
                />
            ))}
        </div>
    );
}

export default TimelineNovedades;
